module.exports = {
    "version": "1.33",
    "operationId": "ContainerExec",
    "path": "/containers/{id}/exec",
    "method": "post",
    "description": "Run a command inside a running container.",
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
                        "description": "ID or name of container"
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
            "description": "ID or name of container"
        }
    },
    "requestBody": {
        "isRequired": true,
        "description": "Exec configuration",
        "content": {
            "application/json": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "AttachStderr": {
                            "description": "Attach to `stderr` of the exec command.",
                            "type": "boolean"
                        },
                        "AttachStdin": {
                            "description": "Attach to `stdin` of the exec command.",
                            "type": "boolean"
                        },
                        "AttachStdout": {
                            "description": "Attach to `stdout` of the exec command.",
                            "type": "boolean"
                        },
                        "Cmd": {
                            "description": "Command to run, as a string or array of strings.",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "DetachKeys": {
                            "description": "Override the key sequence for detaching a container. Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`.",
                            "type": "string"
                        },
                        "Env": {
                            "description": "A list of environment variables in the form `[\"VAR=value\", ...]`.",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "Privileged": {
                            "default": false,
                            "description": "Runs the exec process with extended privileges.",
                            "type": "boolean"
                        },
                        "Tty": {
                            "description": "Allocate a pseudo-TTY.",
                            "type": "boolean"
                        },
                        "User": {
                            "description": "The user, and optionally, group to run the exec process inside the container. Format is one of: `user`, `user:group`, `uid`, or `uid:gid`.",
                            "type": "string"
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
        "201": {
            "body": {
                "application/json": {
                    "schema": {
                        "description": "Response to an API call that returns just an Id",
                        "required": [
                            "Id"
                        ],
                        "type": "object",
                        "properties": {
                            "Id": {
                                "description": "The id of the newly created object.",
                                "nullable": false,
                                "type": "string"
                            }
                        }
                    },
                    "encoding": {
                        ".": {
                            "contentType": "application/json",
                            "format": "text"
                        }
                    },
                    "description": null
                }
            }
        },
        "404": {
            "body": {
                "application/json": {
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
                            "contentType": "application/json",
                            "format": "text"
                        }
                    },
                    "description": null
                }
            }
        },
        "409": {
            "body": {
                "application/json": {
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
                            "contentType": "application/json",
                            "format": "text"
                        }
                    },
                    "description": null
                }
            }
        },
        "500": {
            "body": {
                "application/json": {
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
                            "contentType": "application/json",
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
