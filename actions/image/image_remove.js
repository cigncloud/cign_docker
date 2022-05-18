const _type = ["get"];
const _provider = "docker";
const _thing = "image";
const _title = "create";
const _description = "some desc";
const _opServer = {
    'ImageDelete': '/v1.33'
};
const _opRequestMediaType = {
    'ImageDelete': 'application/json'
};
const _opResponseMediaType = {
    'ImageDelete': 'application/json'
};
const _opInputMap = {
    ImageDelete: {
        'request.path.name': input => {
            return input.data.Name
        },
        'request.query.force': input => true,
    }
};
const _inputDataSchema = {
    type: 'object',
    properties: {
        Name: {
            ref: 'operation::ImageDelete://request.path.properties.name'
        },
        Id: {
            type: 'string'
        },
        force: {
            ref: 'operation::ImageDelete://request.query.properties.force'
        },
        noprune: {
            ref: 'operation::ImageDelete://request.query.properties.noprune'
        }
    }
};
const _outputDataSchema = {
    ref: 'operation::ImageDelete://response.body'
};
const _outputInfoMap = {
    id: data => data.Deleted,
    status: data => 'removed'
}


let _output;
const _main = async (ImageDelete) => {
    _output =  await ImageDelete.fetch();
    _output.data = _output.body;
};
await _main(ImageDelete);
return _output;
