const type = ['volume'];
const title = 'volume';
const description = 'test desc';
const actions = ['create', 'get', 'getList', 'remove'];
const infoMap = {
    id: data => data.Name,
    name: data => data.Name,
    created: 'CreatedAt',
    status: data => 'started'
};
const dataSchema = {
    type: 'object',
    properties: {
        Name: {
            type: 'string',
        },
        UsageData: {
            Size: {
                type: 'string',
                readOnly: true
            },
            RefCount: {
                type: 'integer',
                readOnly: true
            }
        }
    }
};
const dataFormat = null;
const dependencyMap = null;
const uniqueProperties =null;


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
