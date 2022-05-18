module.exports = {
    "version": "1.33",
    "operationId": "ImageList",
    "path": "/images/json",
    "method": "get",
    "description": "Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "all": {
                        "default": false,
                        "type": "boolean",
                        "description": "Show all images. Only images from a final layer (no children) are shown by default."
                    },
                    "filters": {
                        "type": "string",
                        "description": "A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:\n\n- `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)\n- `dangling=true`\n- `label=key` or `label=\"key=value\"` of an image label\n- `reference`=(`<image-name>[:<tag>]`)\n- `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)\n"
                    },
                    "digests": {
                        "default": false,
                        "type": "boolean",
                        "description": "Show digest information as a `RepoDigests` field on each image."
                    }
                }
            },
            "encoding": {
                "all": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "filters": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "digests": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Show all images. Only images from a final layer (no children) are shown by default."
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
                                "ParentId",
                                "RepoTags",
                                "RepoDigests",
                                "Created",
                                "Size",
                                "SharedSize",
                                "VirtualSize",
                                "Labels",
                                "Containers"
                            ],
                            "type": "object",
                            "properties": {
                                "Containers": {
                                    "nullable": false,
                                    "type": "integer"
                                },
                                "Created": {
                                    "nullable": false,
                                    "type": "integer"
                                },
                                "Id": {
                                    "nullable": false,
                                    "type": "string"
                                },
                                "Labels": {
                                    "nullable": false,
                                    "type": "object",
                                    "additionalProperties": {
                                        "type": "string"
                                    }
                                },
                                "ParentId": {
                                    "nullable": false,
                                    "type": "string"
                                },
                                "RepoDigests": {
                                    "nullable": false,
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "RepoTags": {
                                    "nullable": false,
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "SharedSize": {
                                    "nullable": false,
                                    "type": "integer"
                                },
                                "Size": {
                                    "nullable": false,
                                    "type": "integer"
                                },
                                "VirtualSize": {
                                    "nullable": false,
                                    "type": "integer"
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