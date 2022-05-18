const type = ['image'];
const title = 'registryImage';
const description = 'test desc';
const actions = [ 'getList'];
const infoMap = {
    id: data => data.Id,
    name: data => data.Name,
    status: data => 'started'
};
const dataSchema = {
    type: 'object',
    required: ['Name'],
    properties: {
        Id: {
            type: 'string',
            hide: true,
        },
        Name: {
            type: 'string',
            example: 'centos:6.5'
        },
    }
};

const dataFormat = null;
const dependencyMap = null;
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
