module.exports = {
    "version": "1.33",
    "operationId": "ImageCreate",
    "path": "/images/create",
    "method": "post",
    "description": "Create an image by either pulling it from a registry or importing it.",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "fromImage": {
                        "type": "string",
                        "description": "Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed."
                    },
                    "fromSrc": {
                        "type": "string",
                        "description": "Source to import. The value may be a URL from which the image can be retrieved or `-` to read the image from the request body. This parameter may only be used when importing an image."
                    },
                    "repo": {
                        "type": "string",
                        "description": "Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image."
                    },
                    "tag": {
                        "type": "string",
                        "description": "Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled."
                    }
                }
            },
            "encoding": {
                "fromImage": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "fromSrc": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "repo": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "tag": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed."
        },
        "header": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "X-Registry-Auth": {
                        "type": "string",
                        "description": "A base64-encoded auth configuration. [See the authentication section for details.](#section/Authentication)"
                    }
                }
            },
            "encoding": {
                "X-Registry-Auth": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "A base64-encoded auth configuration. [See the authentication section for details.](#section/Authentication)"
        }
    },
    "requestBody": {
        "isRequired": true,
        "description": "Image content if the value `-` has been specified in fromSrc query parameter",
        "content": {
            "application/octet-stream": {
                "schema": {
                    "type": "string"
                },
                "encoding": {
                    ".": {
                        "contentType": "application/octet-stream",
                        "format": "binary"
                    }
                }
            },
            "text/plain": {
                "schema": {
                    "type": "string"
                },
                "encoding": {
                    ".": {
                        "contentType": "text/plain",
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