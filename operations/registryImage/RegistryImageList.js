module.exports = {
    version: 1,
    operationId: 'RegistryImageList',
    //path: '/_catalog',
    path: '/repositories/{username}/?page_size=100',
    method: 'get',
    security: null,
    servers: 'https://hub.docker.com/v2',
    responses: {
        '201': {
            body: {
                'application/json': {
                    schema: {
                        type: 'object',
                        required: ['respositories'],
                        properties: {
                            count: {
                                type: 'ineger',
                            },
                            next: {
                                type: 'string'
                            },
                            previous: {
                                type: 'string'
                            },
                            results: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        user: {
                                            type: 'string'
                                        },
                                        name: {
                                            type: 'string',
                                            description: 'image name'
                                        },
                                        respositoryType: {
                                            type: 'string'
                                        },
                                        status: {
                                            type: 'integer'
                                        },
                                        is_private: {
                                            type: 'boolean'
                                        },
                                        is_automated: {
                                            type: 'boolean'
                                        },
                                        can_edit: {
                                            type: 'boolean'
                                        },
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
