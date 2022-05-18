module.exports = {
    "version": "1.33",
    "operationId": "ContainerExport",
    "path": "/containers/{id}/export",
    "method": "get",
    "description": "Export the contents of a container as a tarball.",
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
        }
    },
    "requestBody": null,
    "responses": {
        "200": {},
        "404": {
            "body": {
                "application/json": {
                    "encoding": {
                        ".": {}
                    },
                    "description": null
                },
                "application/octet-stream": {
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
                            "contentType": "application/octet-stream",
                            "format": "binary"
                        }
                    },
                    "description": null
                }
            }
        },
        "500": {
            "body": {
                "application/octet-stream": {
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
                            "contentType": "application/octet-stream",
                            "format": "binary"
                        }
                    },
                    "description": null
                }
            }
        }
    },
    "callbacks": null
}