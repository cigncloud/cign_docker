module.exports = {
    "version": "1.33",
    "operationId": "ImageGetAll",
    "path": "/images/get",
    "method": "get",
    "description": "Get a tarball containing all images and metadata for several image repositories.\n\nFor each value of the `names` parameter: if it is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned; if it is an image ID, similarly only that image (and its parents) are returned and there would be no names referenced in the 'repositories' file for this image ID.\n\nFor details on the format, see [the export image endpoint](#operation/ImageGet).\n",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "names": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        },
                        "description": "Image names to filter by"
                    }
                }
            },
            "encoding": {
                "names": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": "form",
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Image names to filter by"
        }
    },
    "requestBody": null,
    "responses": {
        "200": {
            "body": {
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