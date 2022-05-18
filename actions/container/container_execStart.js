const _type = ["execStart"];
const _provider = "docker";
const _thing = "container";
const _title = "execStart";
const _description = "some desc";

// used in log actijon
const _opId = 'ContainerExecStart';

const _opServer = {
    'ContainerExecStart': '/v1.33'
};
const _opRequestMediaType = {
    'ContainerExecStart': 'application/json'
};
const _opResponseMediaType = {
    'ContainerExecStart': 'application/json'
};
const _opInputMap = {
    'ContainerExecStart': {
        'request.path.id': input => input.data.Id,
        'request.body.Detach': input => {
            if (input.connectData.detach === false) return false
            return true;
        },
        'request.body.Tty': input => {
            if (input.connectData.detach === false) return true;
            return false;
        }
    }
};
const _inputDataSchema = {
    allOf: [
        {
            ref: 'operation::ContainerExecStart://request.body',
        },
        {
            ref: 'operation::ContainerExecStart://request.path'
        },
    ]
};
const _outputDataSchema = {
    ref: 'operation::ContainerExecStart://response.body',
};


const _outputInfoMap = null
let _output;
const _main = async (ContainerExecStart, responseHandler, abortController) => {
    _output = await ContainerExecStart.fetch(responseHandler, abortController);
    _output.data = _output.body;
};
await _main(ContainerExecStart, responseHandler, abortController);
return _output;


