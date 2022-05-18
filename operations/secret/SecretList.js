module.exports = {
    "version": "1.33",
    "operationId": "SecretList",
    "path": "/secrets",
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
                        "description": "A JSON encoded value of the filters (a `map[string][]string`) to process on the secrets list. Available filters:\n\n- `id=<secret id>`\n- `label=<key> or label=<key>=value`\n- `name=<secret name>`\n- `names=<secret name>`\n"
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
            "description": "A JSON encoded value of the filters (a `map[string][]string`) to process on the secrets list. Available filters:\n\n- `id=<secret id>`\n- `label=<key> or label=<key>=value`\n- `name=<secret name>`\n- `names=<secret name>`\n"
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
                                    "example": "2017-07-20T13:55:28.678958722Z",
                                    "format": "dateTime",
                                    "type": "string"
                                },
                                "ID": {
                                    "example": "blt1owaxmitz71s9v5zh81zun",
                                    "type": "string"
                                },
                                "Spec": {
                                    "type": "object",
                                    "properties": {
                                        "Data": {
                                            "description": "Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-3.2))\ndata to store as secret.\n\nThis field is only used to _create_ a secret, and is not returned by\nother endpoints.\n",
                                            "example": "",
                                            "type": "string"
                                        },
                                        "Driver": {
                                            "description": "Driver represents a driver (network, logging, secrets).",
                                            "required": [
                                                "Name"
                                            ],
                                            "type": "object",
                                            "properties": {
                                                "Name": {
                                                    "description": "Name of the driver.",
                                                    "example": "some-driver",
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Options": {
                                                    "description": "Key/value map of driver-specific options.",
                                                    "example": {
                                                        "OptionA": "value for driver-specific option A",
                                                        "OptionB": "value for driver-specific option B"
                                                    },
                                                    "nullable": false,
                                                    "type": "object",
                                                    "additionalProperties": {
                                                        "type": "string"
                                                    }
                                                }
                                            }
                                        },
                                        "Labels": {
                                            "description": "User-defined key/value metadata.",
                                            "example": {
                                                "com.example.some-label": "some-value",
                                                "com.example.some-other-label": "some-other-value"
                                            },
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "string"
                                            }
                                        },
                                        "Name": {
                                            "description": "User-defined name of the secret.",
                                            "type": "string"
                                        }
                                    }
                                },
                                "UpdatedAt": {
                                    "example": "2017-07-20T13:55:28.678958722Z",
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