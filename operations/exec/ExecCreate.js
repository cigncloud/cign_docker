module.exports = {
    "version": "1.33",
    "operationId": "ExecCreate",
    "path": "/containers/{id}/exec",
    "method": "post",
    "description": "Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command.",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "path": {
            "schema": {
                "type": "object",
                "required": [
                    "id"
                ],
                "properties": {
                    "id": {
                        "type": "string",
                        "description": "Exec instance ID"
                    }
                }
            },
            "encoding": {
                "id": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Exec instance ID"
        }
    },
    "requestBody": {
        "isRequired": true,
        "description": null,
        "content": {
            "application/json": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "AttachStdin": {
                            type: 'boolean',
                        },
                        "AttachStdout": {
                            type: 'boolean',
                        },
                        "DetachKeys": {
                            type: 'string'
                        },
                        "Tty": {
                            "description": "Allocate a pseudo-TTY.",
                            "type": "boolean"
                        },
                        "Env": {
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        },
                        User: {
                            type: 'string'
                        },
                        WorkingDir: {
                            type: 'string'
                        }
                    }
                },
                "encoding": {
                    ".": {
                        "contentType": "application/json",
                        "format": "text"
                    }
                }
            }
        }
    },
    "responses": {
        "200": {},
        "404": {
            "body": {
                "application/vnd.docker.raw-stream": {
                    "schema": {
                        "description": "Represents an error.",
                        "required": [
                            "message"
                        ],
                        "type": "object",
                        "properties": {
                            "message": {
                                "description": "The error message.",
                                "nullable": false,
                                "type": "string"
                            }
                        }
                    },
                    "encoding": {
                        ".": {
                            "contentType": "application/vnd.docker.raw-stream",
                            "format": "text"
                        }
                    },
                    "description": null
                }
            }
        },
        "409": {
            "body": {
                "application/vnd.docker.raw-stream": {
                    "schema": {
                        "description": "Represents an error.",
                        "required": [
                            "message"
                        ],
                        "type": "object",
                        "properties": {
                            "message": {
                                "description": "The error message.",
                                "nullable": false,
                                "type": "string"
                            }
                        }
                    },
                    "encoding": {
                        ".": {
                            "contentType": "application/vnd.docker.raw-stream",
                            "format": "text"
                        }
                    },
                    "description": null
                }
            }
        }
    },
    "callbacks": null
}
