const type = ['vm'];
const title = 'container';
const description = 'test desc';
const actions = ['create', 'getList', 'get', 'update', 'remove', 'start', 'stop', 'log', 'upload', 'exec', 'ssh'];
const canCluster = true;

const infoMap = {
    id: data => data.Id,
    status: (data) => {
        if (!data.State) return;
        if (data.State.Status == 'created') return 'stopped';
        if (data.State.Status == 'exited') return 'stopped';
        if (data.State.Running) return 'started';
        if (data.State.Dead) return 'stopped';
        if (data.State.Paused) return 'stopped';
        if (data.State.Restarting) return 'stopped';
        return data.State;
    },
    name: data => data.Name,
    ports: data => {
        if (!Array.isArray(data.PortBindings)) return [];
        return data.PortBindings.map(p => p.Port + '/' + p.Protocol + ':' + p.HostPort);
    },
    ip: data => {
        if (!data.Network) return;
        return data.Network.IPAddress;
    },
    created: 'Created'
};



const HostConfigSchema = {
    type: 'object',
    properties: {
        AutoRemove: {
            "description": "Automatically remove the container when the container's process exits. This has no effect if `RestartPolicy` is set.",
            default: false,
            readOnly: true,
            "type": "boolean"
        },
        Privileged: {
            "description": "Gives the container full access to the host.",
            default: false,
            "type": "boolean"
        },
        PublishAllPorts: {
            "description": "Allocates a random host port for all of a container's exposed ports.",
            default: false,
            "type": "boolean"
        },
        CpuCount: {
            update: 'restart',
            "description": "The number of usable CPUs (Windows only).\n\nOn Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last.\n",
            "format": "int64",
            "type": "integer"
        },
        CpuShares: {
            update: 'restart',
            "description": "An integer value representing this container's relative CPU weight versus other containers.",
            "type": "integer"
        },
        CpuPercent: {
            update: 'restart',
            "description": "The usable percentage of the available CPUs (Windows only).\n\nOn Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last.\n",
            "format": "int64",
            "type": "integer"
        },
        CpusetCpus: {
            update: 'restart',
            "description": "CPUs in which to allow execution (e.g., `0-3`, `0,1`)",
            "example": "0-3",
            "type": "string"
        },
        DiskQuota: {
            update: 'restart',
            "description": "Disk limit (in bytes).",
            "format": "int64",
            "type": "integer"
        },
        IOMaximumBandwidth: {
            update: 'restart',
            "description": "Maximum IO in bytes per second for the container system drive (Windows only)",
            "format": "int64",
            "type": "integer"
        },
        IOMaximumIOps: {
            update: 'restart',
            "description": "Maximum IOps for the container system drive (Windows only)",
            "format": "int64",
            "type": "integer"
        },
        KernelMemory: {
            update: 'restart',
            "description": "Kernel memory limit in bytes.",
            "format": "int64",
            "type": "integer"
        },
        Memory: {
            update: 'restart',
            //"default": 0,
            "description": "Memory limit in bytes.",
            "type": "integer"
        },
        MemoryReservation: {
            update: 'restart',
            "description": "Memory soft limit in bytes.",
            "format": "int64",
            "type": "integer"
        },
        MemorySwap: {
            update: 'restart',
            "description": "Total memory limit (memory + swap). Set as `-1` to enable unlimited swap.",
            //default: -1,
            "format": "int64",
            "type": "integer"
        },
        MemorySwappiness: {
            update: 'restart',
            "description": "Tune a container's memory swappiness behavior. Accepts an integer between 0 and 100.",
            //default: 0,
            "format": "int64",
            "maximum": 100,
            "minimum": 0,
            "type": "integer"
        }
    }
};

const LabelsSchema = {
    type: 'array',
    items: {
        type: 'object',
        required: ['Key', 'value'],
        properties: {
            Key: {
                type: 'string'
            },
            Value: {
                type: 'string'
            }
        }
    }
};





const PortBindingSchema = {
    type: 'array',
    items: {
        type: 'object',
        required: ['Port', 'Protocol', 'HostPort'],
        properties: {
            Port: {
                type: 'integer',
                example: '80',
                placeHolder: 'Port to expose'
            },
            Protocol: {
                type: 'string',
                //default: 'tcp',
                enum: [
                    'tcp', 'udp', 'sctp'
                ]
            },
            HostPort: {
                type: 'integer',
                example: '80',
            },
            HostIp: {
                type: 'string',
                format: 'ipv4',
                example: '0.0.0.0'
                //default: '0.0.0.0'
            }
        }
    }
};

const BindsSchema = {
    type: 'array',
    items: {
        type: 'object',
        required: ['Source', 'Target'],
        description: 'bind host directory to container dir',
        properties: {
            Source: {
                type: 'string',
                description: 'The path on the host where the volume is coming from.'
            },
            Target: {
                type: 'string',
                description: 'The path in the container where the volume will be mounted.'
            }
        }
    }
};

const ImageSchema = {
    type: 'object',
    required: ['ImageName'], // when create time
    properties: {
        ImageName: {
            readOnly: true,
            type: 'string',
        },
        ImageId: {
            hide: true,
            type: 'string'
        }
    }
}
const VolumeSchema = {
    type: 'array',
    items: {
        type: 'object',
        required: ['Source', 'Target'], // when create time
        description: 'bind host directory to container dir',
        properties: {
            Source: {
                readOnly: true,
                "description": "Mount source (e.g. a volume name, a host path).",
                "type": "string"
            },
            Target: {
                "description": "Container path.",
                "type": "string"
            }
        }
    }
};
const NetworkSchema = {
    "description": "Configuration for a network endpoint.",
    "type": "object",
    required: ['NetworkName', 'IPAddress'], // when create time
    "properties": {
        NetworkName: {
            //readOnly: true,
            type: 'string',
        },
        NetworkID: {
            hide: true,
            "description": "Unique ID of the network.\n",
            "example": "08754567f1f40222263eab4102e1c733ae697e8e354aa9cd6e18d7402835292a",
            "type": "string"
        },
        IPAddress: {
            "description": "IPv4 address.\n",
            "example": "172.17.0.4",
            "type": "string",
            format: 'ipv4'
        },
        //IPv6Address: {
        //    type: 'string',
        //    format: 'ipv6'
        //},
    }
};

