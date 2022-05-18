module.exports = {
    "version": "1.33",
    "operationId": "NetworkCreate",
    "path": "/networks/create",
    "method": "post",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": null,
    "requestBody": {
        "isRequired": true,
        "description": "Network configuration",
        "content": {
            "application/json": {
                "schema": {
                    "required": [
                        "Name"
                    ],
                    "type": "object",
                    "properties": {
                        "Attachable": {
                            "description": "Globally scoped network is manually attachable by regular containers from workers in swarm mode.",
                            "type": "boolean"
                        },
                        "CheckDuplicate": {
                            "description": "Check for networks with duplicate names. Since Network is primarily keyed based on a random ID and not on the name, and network name is strictly a user-friendly alias to the network which is uniquely identified using ID, there is no guaranteed way to check for duplicates. CheckDuplicate is there to provide a best effort checking of any networks which has the same name but it is not guaranteed to catch all name collisions.",
                            "type": "boolean"
                        },
                        "Driver": {
                            "default": "bridge",
                            "description": "Name of the network driver plugin to use.",
                            "type": "string"
                        },
                        "EnableIPv6": {
                            "description": "Enable IPv6 on the network.",
                            "type": "boolean"
                        },
                        "IPAM": {
                            "type": "object",
                            "properties": {
                                "Config": {
                                    "description": "List of IPAM configuration options, specified as a map: `{\"Subnet\": <CIDR>, \"IPRange\": <CIDR>, \"Gateway\": <IP address>, \"AuxAddress\": <device_name:IP address>}`",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "additionalProperties": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "Driver": {
                                    "default": "default",
                                    "description": "Name of the IPAM driver to use.",
                                    "type": "string"
                                },
                                "Options": {
                                    "description": "Driver-specific options, specified as a map.",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "additionalProperties": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "Ingress": {
                            "description": "Ingress network is the network which provides the routing-mesh in swarm mode.",
                            "type": "boolean"
                        },
                        "Internal": {
                            "description": "Restrict external access to the network.",
                            "type": "boolean"
                        },
                        "Labels": {
                            "description": "User-defined key/value metadata.",
                            "type": "object",
                            "additionalProperties": {
                                "type": "string"
                            }
                        },
                        "Name": {
                            "description": "The network's name.",
                            "type": "string"
                        },
                        "Options": {
                            "description": "Network specific options to be used by the drivers.",
                            "type": "object",
                            "additionalProperties": {
                                "type": "string"
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
                            "Id": {
                                "description": "The ID of the created network.",
                                "type": "string"
                            },
                            "Warning": {
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
        "403": {
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