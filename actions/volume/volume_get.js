
const _type = ["getList"];
const _provider = "docker";
const _thing = "volume";
const _title = "getList";
const _description = "some desc";
const _opServer = {
    'ImageList': '/v1.33'
};
const _opRequestMediaType = {
    'ImageList': 'application/json'
};
const _opResponseMediaType = {
    'ImageList': 'application/json'
};

const _opInputMap = {
    'VolumeInspect': {
        'request.path.name': input => {
            return input.data.Name
        }
    }
};

const _inputDataSchema = {
    type: 'object',
    required: ['id'],
    properties: {
        Name: {
            ref: 'operation::VolumeInspect://request.path.properties.name'
        }
    }
};

const _outputInfoMap = {
    id: data => data.Name,
    status: data => 'started'
}
const _outputDataSchema = {
    ref: 'operation::ContainerInspect://response.body',
};

let _noResultResponse = {
    status: 404,
    statusText: 'Not Found',
}


let _output;
const _main = async (VolumeInspect) => {
    _output = await VolumeInspect.fetch();
    _output.data = _output.body;
};
await _main(VolumeInspect);
return _output;
