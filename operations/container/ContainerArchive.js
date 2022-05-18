module.exports = {
    "version": "1.33",
    "operationId": "ContainerArchive",
    "path": "/containers/{id}/archive",
    "method": "put",
    "description": "Get a tar archive of a resource in the filesystem of container id.",
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
                        "description": "ID or name of the container"
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
            "description": "ID or name of the container"
        },
        "query": {
            "schema": {
                "type": "object",
                "required": [
                    "path"
                ],
                "properties": {
                    "path": {
                        "type": "string",
                        "description": "Resource in the container’s filesystem to archive."
                    }
                }
            },
            "encoding": {
                "path": {
                    "contentType": "application/x-tar",
                    "format": "tar",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Resource in the container’s filesystem to archive."
        }
    },
    "requestBody": {
        'isRequired': true,
        'content': {
            "application/x-tar": {
                "schema": {
                    "description": "Represents an error.",
                    "type": "string",
                },
                "encoding": {
                    ".": {
                        "contentType": "application/x-tar",
                        "format": "tar"
                    }
                },
                "description": null
            }

        }

    },
    "responses": {
        "200": {},
        "400": {
            "body": {
                "application/x-tar": {
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
                            "contentType": "application/x-tar",
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
                    "encoding": {
                        ".": {}
                    },
                    "description": null
                },
                "application/x-tar": {
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
                            "contentType": "application/x-tar",
                            "format": "text"
                        }
                    },
                    "description": null
                }
            }
        },
        "500": {
            "body": {
                "application/x-tar": {
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
                            "contentType": "application/x-tar",
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
