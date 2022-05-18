module.exports = {
    "version": "1.33",
    "operationId": "PluginUpgrade",
    "path": "/plugins/{name}/upgrade",
    "method": "post",
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
                        "description": "The name of the plugin. The `:latest` tag is optional, and is the default if omitted."
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
            "description": "The name of the plugin. The `:latest` tag is optional, and is the default if omitted."
        },
        "query": {
            "schema": {
                "type": "object",
                "required": [
                    "remote"
                ],
                "properties": {
                    "remote": {
                        "type": "string",
                        "description": "Remote reference to upgrade to.\n\nThe `:latest` tag is optional, and is used as the default if omitted.\n"
                    }
                }
            },
            "encoding": {
                "remote": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Remote reference to upgrade to.\n\nThe `:latest` tag is optional, and is used as the default if omitted.\n"
        },
        "header": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "X-Registry-Auth": {
                        "type": "string",
                        "description": "A base64-encoded auth configuration to use when pulling a plugin from a registry. [See the authentication section for details.](#section/Authentication)"
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
            "description": "A base64-encoded auth configuration to use when pulling a plugin from a registry. [See the authentication section for details.](#section/Authentication)"
        }
    },
    "requestBody": {
        "isRequired": true,
        "description": null,
        "content": {
            "application/json": {
                "schema": {
                    "type": "array",
                    "items": {
                        "description": "Describes a permission accepted by the user upon installing the plugin.",
                        "type": "object",
                        "properties": {
                            "Description": {
                                "type": "string"
                            },
                            "Name": {
                                "type": "string"
                            },
                            "Value": {
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
                }
            },
            "text/plain": {
                "schema": {
                    "type": "array",
                    "items": {
                        "description": "Describes a permission accepted by the user upon installing the plugin.",
                        "type": "object",
                        "properties": {
                            "Description": {
                                "type": "string"
                            },
                            "Name": {
                                "type": "string"
                            },
                            "Value": {
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
                        "contentType": "text/plain",
                        "format": "text"
                    }
                }
            }
        }
    },
    "responses": {
        "204": {},
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
        }
    },
    "callbacks": null
}