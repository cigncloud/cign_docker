const _type = ["create"];
const _provider = "docker";
const _thing = "network";
const _title = "create";
const _description = "some desc";
const _opServer = {
    'NetworkCreate': '/v1.33'
};
const _opRequestMediaType = {
    'NetworkCreate': 'application/json'
};
const _opResponseMediaType = {
    'NetworkCreate': 'application/json'
};
const _opInputMap = {
    'NetworkCreate': {
        'request.body': (input) => {
            let d = JSON.parse(JSON.stringify(input.data));
            delete d.Id;
            delete d.Created;
            delete d.Containers;
            delete d.NetworkConfig;
            // add IPAM
            d.IPAM = {
                //Driver: d.Driver,
                Config: [],
                //Options: []
            };
            d.IPAM.Config = input.data.NetworkConfig.reduce((config, cfg) => {
                config.push(cfg);
                return config;
            }, [])
            d.IPAM.Gateway = undefined;
            d.IPAM.Driver = undefined;
            return d;
        }
    }
};
const _inputDataSchema = {
    type: 'object',
    required: ['Name', 'NetworkConfig'],
    allOf: [{
            exclude: [
                'request.body.properties.IPAM', // redfined for form
                'request.body.properties.Options', // redfined for form
            ],
            ref: 'operation::NetworkInspect://request.body',
        },
        {
            type: 'object',
            properties: {
                Id: {
                    ref: 'operation::NetworkInspect://response.body.properties.Id'
                },
                Name: {
                    ref: 'operation::NetworkInspect://response.body.properties.Name'
                },
                Created: {
                    ref: 'operation::NetworkInspect://response.body.properties.Created'
                },
                NetworkConfig: {
                    type: 'array',
                    items: {
                        type: 'object',
                        required: ['IPRange'],
                        properties: {
                            Subnet: {
                                type: 'string',
                            },
                            IPRange: {
                                type: 'string',
                            },
                            Gateway: {
                                type: 'string',
                            }
                        }
                    }
                }
            }
        }
    ]
};
const _inputDataDependencyMap = null;
const _outputDataSchema = {
    ref: 'operation::NetworkCreate://response.body'
};
const _outputInfoMap = {
    id: data => data.Id,
    status: data => 'started'
};

let _output;
const main = async (NetworkCreate) => {
    _output = await NetworkCreate.fetch();
    _output.data = _output.body;
};
await main(NetworkCreate);
return _output;
