const _type = ["remove"];
const _provider = "docker";
const _thing = "network";
const _title = "remove";
const _description = "some desc";
const _opServer = {
    'NetworkDelete': '/v1.33'
};
const _opRequestMediaType = {
    'NetworkDelete': 'application/json'
};
const _opResponseMediaType = {
    'NetworkDelete': 'application/json'
};

const _opInputMap = {
    'NetworkDelete': {
        'request.path.id': input => input.data.Id,
    }
};
const _inputDataSchema = {
    type: 'object',
    required: ['Id'],
    properties: {
        Id: {
            type: 'string'
        }
    }
};

const _outputDataSchema = null
const _ouputInfoMap = null

let _output;
const main = async (NetworkDelete) => {
    _output =  await NetworkDelete.fetch();
    _output.data = _output.body;
};
await main(NetworkDelete);
return _output;
