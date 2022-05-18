const _type = ["getList"];
const _provider = "docker";
const _thing = "image";
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
    ImageList: {
        'request.query.all': input => true
    }
};

const _inputDataSchema = {
    type: 'object',
    properties: {
        all: {
            ref: 'operation::ImageList://request.query.properties.all'
        },
        filters: {
            ref: 'operation::ImageList://request.query.properties.filters'
        },
        digest: {
            ref: 'operation::ImageList://request.query.properties.digest'
        },
    }
};



const _outputInfoMap = null;
const _noResultResponse = null

let _output;
const _main = async (ImageList, image_get) => {
    _output = await ImageList.fetch();
    _output.data = await _output.body.reduce(async (promise, result) => {
        let results = await promise;
        let input = {
            data: {
                Id: result.Id
            }
        };
        let output = await image_get.run(input);
        results.push(output.data);
        return results
    }, []);
};
await _main(ImageList, image_get);
return _output;
