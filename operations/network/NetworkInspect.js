module.exports = {
    "version": "1.33",
    "operationId": "NetworkInspect",
    "path": "/networks/{id}",
    "method": "get",
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
                        "description": "Network ID or name"
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
            "description": "Network ID or name"
        },
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "verbose": {
                        "default": false,
                        "type": "boolean",
                        "description": "Detailed inspect output for troubleshooting"
                    },
                    "scope": {
                        "type": "string",
                        "description": "Filter the network by scope (swarm, global, or local)"
                    }
                }
            },
            "encoding": {
                "verbose": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "scope": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Detailed inspect output for troubleshooting"
        }
    },
    "requestBody": null,
    "responses": {
        "200": {
            "body": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "Attachable": {
                                "type": "boolean",
                                default: false,
                                description: "Globally scoped network is manually attachable by regular containers from workers in swarm mode."
                            },
                            "Containers": {
                                "type": "object",
                                readOnly: true,
                                "additionalProperties": {
                                    "type": "object",
                                    "properties": {
                                        "EndpointID": {
                                            "type": "string"
                                        },
                                        "IPv4Address": {
                                            "type": "string"
                                        },
                                        "IPv6Address": {
                                            "type": "string"
                                        },
                                        "MacAddress": {
                                            "type": "string"
                                        },
                                        "Name": {
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "Created": {
                                "format": "dateTime",
                                "type": "string",
                                readOnly: true
                            },
                            "Driver": {
                                "type": "string",
                                default: "bridge",
                                exmaple: "bridge",
                                description: "Name of the network driver plugin to use."
                            },
                            "EnableIPv6": {
                                "type": "boolean",
                                default: true
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
                            "Id": {
                                "type": "string",
                                readOnly: true
                            },
                            "Ingress": {
                                "type": "boolean",
                                default: false,
                                description: "Ingress network is the network which provides the routing-mesh in swarm mode."
                            },
                            "Internal": {
                                "type": "boolean",
                                default: true,
                                description: "Restrict external access to the network."
                            },
                            "Labels": {
                                "type": "object",
                                description: "User-defined key/value metadata.",
                                "additionalProperties": {
                                    "type": "string"
                                }
                            },
                            "Name": {
                                "type": "string"
                            },
                            "Options": {
                                "type": "object",
                                "additionalProperties": {
                                    "type": "string"
                                }
                            },
                            "Scope": {
                                "type": "string",
                                readOnly: true
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
