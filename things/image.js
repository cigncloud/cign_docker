const type = ['image'];
const title = 'image';
const description = 'test desc';
const actions = ['create', 'get', 'getList', 'remove'];
const infoMap = {
    id: data => data.Id,
    name: data => data.Name,
    created: 'Created',
    status: data => 'started'
};
const dataSchema = {
    type: 'object',
    required: ['Name'],
    properties: {
        Id: {
            type: 'string',
            readOnly: true,
            description: 'Id of network',
            placeHolder: 'will be allocated by docker'
        },
        Name: {
            type: 'string',
            description: "Name of this network, shouldn't be duplicated",
            placeHolder: 'give uniquq name'
        },
        DockerVersion: {
            type: 'string',
            readOnly: true
        },
        Author: {
            type: 'string',
            readOnly: true
        },
        Architecture: {
            type: 'string',
            readOnly: true
        },
        Os: {
            type: 'string',
            readOnly: true
        },
        Size: {
            type: 'integer',
            readOnly: true
        },
        VirtualSize: {
            type: 'integer',
            readOnly: true
        },
        Created: {
            type: 'string',
            readOnly: true,
        }
    }
};

const dataFormat = null;
const dependencyMap = {
    'Name': {
        required: false,
        path: '.',
        ref: 'thing::registryImage://Name',
        onConnect: {
            fn: (cdata, v) => {
                v.Name = cdata.Name;
                return v;
            }
        },
        onChange: {
            actions: {
                added: 'recreate',
                removed: 'recreate'
            }
        }
    }
}
const uniqueProperties = null;


exports.default = {
    type: type,
    title: title,
    description: description,
    actions: actions,
    infoMap: infoMap,
    dataSchema: dataSchema,
    dataFormat: dataFormat,
    dependencyMap: dependencyMap,
    uniqueProperties: uniqueProperties
};
