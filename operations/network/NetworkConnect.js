module.exports = {
    "version": "1.33",
    "operationId": "NetworkConnect",
    "path": "/networks/{id}/connect",
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
        }
    },
    "requestBody": {
        "isRequired": true,
        "description": null,
        "content": {
            "application/octet-stream": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "Container": {
                            "description": "The ID or name of the container to connect to the network.",
                            "type": "string"
                        },
                        "EndpointConfig": {
                            "description": "Configuration for a network endpoint.",
                            "type": "object",
                            "properties": {
                                "Aliases": {
                                    "example": [
                                        "server_x",
                                        "server_y"
                                    ],
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "DriverOpts": {
                                    "description": "DriverOpts is a mapping of driver options and values. These options\nare passed directly to the driver and are driver specific.\n",
                                    "example": {
                                        "com.example.some-label": "some-value",
                                        "com.example.some-other-label": "some-other-value"
                                    },
                                    "nullable": true,
                                    "type": "object",
                                    "additionalProperties": {
                                        "type": "string"
                                    }
                                },
                                "EndpointID": {
                                    "description": "Unique ID for the service endpoint in a Sandbox.\n",
                                    "example": "b88f5b905aabf2893f3cbc4ee42d1ea7980bbc0a92e2c8922b1e1795298afb0b",
                                    "type": "string"
                                },
                                "Gateway": {
                                    "description": "Gateway address for this network.\n",
                                    "example": "172.17.0.1",
                                    "type": "string"
                                },
                                "GlobalIPv6Address": {
                                    "description": "Global IPv6 address.\n",
                                    "example": "2001:db8::5689",
                                    "type": "string"
                                },
                                "GlobalIPv6PrefixLen": {
                                    "description": "Mask length of the global IPv6 address.\n",
                                    "example": 64,
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "IPAMConfig": {
                                    "description": "EndpointIPAMConfig represents an endpoint's IPAM configuration.\n",
                                    "nullable": true,
                                    "type": "object",
                                    "properties": {
                                        "IPv4Address": {
                                            "example": "172.20.30.33",
                                            "type": "string"
                                        },
                                        "IPv6Address": {
                                            "example": "2001:db8:abcd::3033",
                                            "type": "string"
                                        },
                                        "LinkLocalIPs": {
                                            "example": [
                                                "169.254.34.68",
                                                "fe80::3468"
                                            ],
                                            "type": "array",
                                            "items": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                },
                                "IPAddress": {
                                    "description": "IPv4 address.\n",
                                    "example": "172.17.0.4",
                                    "type": "string"
                                },
                                "IPPrefixLen": {
                                    "description": "Mask length of the IPv4 address.\n",
                                    "example": 16,
                                    "type": "integer"
                                },
                                "IPv6Gateway": {
                                    "description": "IPv6 gateway address.\n",
                                    "example": "2001:db8:2::100",
                                    "type": "string"
                                },
                                "Links": {
                                    "example": [
                                        "container_1",
                                        "container_2"
                                    ],
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "MacAddress": {
                                    "description": "MAC address for the endpoint on this network.\n",
                                    "example": "02:42:ac:11:00:04",
                                    "type": "string"
                                },
                                "NetworkID": {
                                    "description": "Unique ID of the network.\n",
                                    "example": "08754567f1f40222263eab4102e1c733ae697e8e354aa9cd6e18d7402835292a",
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "encoding": {
                    ".": {
                        "contentType": "application/octet-stream",
                        "format": "binary"
                    }
                }
            }
        }
    },
    "responses": {
        "200": {},
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
        }
    },
    "callbacks": null
}