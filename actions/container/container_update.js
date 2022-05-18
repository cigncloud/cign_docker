const _type = ["create"];
const _provider = "docker";
const _thing = "container";
const _title = "create";
const _description = "some desc";
const _opServer = {
    'ContainerUpdate': '/v1.33',
};
const _opRequestMediaType = {
    'ContainerUpdate': 'application/json'
};
const _opResponseMediaType = {
    'ContainerUpdate': 'application/json'
};
const _opInputMap = {
    'ContainerUpdate': {
        'request.query.name': input => input.data.Name,
        'request.body': (input) => {
            let body = {};

            //--------------------------------------
            // HostConfig
            //--------------------------------------
            const HostConfig = (_body) => {
                Object.keys(input.data.HostConfig).forEach(k => {
                    _body[k] = input.data.HostConfig[k];
                });
            };
            return body;

        }
    }
};
const _inputDataSchema = {
    type: 'object',
    properties: {
        HostConfig: {
            type: 'object',
            properties: {
                CpuCount: {
                    "description": "The number of usable CPUs (Windows only).\n\nOn Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last.\n",
                    "format": "int64",
                    "type": "integer"
                },
                CpuShares: {
                    "description": "An integer value representing this container's relative CPU weight versus other containers.",
                    "type": "integer"
                },
                CpuPercent: {
                    "description": "The usable percentage of the available CPUs (Windows only).\n\nOn Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last.\n",
                    "format": "int64",
                    "type": "integer"
                },
                CpusetCpus: {
                    "description": "CPUs in which to allow execution (e.g., `0-3`, `0,1`)",
                    "example": "0-3",
                    "type": "string"
                },
                DiskQuota: {
                    "description": "Disk limit (in bytes).",
                    "format": "int64",
                    "type": "integer"
                },
                IOMaximumBandwidth: {
                    "description": "Maximum IO in bytes per second for the container system drive (Windows only)",
                    "format": "int64",
                    "type": "integer"
                },
                IOMaximumIOps: {
                    "description": "Maximum IOps for the container system drive (Windows only)",
                    "format": "int64",
                    "type": "integer"
                },
                KernelMemory: {
                    "description": "Kernel memory limit in bytes.",
                    "format": "int64",
                    "type": "integer"
                },
                Memory: {
                    "default": 0,
                    "description": "Memory limit in bytes.",
                    "type": "integer"
                },
                MemoryReservation: {
                    "description": "Memory soft limit in bytes.",
                    "format": "int64",
                    "type": "integer"
                },
                MemorySwap: {
                    "description": "Total memory limit (memory + swap). Set as `-1` to enable unlimited swap.",
                    default: -1,
                    "format": "int64",
                    "type": "integer"
                },
                MemorySwappiness: {
                    "description": "Tune a container's memory swappiness behavior. Accepts an integer between 0 and 100.",
                    default: 0,
                    "format": "int64",
                    "maximum": 100,
                    "minimum": 0,
                    "type": "integer"
                }
            }
        }
    }
};

const _outputSchema = {
    ref: 'operation::ContainerInspect://response.body.properties.Config'
};
const _outputInfoMap = {
    id: data => data.Id,
    status: data => 'stopped'
};


const postActions = ['stop', 'start']; // after finish this action

let _output;

const _main = async (ContainerUpdate) => {
    _output = await ContainerUpdate.fetch();
    _output.data = _output.body;
    //****  wait for a moment
    await new Promise(resolve => setTimeout(resolve, 1000));
};
await _main(ContainerUpdate);
return _output;
