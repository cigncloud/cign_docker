const _type = ["start"];
const _provider = "docker";
const _thing = "container";
const _title = "stop";
const _description = "some desc";

// used in actijon now
const _opId = 'ContainerLogs';

const _opServer = {
    'ContainerStop': '/v1.33'
};
const _opRequestMediaType = {
    'ContainerStop': 'application/json'
};
const _opResponseMediaType = {
    'ContainerStop': 'application/json'
};
const _opInputMap = {
    'ContainerStop': {
        'request.path.id': input => input.data.Name,
        'request.query.t': input => 0
    }
};
const _inputDataSchema = {
    type: 'object',
    required: ['Id'],
    properties: {
        Id: {
            ref: 'operation::ContainerStop://request.path.properties.id'
        }
    }
};
const _outputDataSchema = {
    ref: 'operation::ContainerStop://response.body',
};
const _outputInfoMap = null
let _output;
const _main = async (ContainerStop) => {
    _output = await ContainerStop.fetch();
    _output.data = {}
    //****  wait for a moment
    await new Promise(resolve => setTimeout(resolve, 5000));

};
await _main(ContainerStop);
return _output;
