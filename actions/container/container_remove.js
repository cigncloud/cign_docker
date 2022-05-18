const _type = ["remove"];
const _provider = "docker";
const _thing = "container";
const _title = "remove";
const _description = "some desc";
const _opServer = {
    'ContainerDelete': '/v1.33'
};
const _opInputMap = {
    'ContainerDelete': {
        'request.path.id': input => input.data.Id,
        'request.query.force': 'force'
    }
};
const _inputDataSchema = {
    type: 'object',
    required: ['id'],
    properties: {
        Id: {
            ref: 'operation::ContainerDelete://request.path.properties.id'
        },
        removeVolumes: {
            ref: 'operation::ContainerDelete://request.query.properties.v'
        },
        force: {
            ref: 'operation::ContainerDelete://request.query.properties.force'
        },
        removeLink: {
            ref: 'operation::ContainerDelete://request.query.properties.force'
        }
    }
};
const _inputDataDpendencyMap = null;
const _outputDataSchema = {
    ref: 'operation::ContainerDelete://response',
};
const _outputInfoMap = null;
let _noResultResponse = {
    status: 404,
    statusText: 'Not Found',
}

let _output;
const _main = async (ContainerDelete) => {
    _output = await ContainerDelete.fetch();
    _output.data = _output.body;
    await new Promise(resolve => setTimeout(resolve, 1000));
};
await _main(ContainerDelete);
return _output;
