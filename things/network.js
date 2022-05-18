const type = ['vm'];
const title = 'network';
const description = 'test desc';
const actions = ['create', 'get', 'getList', 'remove'];
const infoMap = {
    id: 'Id',
    name: 'Name',
    created: 'Created',
    status: v => 'started'
};

const networkConfig = {
    type: 'array',
    description: "IPRange or Subnet is Required",
    items: {
        type: 'object',
        required: ['Subnet'],
        properties: {
            Subnet: {
                type: 'string',
                format: 'cidrv4',
                example: "172.20.0.0/16",
                placeHolder: 'ie) 172.20.0.0/16',
                description: 'Subnet is required'
            },
            Gateway: {
                type: 'string',
                description: 'Not supporting user input',
                example: "172.20.10.11",
                placeHolder: 'will be allocated by docker',
                readOnly: true
            }
        }
    }
};

const dataSchema = {
    type: 'object',
    required: ['Name', 'NetworkConfig'],
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
            placeHolder: 'give unique name'
        },
        NetworkConfig: networkConfig,
        Created: {
            type: 'string',
            readOnly: true,
        }
    }
}

const dataFormat = {};
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
