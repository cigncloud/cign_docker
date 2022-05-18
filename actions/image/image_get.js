const _type = ["get"];
const _provider = "docker";
const _thing = "image";
const _title = "get";
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
    ImageInspect: {
        'request.path.name': (input) => {
            if (input.data.Name) return input.data.Name;
            if (input.data.Id) return input.data.Id;
        }
    }

};
const _inputDataSchema = {
    type: 'object',
    properties: {
        Name: {
            ref: 'operation::ImageInspect://request.path.properties.name'
        },
        Id: {
            type: 'string'
        }
    }
};


let _noResultResponse = {
    status: 404,
    statusText: 'Not Found',
}


const extractName = (body) => {
    let name, ver;
    // 1. try to get from RepoTags
    if (Array.isArray(body['RepoTags']) && body['RepoTags'].length > 0) {
        name = body['RepoTags'].reduce((acc, k) => {
            acc = k.split(':')[0];
            v = k.split(':')[1];
            if (ver == 'latest') return acc;
            if (ver == undefined || ver < v) {
                ver = v; // current version  wins , replace
                return acc;
            };
            return acc;
        }, undefined);
    };
    // 2. try to get from RepoDigests
    if (Array.isArray(body['RepoDigests']) && body['RepoDigests'].length > 0) {
        name = body['RepoDigests'].reduce((acc, k) => {
            let kk = k.split('@')[0];
            if (kk.includes(':')) {
                acc = kk.split(':')[0];
                v = kk.split(':')[1];
                if (ver == 'latest') return acc;
                if (ver == undefined || ver < v) {
                    ver = v; // current version  wins , replace
                    return acc;
                };
            } else {
                acc = kk;
            };
            return acc;
        }, undefined);
    };
    if (ver == undefined) ver = 'latest';
    return name + ':' + ver;
};


const data = (body) => {
    let remove = [
        //'RepoDigests', 'Parent', 'Config', 'GraphDriver', 'RootFS'
    ];
    let d =  Object.keys(body).reduce((acc, k) => {
        if (remove.includes(k)) return acc;
        if (k == 'ContainerConfig') {
            acc[k] = body[k];
            //acc[k] = JSON.stringify(body[k], null, 2)
            return acc;
        };
        acc[k] = body[k];
        return acc;
    }, {})
    d['Name'] = extractName(body);
    return d;
};


let _output;

const _main = async (ImageInspect) => {
    _output = await ImageInspect.fetch();
    if (_output.body) _output.data = data(_output.body);

};
await _main(ImageInspect);
return _output;
