module.exports = {
    version: 1,
    operationId: 'RegistryImageTagList',
    path: '/{username}/{repository}/tags/list',
    method: 'get',
    security: null,
    servers: 'https://index.docker.io/v2',
    parameters: {
        path: {
            schema: {
                type: 'object',
                required: ['image'],
                properties: {
                    username: {
                        type: 'string',
                    },
                    repository: {
                        type: 'string'
                    }
                }
            },
            encoding: undefined
        }
    },
    responses: {
        '201': {
            body: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            name: {type: 'string'},
                            tags: {
                                type: 'array',
                                items: {
                                    type: 'string'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
