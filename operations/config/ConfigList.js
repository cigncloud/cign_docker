module.exports = {
    "version": "1.33",
    "operationId": "ConfigList",
    "path": "/configs",
    "method": "get",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "filters": {
                        "type": "string",
                        "description": "A JSON encoded value of the filters (a `map[string][]string`) to process on the configs list. Available filters:\n\n- `id=<config id>`\n- `label=<key> or label=<key>=value`\n- `name=<config name>`\n- `names=<config name>`\n"
                    }
                }
            },
            "encoding": {
                "filters": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "A JSON encoded value of the filters (a `map[string][]string`) to process on the configs list. Available filters:\n\n- `id=<config id>`\n- `label=<key> or label=<key>=value`\n- `name=<config name>`\n- `names=<config name>`\n"
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
                            "type": "object",
                            "properties": {
                                "CreatedAt": {
                                    "format": "dateTime",
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "Spec": {
                                    "type": "object",
                                    "properties": {
                                        "Data": {
                                            "description": "Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-3.2))\nconfig data.\n",
                                            "type": "string"
                                        },
                                        "Labels": {
                                            "description": "User-defined key/value metadata.",
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "string"
                                            }
                                        },
                                        "Name": {
                                            "description": "User-defined name of the config.",
                                            "type": "string"
                                        }
                                    }
                                },
                                "UpdatedAt": {
                                    "format": "dateTime",
                                    "type": "string"
                                },
                                "Version": {
                                    "description": "The version number of the object such as node, service, etc. This is needed to avoid conflicting writes.\nThe client must send the version number along with the modified specification when updating these objects.\nThis approach ensures safe concurrency and determinism in that the change on the object\nmay not be applied if the version number has changed from the last read. In other words,\nif two update requests specify the same base version, only one of the requests can succeed.\nAs a result, two separate update requests that happen at the same time will not\nunintentionally overwrite each other.\n",
                                    "type": "object",
                                    "properties": {
                                        "Index": {
                                            "example": 373531,
                                            "format": "uint64",
                                            "type": "integer"
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
        },
        "503": {
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