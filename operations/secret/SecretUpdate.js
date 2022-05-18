module.exports = {
    "version": "1.33",
    "operationId": "SecretUpdate",
    "path": "/secrets/{id}/update",
    "method": "post",
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
                        "description": "The ID or name of the secret"
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
            "description": "The ID or name of the secret"
        },
        "query": {
            "schema": {
                "type": "object",
                "required": [
                    "version"
                ],
                "properties": {
                    "version": {
                        "format": "int64",
                        "type": "integer",
                        "description": "The version number of the secret object being updated. This is required to avoid conflicting writes."
                    }
                }
            },
            "encoding": {
                "version": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "The version number of the secret object being updated. This is required to avoid conflicting writes."
        }
    },
    "requestBody": {
        "isRequired": true,
        "description": "The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values.",
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
            },
            "text/plain": {
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
                        "contentType": "text/plain",
                        "format": "text"
                    }
                }
            }
        }
    },
    "responses": {
        "200": {},
        "400": {
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
                },
                "text/plain": {
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
                            "contentType": "text/plain",
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
                },
                "text/plain": {
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
                            "contentType": "text/plain",
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
                },
                "text/plain": {
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
                            "contentType": "text/plain",
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
                },
                "text/plain": {
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
                            "contentType": "text/plain",
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