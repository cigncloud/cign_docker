module.exports = {
    "version": "1.33",
    "operationId": "ImageLoad",
    "path": "/images/load",
    "method": "post",
    "description": "Load a set of images and tags into a repository.\n\nFor details on the format, see [the export image endpoint](#operation/ImageGet).\n",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "quiet": {
                        "default": false,
                        "type": "boolean",
                        "description": "Suppress progress details during load."
                    }
                }
            },
            "encoding": {
                "quiet": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Suppress progress details during load."
        }
    },
    "requestBody": {
        "isRequired": true,
        "description": "Tar archive containing images",
        "content": {
            "application/x-tar": {
                "schema": {
                    "format": "binary",
                    "type": "string"
                },
                "encoding": {
                    ".": {
                        "contentType": "application/x-tar",
                        "format": "text"
                    }
                }
            }
        }
    },
    "responses": {
        "200": {},
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