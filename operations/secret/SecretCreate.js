module.exports = {
    "version": "1.33",
    "operationId": "SecretCreate",
    "path": "/secrets/create",
    "method": "post",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": null,
    "requestBody": {
        "isRequired": true,
        "description": null,
        "content": {
            "application/json": {
                "schema": {
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
                "encoding": {
                    ".": {
                        "contentType": "application/json",
                        "format": "text"
                    }
                }
            }
        }
    },
    "responses": {
        "201": {
            "body": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "ID": {
                                "description": "The ID of the created secret.",
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
        "409": {
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