const _type = ["create"];
const _provider = "docker";
const _thing = "container";
const _title = "create";
const _description = "some desc";
const _opServer = {
    'ContainerCreate': '/v1.33',
};
const _opRequestMediaType = {
    'ContainerCreate': 'application/json'
};
const _opResponseMediaType = {
    'ContainerCreate': 'application/json'
};
const _opInputMap = {
    'ContainerCreate': {
        'request.query.name': input => input.data.Name,
        'request.body': (input) => {
            let body = {};
            //--------------------------------------
            // Cmd
            //--------------------------------------
            const Cmd = (_body) => {
                return input.data.Command.Cmd;
            };
            //--------------------------------------
            // Env
            //--------------------------------------
            const Env = (_body) => {
                if (
                    Array.isArray(input.connected.image) &&
                    input.connected.image.length > 0 &&
                    typeof(input.connected.image[0].data.ContainerConfig) == 'object' &&
                    Array.isArray(input.connected.image[0].data.ContainerConfig.Env)
                ) {
                    let env = input.connected.image[0].data.ContainerConfig.Env;
                    if (Array.isArray(input.data.Env)) env = env.concat(input.data.Env)
                    return env;
                };
                return input.data.Env;
            };

            //--------------------------------------
            // HostConfig
            //--------------------------------------
            const HostConfig = (_body) => {
                if (typeof(_body.HostConfig) != 'object') _body.HostConfig = {};
                if (typeof(input.data.HostConfig) == 'object') _body.HostConfig = Object.assign(_body.HostConfig, input.data.HostConfig)
                _body.HostConfig.PortBindings = PortBindings(_body)
                _body.HostConfig.Mounts = Mounts(_body)
            };
            //--------------------------------------
            // HostConfig.PortBindings <= PortBindings
            //--------------------------------------
            const PortBindings = (_body) => {
                if (Array.isArray(input.data.PortBindings) == false) return;
                return input.data.PortBindings.reduce((acc, port) => {
                    let k = port.Port + '/' + port.Protocol;
                    // should add to exposed ports as  well
                    //https://stackoverflow.com/questions/20428302/binding-a-port-to-a-host-interface-using-the-rest-api
                    if (typeof(_body.ExposedPorts) != 'object') _body.ExposedPorts = {}
                    _body.ExposedPorts[k] = {};

                    if (!acc[k]) acc[k] = [];
                    acc[k].push({
                        HostIp: port.HostIp,
                        HostPort: String(port.HostPort)
                    })
                    return acc;
                }, {})
            };
            //--------------------------------------
            // HostConfig.Mounts <= Vokumes, Binds
            //--------------------------------------
            const Mounts = (_body) => {
                let mounts = [];
                // Connected Volumes
                //if (Array.isArray(input.connected.volume) && input.connected.volume.length > 0) {
                //    mounts = input.connected.volume.reduce((acc, thingData) => {
                //        // skip if it is not connected in UI stack
                //        if (thingData.localId == undefined && thingData.remoteId) return acc;
                //        // get user input
                //        let Target = input.data.Volumes.reduce((acc, data) => {
                //            // thingData.localId was injected in  localSync when parent sync is done
                //            if (data.localId) {
                //                if (thingData.localId == data.localId) acc = data.Target; // from User
                //            } else {
                //                if (thingData.remoteId == data.remoteId) acc = data.Target; // from container thingData
                //            };
                //            return acc;
                //        }, undefined);
                //        if (!Target) throw new Error('couldnt find Target')
                //        acc.push({
                //            Source: thingData.data.Name,
                //            Target: Target,
                //            Type: 'volume'
                //        });
                //        return acc;
                //    }, []);
                //};
                if (Array.isArray(input.data.Volumes)) {
                    input.data.Volumes.forEach(v => {
                        if (v.Target  != 'additionalProperties' && v.Target && v.Source) {
                            // exclude auto allocated volume by docker
                            mounts.push({
                                Source: v.Source,
                                Target: v.Target,
                                Type: 'volume',
                            })
                        };
                    });
                }
                if (Array.isArray(input.data.Binds)) {
                    input.data.Binds.forEach(v => {
                        if (typeof(v) == 'object' && v.Source && v.Target) {
                            mounts.push({
                                Source: v.Source,
                                Target: v.Target,
                                Type: 'bind',
                            })
                        };
                    });
                }
                return mounts;
            };
            //--------------------------------------
            // NetworkingConfig
            //--------------------------------------
            const NetworkingConfig = (_body) => {
                if (typeof(input.data.Network) == 'object') {
                    _body.NetworkingConfig = {
                        EndpointsConfig: {
                            [input.data.Network.NetworkName]: {
                                IPv4Address: input.data.Network.IPAddress
                            }
                        }
                    };
                };
            };
            //const NetworkingConfig = (_body) => {
            //    if (Array.isArray(input.connected.network) && input.connected.network.length > 0) {
            //        _body.NetworkingConfig = {
            //            EndpointsConfig: {}
            //        };
            //        _body.NetworkingConfig.EndpointsConfig = input.connected.network.reduce((acc, thingData) => {
            //            if (thingData.localId == undefined && thingData.remoteId) return acc;

            //            let NetworkName = thingData.data.Name // from Parent
            //            //let IPv4Address; // from User
            //            let IPv4Address = input.data.Network.IPAddress;
            //            //if (input.data.Network.localId) {
            //            //    if (input.data.Network.localId != thingData.localId) throw new Error('network localId not match')
            //            //    IPv4Address = input.data.Network.IPAddress;
            //            //} else {
            //            //    if (input.data.Network.remoteId != thingData.remoteId) throw new Error('network remoteId not match')
            //            //    IPv4Address = input.data.Network.IPAddress;
            //            //}
            //            // When parent is in stack

            //            if (!NetworkName) throw new Error('network name is required')
            //            acc[NetworkName] = {
            //                IPAMConfig: {
            //                    IPv4Address: IPv4Address
            //                }
            //            }
            //            return acc;
            //        }, {})
            //    } else {
            //        throw new Error('Network is not connected')
            //    };
            //};
            //--------------------------------------
            // Image
            //--------------------------------------
            const Image = (_body) => {
                _body.Image = input.data.Image.ImageName;
                //if (Array.isArray(input.connected.image) && input.connected.image.length > 0) {
                //    if (input.connected.image[0].localId) {
                //        if (input.data.Image.localId != input.connected.image[0].localId) throw new Error('image localId not match')
                //    } else {
                //        if (input.data.Image.ImageId != input.connected.image[0].remoteId) throw new Error('image remoteId not match')
                //    }; 
                //    _body.Image = input.connected.image[0].data.Name; // from Parent
                //} else {
                //    throw new Error('Image is not connected')
                //}
            };

            body.Name = input.data.Name;
            body.Cmd = Cmd(body);
            body.Env = Env(body)
            body.Command = input.data.Command.User || '';
            body.WorkingDir = input.data.Command.WorkingDir;
            body.EntryPoint = input.data.Command.EntryPoint;
            Image(body);
            HostConfig(body);
            NetworkingConfig(body);

            return body;

        }
    }
};

const _inputDataSchema = {
    type: 'object',
    allOf: [{
            ref: 'operation::ContainerCreate://request.body',
        },
        {
            type: 'object',
            properties: {
                Name: {
                    type: 'string'
                }
            }
        }
    ]
};
const _outputSchema = {
    ref: 'operation::ContainerCreate://response.body'
};
const _outputInfoMap = {
    id: data => data.Id,
    status: data => 'stopped'
};
let _output;

const _main = async (ContainerCreate) => {
    _output = await ContainerCreate.fetch();
    _output.data = _output.body;
    //****  wait for a moment
    await new Promise(resolve => setTimeout(resolve, 1000));
};
await _main(ContainerCreate);
return _output;
