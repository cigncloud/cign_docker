const _type = ["create"];
const _provider = "docker";
const _thing = "network";
const _title = "get";
const _description = "some desc";
const _opServer = {
    'NetworkInspect': '/v1.33'
};
const _opRequestMediaType = {
    'NetworkInspect': 'application/json'
};
const _opResponseMediaType = {
    'NetworkInspect': 'application/json'
};

const _opInputMap = {
    'NetworkInspect': {
        'request.path.id': input => {
            if (input.data) return input.data.Id;
            return input.info.id;
        }
        //'request.query.verbose': 'Verbose',
        //'request.query.scope': 'Scope'
    }
};
const _inputDataSchema = {
    type: 'object',
    properties: {
        Id: {
            ref: 'operation::NetworkInspect://request.path.properties.id'
        },
        Verbose: {
            ref: 'operation::NetworkInspect://request.path.properties.verbose'
        },
        Scope: {
            ref: 'operation::NetworkInspect://request.path.properties.scope'
        }
    }
};

const networkConfig = {
    type: 'array',
    items: {
        type: 'object',
        required: ['IPRange'],
        properties: {
            Subnet: {
                type: 'string',
                example: "172.20.0.0/16"
            },
            IPRange: {
                type: 'string',
                example: "172.20.10.0/24"
            },
            Gateway: {
                type: 'string',
                example: "172.20.10.11"
            }
        }
    }
};

const dataSchema = {
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
                NetworConfig: networkConfig,
            }
        }
    ]
};

let _outputInfoMap = {
    id: data => data.Id,
    status: data => 'started',
};
// when cannot find ( ie) after remove)
let _noResultResponse = {
    status: 404,
    statusText: 'Not Found',
}

let _output;

const main = async (NetworkInspect) => {
    _output =  await NetworkInspect.fetch();
    if (_output.body != undefined) {
        _output.data = _output.body;
        _output.data.NetworkConfig = _output.data.IPAM.Config;
        delete _output.data.IPAM;
    };
};
await main(NetworkInspect);
return _output;
