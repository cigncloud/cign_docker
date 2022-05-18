const _type = ["getList"];
const _provider = "docker";
const _thing = "registryImage";
const _title = "getList";
const _description = "some desc";
const _opServer = 'https://hub.docker.com/v2';
const _opRequestMediaType = {
    'RegistryImageList': 'application/json'
};
const _opResponseMediaType = {
    'RegistryImageList': 'application/json'
};
const _opInputMap = {
    'RegistryImageList': {
        'request.path.username': (input) => {
            if (input.security) return input.security.username;
        }
    }
};

const _inputDataSchema = null


const _outputInfoMap = null;
const _outputPagingMap = null;
const _noResultResponse = null

let _output;

// ref: https://hub.docker.com/support/doc/how-do-i-authenticate-with-the-v2-api
const _main = async (RegistryImageList, registryImage_getTagList) => {
    _output = await RegistryImageList.fetch();
    _output.data = await _output.body.results.reduce(async (promise, repo) => {
        let images = await promise;

        let input = Object.assign(_input, {data: {repository: repo.name }})

        let output = await registryImage_getTagList.run(input);
        output.data.forEach(tag => {
            images.push({
                Id: repo.user  + '/' + repo.name + ':' + tag,
                Name:  repo.user + '/' + repo.name + ':' + tag,
                Author: repo.user
            })
        });
        return images;
    }, []);
};
await _main(RegistryImageList, registryImage_getTagList);
return _output;
