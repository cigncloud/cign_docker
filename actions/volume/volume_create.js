const _type = ["create"];
const _provider = "docker";
const _thing = "volume";
const _title = "create";
const _description = "some desc";
const _opServer = {
    'VolumeCreate': '/v1.33'
};
const _opRequestMediaType = {
    'VolumeCreate': 'application/json'
};
const _opResponseMediaType = {
    'VolumeCreate': 'application/json'
};
const _opInputMap = {
    'VolumeCreate': {
        'request.body': (input) => {
            return {
                Name: input.data.Name
            }
        }
    }
};


const _inputDataSchema = {
    ref: 'operation::VolumeCreate://request.body'
};
const _outputDataSchema = {
    ref: 'operation::VolumeCreate://response.body'
};
const _outputInfoMap = {
    id: data => data.Name,
}



let _output;

const _main = async (VolumeCreate) => {
    _output =  await VolumeCreate.fetch();
    _output.data = _output.body;
};

await _main(VolumeCreate);
return _output;
