const _type = ["start"];
const _provider = "docker";
const _thing = "container";
const _title = "start";
const _description = "some desc";
const _opServer = {
    'ContainerStart': '/v1.33'
};
const _opRequestMediaType = {
    'ContainerStart': 'application/json'
};
const _opResponseMediaType = {
    'ContainerStart': 'application/json'
};
const _opInputMap = {
    'ContainerStart': {
        'request.path.id': input => input.data.Id
    }
};
const _inputDataSchema = {
    type: 'object',
    required: ['Id'],
    properties: {
        Id: {
            ref: 'operation::ContainerStart://request.path.properties.id'
        },
        Size: {
            ref: 'operation::ContainerStart://request.query.properties.size'
        }
    }
};
const _outputDataSchema = {
    ref: 'operation::ContainerStart://response.body',
};
const _outputInfoMap = null;
let _output;
const _main = async (ContainerStart) => {
    _output = await ContainerStart.fetch();
    _output.data = {}
    //****  wait for a moment
    await new Promise(resolve => setTimeout(resolve, 3000));

};
await _main(ContainerStart);
return _output;
