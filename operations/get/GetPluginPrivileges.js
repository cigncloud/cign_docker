module.exports = {
    "version": "1.33",
    "operationId": "GetPluginPrivileges",
    "path": "/plugins/privileges",
    "method": "get",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "query": {
            "schema": {
                "type": "object",
                "required": [
                    "remote"
                ],
                "properties": {
                    "remote": {
                        "type": "string",
                        "description": "The name of the plugin. The `:latest` tag is optional, and is the default if omitted."
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
            "description": "The name of the plugin. The `:latest` tag is optional, and is the default if omitted."
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
                            "description": "Describes a permission the user has to accept upon installing the plugin.",
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
                    },
                    "description": null
                },
                "text/plain": {
                    "schema": {
                        "type": "array",
                        "items": {
                            "description": "Describes a permission the user has to accept upon installing the plugin.",
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