module.exports = {
    "version": "1.33",
    "operationId": "DistributionInspect",
    "path": "/distribution/{name}/json",
    "method": "get",
    "description": "Return image digest and platform information by contacting the registry.",
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
                        "description": "Image name or id"
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
            "description": "Image name or id"
        }
    },
    "requestBody": null,
    "responses": {
        "200": {
            "body": {
                "application/json": {
                    "schema": {
                        "required": [
                            "Descriptor",
                            "Platforms"
                        ],
                        "type": "object",
                        "x-go-name": "DistributionInspect",
                        "properties": {
                            "Descriptor": {
                                "description": "A descriptor struct containing digest, media type, and size",
                                "type": "object",
                                "properties": {
                                    "Digest": {
                                        "type": "string"
                                    },
                                    "MediaType": {
                                        "type": "string"
                                    },
                                    "Size": {
                                        "format": "int64",
                                        "type": "integer"
                                    },
                                    "URLs": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "Platforms": {
                                "description": "An array containing all platforms supported by the image",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "Architecture": {
                                            "type": "string"
                                        },
                                        "Features": {
                                            "type": "array",
                                            "items": {
                                                "type": "string"
                                            }
                                        },
                                        "OS": {
                                            "type": "string"
                                        },
                                        "OSFeatures": {
                                            "type": "array",
                                            "items": {
                                                "type": "string"
                                            }
                                        },
                                        "OSVersion": {
                                            "type": "string"
                                        },
                                        "Variant": {
                                            "type": "string"
                                        }
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
        "401": {
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