const _type = ["get"];
const _provider = "docker";
const _thing = "container";
const _title = "get";
const _description = "some desc";
const _opServer = {
    'ContainerInspect': '/v1.33'
};
const _opRequestMediaType = {
    'ContainerInspect': 'application/json'
};
const _opResponseMediaType = {
    'ContainerInspect': 'application/json'
};
const _opInputMap = {
    'ContainerInspect': {
        'request.path.id': input => input.data.Id
    }
};
const _inputDataSchema = {
    type: 'object',
    required: ['Id'],
    properties: {
        Id: {
            ref: 'operation::ContainerInspect://request.path.properties.id'
        }
    }
};
const _outputDataSchema = {
    ref: 'operation::ContainerInspect://response.body',
};
const _outputInfoMap = {
    id: data => data.Id,
    status: data => {
        //if (!output.data) throw new Error('No output.data');
        if (data.State.Status == 'exited') return 'stopped';
        if (data.State.Status == 'created') return 'stopped';
        if (data.State.Running) return 'started';
        if (data.State.Dead) return 'stopped';
        if (data.State.Paused) return 'stopped';
        if (data.State.Restarting) return 'stopped';

        return 'errored'
    }
};

let _noResultResponse = {
    status: 404,
    statusText: 'Not Found'
};
let _output;


//---------------------------------------
// Data <= Config
//---------------------------------------
const Config = (acc, config) => {
    let exclude = [
        'Volumes', 'Labels', 'Cmd', 'User', 'WorkingDir', 'EntryPoint'
    ];
    Object.keys(config).forEach(k => {
        if (k == "Env") {
            // docker generate duplicated env values, deduplicate it
            if (Array.isArray(config[k])) {
                acc[k] = Array.from(new Set(config[k]));
            };
        } else if (k == 'Image') {
            Image(acc, config[k]);
        } else {
            if (!exclude.includes(k)) acc[k] = config[k]
        };
    });
};
const Command = (acc, config) => {
    let include = ['Cmd', 'User', 'WorkingDir', 'Entrypoint'];
    acc.Command = {};
    Object.keys(config).forEach(k => {
        if (include.includes(k)) {
            if (k == 'Entrypoint') {
                // docker api has missspell
                acc.Command['EntryPoint'] = config[k];
            } else {
                acc.Command[k] = config[k];
            };
        };
    });
};
//---------------------------------------
// Image <= Config.Image
//---------------------------------------
const Image = (acc, image) => {
    let name = image.split('@')[0]
    if (!acc['Image']) acc.Image = {};
    acc.Image.ImageName = name;
    if (name.split(':').length == 0) acc.Image.ImageName = name + ':latest';
};
const ImageId = (acc, imageId) => {
    if (!acc['Image']) acc.Image = {};
    acc.Image.ImageId = imageId;
};
//---------------------------------------
// HostConfig
//---------------------------------------
const HostConfig = (data, hostConfig) => {
    if (typeof(hostConfig) != 'object') return;
    let ks = [
        'AutoRemove', 'Privileged', 'PublishAllPorts',
        'CpuCount', 'CpuShares', 'CpuPercent', 'CpusetCpus',
        'Devices', 'DiskQuota', 'IOMaximumBandwidth', 'IOMaximumIOps',
        'KernelMemory', 'Memory', 'MemoryReservation', 'MemorySwap', 'MemorySwappiness',
    ];

    PortBindings(data, hostConfig.PortBindings);
    data.HostConfig = Object.keys(hostConfig).reduce((acc, k) => {
        if (ks.includes(k)) {
            let v = hostConfig[k];
            // docker api return "" or null when no value
            if (v == null || v == "" || v == undefined) {
                acc[k] = undefined;
            } else {
                acc[k] = hostConfig[k];
            }
        };
        return acc;
    }, {})
};
//---------------------------------------
// PortBindings <= HostConfig.PortBindings
//---------------------------------------
const PortBindings = (data, PortBindings) => {
    if (PortBindings == null || typeof(PortBindings) != 'object') return;

    data.PortBindings = Object.keys(PortBindings).reduce((_acc, k) => {
        let port = Number(k.split('/')[0]);
        let protocol = k.split('/')[1];
        if (Array.isArray(PortBindings[k])) {
            PortBindings[k].forEach(_port => {
                _acc.push({
                    Port: typeof(port) == 'string' ? Number(port):port,
                    Protocol: protocol,
                    HostPort: typeof(_port.HostPort) == 'string' ? Number(_port.HostPort):_port.HostPort,
                    HostIp: typeof(_port.HostIp) == 'string' && _port.HostPort.length == 0 ? undefined:_port.HostIp,
                })
            });
        };
        return _acc;
    }, []);
};
//---------------------------------------
// Binds, Volumes <= Mounts
//---------------------------------------
const Mounts = (acc, mounts) => {
    if (Array.isArray(mounts) == false) return;
    acc.Binds = [];
    acc.Volumes = [];
    mounts.forEach(mount => {
        mount.Target = mount.Destination;
        delete mount.Destination

        if (mount.Type == 'bind') {
            acc.Binds.push(mount);
        };
        if (mount.Type == 'volume') {
            if (mount.Target != 'additionalProperties') {
                // exclude automatcially allocated volume
                acc.Volumes.push(mount);
            };
        };
    });
};
//---------------------------------------
// Labels
//---------------------------------------
const Labels = (labels) => {
    if (!labels) return;
    return Object.keys(labels).map(k => {
        return {
            key: k,
            value: labels[k]
        }
    });
};
//---------------------------------------
// NetworkingConfig <= NetworkSetting
//---------------------------------------
const NetworkSetting = (acc, networkSetting) => {
    const includes = ['IPAddress', 'NetworkID', 'NetworkName'];
    if (typeof(networkSetting) != 'object') return;
    let name = Object.keys(networkSetting.Networks)[0];
    if (typeof(networkSetting.Networks[name]) == 'object') {
        let n = {
            NetworkName: name
        };
        Object.keys(networkSetting.Networks[name]).forEach(k => {
            if (includes.includes(k)) n[k] = networkSetting.Networks[name][k]
        });
        return n;
    };
};
const data = (body) => {
    let remove = [
        'Volumes', 'GraphDriver', 'Labels'
    ];
    return Object.keys(body).reduce((acc, k) => {
        if (remove.includes(k)) return acc;
        if (k == 'Name') {
            acc['Name'] = body[k].replace('/', '')
            return acc;
        };
        if (k == 'Image') {
            ImageId(acc, body[k])
            return acc;
        };
        if (k == 'HostConfig') {
            HostConfig(acc, body[k])
            return acc;
        };
        if (k == 'Mounts') {
            Mounts(acc, body[k]);
            return acc;
        };
        if (k == 'Config') {
            Config(acc, body[k]);
            Command(acc, body[k]);
            return acc;
        };
        if (k == 'NetworkSettings') {
            acc['Network'] = NetworkSetting(acc, body[k])
            return acc;
        };

        acc[k] = body[k];
        return acc;
    }, {});
};

const _main = async (ContainerInspect) => {
    _output = await ContainerInspect.fetch();
    if (_output && _output.body != null && typeof(_output.body) == 'object') _output.data = data(_output.body);
};
await _main(ContainerInspect);
return _output;
