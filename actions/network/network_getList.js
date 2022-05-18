const _type = ["getList"];
const _provider = "docker";
const _thing = "network";
const _title = "getList";
const _description = "some desc";
const _opServer = {
    'NetworkCreate': '/v1.33'
};
const _opRequestMediaType = {
    'NetworkList': 'application/json'
};
const _opResponseMediaType = {
    'NetworkList': 'application/json'
};
const _opInputMap = {
    'NetworkList': {
        'rquest.query.filters': (input) => {
            if (input && typeof(input.data) == 'object') {
                return JSON.stringify(Object.keys(input).reduce((acc, key) => {
                    acc[key] = value;
                }, {}));
            } else {
                return ''
            }
        }
    }
};
const _inputDataSchema = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            key: {
                type: 'string',
                enum: [
                    'dangling', 'driver', 'id', 'label', 'name', 'scope', 'type'
                ]
            },
            value: {
                type: 'string'
            }
        }
    }
};
const _outputDataSchema = {
    ref: 'operation::NetworkInspect://response.body'
};


let _output;
const main = async (NetworkList, network_get) => {
    let promises = [];
    _output = await NetworkList.fetch();
    if (Array.isArray(_output.body)) {
        _output.data =  await _output.body.reduce( async (promise, network) => {
            let results = await promise;

            let input = {
                data: {Id: network.Id}
            };
            let output = await network_get.run(input);

            results.push(output.data)
            return results;
        }, Promise.resolve([]));
    } else {
        _output.data = [];
    };
};
await main(NetworkList, network_get);
return _output;
