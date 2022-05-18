const _type = ["getList"];
const _provider = "docker";
const _thing = "registryImage";
const _title = "getTagList";
const _description = "some desc";
const _opServer = 'https://hub.docker.com/v2';
const _opRequestMediaType = {
    'RegistryImageTagList': 'application/json'
};
const _opResponseMediaType = {
    'RegistryImageTagList': 'application/json'
};
const _opInputMap = {
    'RegistryImageTagList': {
        'request.path.username': input => {
            if (input.security) return input.security.username;
        },
        'request.path.repository': input => {
            return input.data.repository
        }
    }
};

const _inputDataSchema = {
    type: 'object',
    properties: {
        image: {
            type: 'string'
        }
    }
};


const _outputInfoMap = null;
const _outputPagingMap = null;
const _noResultResponse = null

let _output;
const _main = async (RegistryImageTagList) => {
    _output = await RegistryImageTagList.fetch();
    _output.data = _output.body.tags;
};
await _main(RegistryImageTagList);
return _output;
