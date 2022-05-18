module.exports = {
    "version": "1.33",
    "operationId": "ImageHistory",
    "path": "/images/{name}/history",
    "method": "get",
    "description": "Return parent layers of an image.",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "path": {
            "schema": {
                "type": "object",
                "required": [
                    "name"
                ],
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "Image name or ID"
                    }
                }
            },
            "encoding": {
                "name": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Image name or ID"
        }
    },
    "requestBody": null,
    "responses": {
        "200": {
            "body": {
                "application/json": {
                    "schema": {
                        "type": "array",
                        "items": {
                            "required": [
                                "Id",
                                "Created",
                                "CreatedBy",
                                "Tags",
                                "Size",
                                "Comment"
                            ],
                            "type": "object",
                            "x-go-name": "HistoryResponseItem",
                            "properties": {
                                "Comment": {
                                    "nullable": false,
                                    "type": "string"
                                },
                                "Created": {
                                    "format": "int64",
                                    "nullable": false,
                                    "type": "integer"
                                },
                                "CreatedBy": {
                                    "nullable": false,
                                    "type": "string"
                                },
                                "Id": {
                                    "nullable": false,
                                    "type": "string"
                                },
                                "Size": {
                                    "format": "int64",
                                    "nullable": false,
                                    "type": "integer"
                                },
                                "Tags": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                }
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