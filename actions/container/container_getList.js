const _type = ["getList", "containerList"];
const _provider = "docker";
const _thing = "container";
const _title = "getList";
const _description = "some desc";
const _opServer = {
    'ContainerList': '/v1.33'
};
const _opRequestMediaType = {
    'ContainerList': 'application/json'
};
const _opResponseMediaType = {
    'ContainerList': 'application/json'
};
const _opInputMap = {
    'ContainerList': {
        'request.query.all': (input) => {
            return true;
        }
    }
};
const _inputDataSchema = {
    type: 'object',
    properties: {
        all: {
            "default": true,
            "type": "boolean",
            "description": "Return all containers. By default, only running containers are shown"
        },
        limit: {
            "type": "integer",
            "description": "Return this number of most recently created containers, including non-running ones."
        },
        size: {
            "default": false,
            "type": "boolean",
            "description": "Return the size of container as fields `SizeRw` and `SizeRootFs`."
        },

    }
};
const _outputDataSchema = {
    type: 'array',
    items: {
        ref: 'operation::ContainerInspect://response.body'
    }
};
const _outputInfoMap = null;
const _outputPagingMap = null;

let _output = {
    /*
    status: null,
    headers: null,
    body: null,
    data: null,
    */
}

const get = async (id) => {
    let result = await container_get.run({
        Id: id
    });
    return result.Config;
};
const _main = async (ContainerList, container_get) => {
    // CotainerList : operation
    // container_get: actions
    container_get.opts.resolveInfo = false;
    _output = await ContainerList.fetch();
    _output.data = await _output.body.reduce(async (promise, result) => {
        let results = await promise;
        let input = {
            data: {
                Id: result.Id
            }
        };
        let output = await container_get.run(input);
        results.push(output.data);
        return results;
    }, []);
};

await _main(ContainerList, container_get);
return _output;
