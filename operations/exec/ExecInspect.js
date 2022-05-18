module.exports = {
    "version": "1.33",
    "operationId": "ExecInspect",
    "path": "/exec/{id}/json",
    "method": "get",
    "description": "Return low-level information about an exec instance.",
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
    "requestBody": null,
    "responses": {
        "200": {
            "body": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "ContainerID": {
                                "type": "string"
                            },
                            "ExitCode": {
                                "type": "integer"
                            },
                            "ID": {
                                "type": "string"
                            },
                            "OpenStderr": {
                                "type": "boolean"
                            },
                            "OpenStdin": {
                                "type": "boolean"
                            },
                            "OpenStdout": {
                                "type": "boolean"
                            },
                            "Pid": {
                                "description": "The system process ID for the exec process.",
                                "type": "integer"
                            },
                            "ProcessConfig": {
                                "type": "object",
                                "properties": {
                                    "arguments": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "entrypoint": {
                                        "type": "string"
                                    },
                                    "privileged": {
                                        "type": "boolean"
                                    },
                                    "tty": {
                                        "type": "boolean"
                                    },
                                    "user": {
                                        "type": "string"
                                    }
                                }
                            },
                            "Running": {
                                "type": "boolean"
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