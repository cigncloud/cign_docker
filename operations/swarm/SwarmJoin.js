module.exports = {
    "version": "1.33",
    "operationId": "SwarmJoin",
    "path": "/swarm/join",
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
                        "AdvertiseAddr": {
                            "description": "Externally reachable address advertised to other nodes. This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the port number from the listen address is used. If `AdvertiseAddr` is not specified, it will be automatically detected when possible.",
                            "type": "string"
                        },
                        "DataPathAddr": {
                            "description": "Address or interface to use for data path traffic (format: `<ip|interface>`), for example,  `192.168.1.1`,\nor an interface, like `eth0`. If `DataPathAddr` is unspecified, the same address as `AdvertiseAddr`\nis used.\n\nThe `DataPathAddr` specifies the address that global scope network drivers will publish towards other\nnodes in order to reach the containers running on this node. Using this parameter it is possible to\nseparate the container data traffic from the management traffic of the cluster.\n",
                            "type": "string"
                        },
                        "JoinToken": {
                            "description": "Secret token for joining this swarm.",
                            "type": "string"
                        },
                        "ListenAddr": {
                            "description": "Listen address used for inter-manager communication if the node gets promoted to manager, as well as determining the networking interface used for the VXLAN Tunnel Endpoint (VTEP).",
                            "type": "string"
                        },
                        "RemoteAddrs": {
                            "description": "Addresses of manager nodes already participating in the swarm.",
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
                        "AdvertiseAddr": {
                            "description": "Externally reachable address advertised to other nodes. This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the port number from the listen address is used. If `AdvertiseAddr` is not specified, it will be automatically detected when possible.",
                            "type": "string"
                        },
                        "DataPathAddr": {
                            "description": "Address or interface to use for data path traffic (format: `<ip|interface>`), for example,  `192.168.1.1`,\nor an interface, like `eth0`. If `DataPathAddr` is unspecified, the same address as `AdvertiseAddr`\nis used.\n\nThe `DataPathAddr` specifies the address that global scope network drivers will publish towards other\nnodes in order to reach the containers running on this node. Using this parameter it is possible to\nseparate the container data traffic from the management traffic of the cluster.\n",
                            "type": "string"
                        },
                        "JoinToken": {
                            "description": "Secret token for joining this swarm.",
                            "type": "string"
                        },
                        "ListenAddr": {
                            "description": "Listen address used for inter-manager communication if the node gets promoted to manager, as well as determining the networking interface used for the VXLAN Tunnel Endpoint (VTEP).",
                            "type": "string"
                        },
                        "RemoteAddrs": {
                            "description": "Addresses of manager nodes already participating in the swarm.",
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