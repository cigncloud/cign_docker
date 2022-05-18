const _type = ["getList"];
const _provider = "docker";
const _thing = "volume";
const _title = "getList";
const _description = "some desc";
const _opServer = {
    'VolumeList': '/v1.33'
};
const _opRequestMediaType = {
    'VolumeList': 'application/json'
};
const _opResponseMediaType = {
    'VolumeList': 'application/json'
};
const _opInputMap = {
    'VolumeList': {
        'rquest.query.filters': input => ''
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
    type: 'array',
    items: {
        ref: 'operation::VolumeInspect://response.body'
    }
};


const _outputInfoMap = null;
const _noResultResponse = null

let _output;
const _main = async (VolumeList, volume_get) => {
    _output = await VolumeList.fetch();


    _output.data = await _output.body.Volumes.reduce(async (promise, result) => {
        let results = await promise;
        let input = {
            data: {
                Name: result.Name
            }
        };
        let output = await volume_get.run(input);
        results.push(output.data);
        return results
    }, []);
};
await _main(VolumeList, volume_get);
return _output;


