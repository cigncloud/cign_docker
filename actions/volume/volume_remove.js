const _type = ["remove"];
const _provider = "docker";
const _thing = "volume";
const _title = "remove";
const _description = "some desc";
const _opServer = {
    'VolumeDelete': '/v1.33'
};
const _opRequestMediaType = {
    'VolumeDelete': 'application/json'
};
const _opResponseMediaType = {
    'VolumeDelete': 'application/json'
};
const _opInputMap = {
    'VolumeDelete': {
        'request.path.name': input => {
            return input.data.Name;
        },
        'request.query.force': input => true
    }
};


const _inputDataSchema = {
    ref: 'operation::VolumeDelete://request.body'
};
const _outputDataSchema = {
    ref: 'operation::VolumeDelete://response.body'
};
const _outputInfoMap = null;

let _noResultResponse = {
    status: 404,
    statusText: 'Not Found',
}

let _output;

const _main = async (VolumeDelete) => {
    // keep name for  info
    _output =  await VolumeDelete.fetch();
    _output.data = _output.body;
};

await _main(VolumeDelete);
return _output;
