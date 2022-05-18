module.exports = {
    "version": "1.33",
    "operationId": "NetworkList",
    "path": "/networks",
    "method": "get",
    "description": "Returns a list of networks. For details on the format, see [the network inspect endpoint](#operation/NetworkInspect).\n\nNote that it uses a different, smaller representation of a network than inspecting a single network. For example,\nthe list of containers attached to the network is not propagated in API versions 1.28 and up.\n",
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
                        "description": "JSON encoded value of the filters (a `map[string][]string`) to process on the networks list. Available filters:\n\n- `driver=<driver-name>` Matches a network's driver.\n- `id=<network-id>` Matches all or part of a network ID.\n- `label=<key>` or `label=<key>=<value>` of a network label.\n- `name=<network-name>` Matches all or part of a network name.\n- `scope=[\"swarm\"|\"global\"|\"local\"]` Filters networks by scope (`swarm`, `global`, or `local`).\n- `type=[\"custom\"|\"builtin\"]` Filters networks by type. The `custom` keyword returns all user-defined networks.\n"
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
            "description": "JSON encoded value of the filters (a `map[string][]string`) to process on the networks list. Available filters:\n\n- `driver=<driver-name>` Matches a network's driver.\n- `id=<network-id>` Matches all or part of a network ID.\n- `label=<key>` or `label=<key>=<value>` of a network label.\n- `name=<network-name>` Matches all or part of a network name.\n- `scope=[\"swarm\"|\"global\"|\"local\"]` Filters networks by scope (`swarm`, `global`, or `local`).\n- `type=[\"custom\"|\"builtin\"]` Filters networks by type. The `custom` keyword returns all user-defined networks.\n"
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
                            "example": {
                                "Attachable": false,
                                "Containers": {
                                    "19a4d5d687db25203351ed79d478946f861258f018fe384f229f2efa4b23513c": {
                                        "EndpointID": "628cadb8bcb92de107b2a1e516cbffe463e321f548feb37697cce00ad694f21a",
                                        "IPv4Address": "172.19.0.2/16",
                                        "IPv6Address": "",
                                        "MacAddress": "02:42:ac:13:00:02",
                                        "Name": "test"
                                    }
                                },
                                "Created": "2016-10-19T04:33:30.360899459Z",
                                "Driver": "bridge",
                                "EnableIPv6": false,
                                "IPAM": {
                                    "Config": [
                                        {
                                            "Gateway": "172.19.0.1",
                                            "Subnet": "172.19.0.0/16"
                                        }
                                    ],
                                    "Driver": "default",
                                    "Options": {
                                        "foo": "bar"
                                    }
                                },
                                "Id": "7d86d31b1478e7cca9ebed7e73aa0fdeec46c5ca29497431d3007d2d9e15ed99",
                                "Ingress": false,
                                "Internal": false,
                                "Labels": {
                                    "com.example.some-label": "some-value",
                                    "com.example.some-other-label": "some-other-value"
                                },
                                "Name": "net01",
                                "Options": {
                                    "com.docker.network.bridge.default_bridge": "true",
                                    "com.docker.network.bridge.enable_icc": "true",
                                    "com.docker.network.bridge.enable_ip_masquerade": "true",
                                    "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0",
                                    "com.docker.network.bridge.name": "docker0",
                                    "com.docker.network.driver.mtu": "1500"
                                },
                                "Scope": "local"
                            },
                            "type": "object",
                            "properties": {
                                "Attachable": {
                                    "type": "boolean"
                                },
                                "Containers": {
                                    "type": "object",
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
                                    "type": "string"
                                },
                                "Driver": {
                                    "type": "string"
                                },
                                "EnableIPv6": {
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
                                "Id": {
                                    "type": "string"
                                },
                                "Ingress": {
                                    "type": "boolean"
                                },
                                "Internal": {
                                    "type": "boolean"
                                },
                                "Labels": {
                                    "type": "object",
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