const CommandSchema = {
    type: 'object',
    properties: {
        User: {
            type: "string",
            description: "The user that commands are run as inside the container.",
        },
        WorkingDir: {
            type: "string",
            description: "The working directory for commands to run in.",
        },
        Cmd: {
            type: "array",
            items: {
                type: 'string',
            },
            description: "Command to run specified as a string or an array of strings.",
        },
        EntryPoint: {
            type: 'array',
            items: {
                "type": "string"
            },
            description: "The entry point for the container as a string or an array of strings.\n\nIf the array consists of exactly one empty string (`[\"\"]`) then the entry point is reset to system default (i.e., the entry point used by docker when there is no `ENTRYPOINT` instruction in the `Dockerfile`).\n",
        }
    }
};
const EvnSchema = {
    type: "array",
    items: {
        type: "string"
    },
    description: "A list of environment variables to set inside the container in the form `[\"VAR=value\", ...]`. A variable without `=` is removed from the environment, rather than to have an empty value.\n",

}
const dataSchema = {
    type: 'object',
    required: ['Name', 'Network', 'Image'],
    properties: {
        Id: {
            type: 'string',
            readOnly: true,
            description: 'Id of network',
            placeHolder: 'will be allocated by docker'
        },
        Name: {
            type: 'string',
            description: "Name of this container, shouldn't be duplicated",
            placeHolder: 'give unique name'
        },

        Network: NetworkSchema,
        PortBindings: PortBindingSchema,
        Binds: BindsSchema,
        Image: ImageSchema,
        Volumes: VolumeSchema,
        Command: CommandSchema,
        Env: EvnSchema,
        HostConfig: HostConfigSchema,
        Created: {
            type: 'string',
            readOnly: true,
        }
    }
};

const dataFormat = {};
const dependencyMap = {
    'Network.NetworkID': {
        required: true,
        path: 'Network',
        ref: 'thing::network://Id',
        fn: (input) => {
            if (input.connected['network'] && input.connected['nework'][0]) {
                if (input.connected['network'][0].data.Id == undefined) {
                    return input.connected['network'][0].localId;
                } else {
                    return input.connected['nework'][0].data.Id;
                };
            };
            return;
        },
        onConnect: {
            schema: {
                type: 'object',
                properties: {
                    IPAddress: {
                        type: 'string',
                        format: 'ipv4'
                    }
                }
            },
            needInput: ['IPAddress'],
            fn: (cdata, v) => {
                return {
                    NetworkName: cdata.Name,
                    NetworkID: cdata.Id,
                    IPAddress: (typeof(v) == 'object' ? v.IPAddress : undefined)
                }
            }
        },
        onChange: {
            actions: {
                added: 'recreate',
                removed: 'recreate',
            }
        },
        onMatch: {
            fn: (Network, pData) => pData.Name == Network.NetworkName
        }
    },
    'Volumes[array].Name': {
        required: false,
        path: 'Volumes',
        ref: 'thing::volume://Name',
        fn: (input) => {
            if (input.connected['volume'] && input.connected['volume'][0]) {
                if (input.connected['network'][0].data.Id == undefined) {
                    return input.connected['volume'][0].localId;
                } else {
                    return input.connected['volume'][0].data.Name;
                };
            };
        },
        onConnect: {
            schema: {
                type: 'object',
                properties: {
                    Target: {
                        type: 'string',
                    }
                }
            },
            fn: (cdata, v) => {
                return {
                    Source: cdata.Name,
                    Target: (typeof(v) == 'object' ? v.Target : undefined)
                }
            }
        },
        onChange: {
            actions: {
                added: 'recreate',
                removed: 'recreate',
            }
        },
        onMatch: {
            path: 'Volumes',
            fn: (Volume, pData) => pData.Name == Volume.Name
        }
    },
    'Image.ImageId': {
        required: true,
        path: 'Image',
        update: 'recreate',
        ref: 'thing::image://Id',
        fn: (input) => {
            if (input.connected['image'] && input.connected['image'][0]) {
                if (input.connected['image'][0].data.RepoTags == undefined) {
                    return input.connected['image'][0].localId;
                } else {
                    return input.connected['image'][0].data.Id
                };
            };
        },
        onConnect: {
            schema: {
                type: 'object',
                properties: {
                    ImageName: {
                        type: 'string'
                    }
                }
            },
            needInput: [],
            fn: (cdata, v) => {
                return {
                    ImageId: cdata.Id,
                    ImageName: cdata.Name
                }
            }

        },
        onChange: {
            actions: {
                added: 'recreate',
                removed: 'recreate',
            },

        },
        onMatch: {
            fn: (Image, pData) => pData.Id == Image.ImageId
        }
    }
};

const uniqueProperties = [
    'Name',
    'NetworkingConfig[array].IPAddress',
];


exports.default = {
    type: type,
    title: title,
    description: description,
    actions: actions,
    canCluster: canCluster,
    infoMap: infoMap,
    dataSchema: dataSchema,
    dataFormat: dataFormat,
    dependencyMap: dependencyMap,
    uniqueProperties: uniqueProperties
};
