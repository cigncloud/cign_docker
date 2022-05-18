module.exports = {
    "version": "1.33",
    "operationId": "ContainerList",
    "path": "/containers/json",
    "method": "get",
    "description": "Returns a list of containers. For details on the format, see [the inspect endpoint](#operation/ContainerInspect).\n\nNote that it uses a different, smaller representation of a container than inspecting a single container. For example,\nthe list of linked containers is not propagated .\n",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "all": {
                        "default": false,
                        "type": "boolean",
                        "description": "Return all containers. By default, only running containers are shown"
                    },
                    "limit": {
                        "type": "integer",
                        "description": "Return this number of most recently created containers, including non-running ones."
                    },
                    "size": {
                        "default": false,
                        "type": "boolean",
                        "description": "Return the size of container as fields `SizeRw` and `SizeRootFs`."
                    },
                    "filters": {
                        "type": "string",
                        "description": "Filters to process on the container list, encoded as JSON (a `map[string][]string`). For example, `{\"status\": [\"paused\"]}` will only return paused containers. Available filters:\n\n- `ancestor`=(`<image-name>[:<tag>]`, `<image id>`, or `<image@digest>`)\n- `before`=(`<container id>` or `<container name>`)\n- `expose`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`)\n- `exited=<int>` containers with exit code of `<int>`\n- `health`=(`starting`|`healthy`|`unhealthy`|`none`)\n- `id=<ID>` a container's ID\n- `isolation=`(`default`|`process`|`hyperv`) (Windows daemon only)\n- `is-task=`(`true`|`false`)\n- `label=key` or `label=\"key=value\"` of a container label\n- `name=<name>` a container's name\n- `network`=(`<network id>` or `<network name>`)\n- `publish`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`)\n- `since`=(`<container id>` or `<container name>`)\n- `status=`(`created`|`restarting`|`running`|`removing`|`paused`|`exited`|`dead`)\n- `volume`=(`<volume name>` or `<mount point destination>`)\n"
                    }
                }
            },
            "encoding": {
                "all": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "limit": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "size": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "filters": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Return all containers. By default, only running containers are shown"
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
                                "Command": {
                                    "description": "Command to run when starting the container",
                                    "type": "string"
                                },
                                "Created": {
                                    "description": "When the container was created",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "HostConfig": {
                                    "type": "object",
                                    "properties": {
                                        "NetworkMode": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "Id": {
                                    "description": "The ID of this container",
                                    "type": "string",
                                    "x-go-name": "ID"
                                },
                                "Image": {
                                    "description": "The name of the image used when creating this container",
                                    "type": "string"
                                },
                                "ImageID": {
                                    "description": "The ID of the image that this container was created from",
                                    "type": "string"
                                },
                                "Labels": {
                                    "description": "User-defined key/value metadata.",
                                    "type": "object",
                                    "additionalProperties": {
                                        "type": "string"
                                    }
                                },
                                "Mounts": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "BindOptions": {
                                                "description": "Optional configuration for the `bind` type.",
                                                "type": "object",
                                                "properties": {
                                                    "Propagation": {
                                                        "description": "A propagation mode with the value `[r]private`, `[r]shared`, or `[r]slave`.",
                                                        "enum": [
                                                            "private",
                                                            "rprivate",
                                                            "shared",
                                                            "rshared",
                                                            "slave",
                                                            "rslave"
                                                        ]
                                                    }
                                                }
                                            },
                                            "Consistency": {
                                                "description": "The consistency requirement for the mount: `default`, `consistent`, `cached`, or `delegated`.",
                                                "type": "string"
                                            },
                                            "ReadOnly": {
                                                "description": "Whether the mount should be read-only.",
                                                "type": "boolean"
                                            },
                                            "Source": {
                                                "description": "Mount source (e.g. a volume name, a host path).",
                                                "type": "string"
                                            },
                                            "Target": {
                                                "description": "Container path.",
                                                "type": "string"
                                            },
                                            "TmpfsOptions": {
                                                "description": "Optional configuration for the `tmpfs` type.",
                                                "type": "object",
                                                "properties": {
                                                    "Mode": {
                                                        "description": "The permission mode for the tmpfs mount in an integer.",
                                                        "type": "integer"
                                                    },
                                                    "SizeBytes": {
                                                        "description": "The size for the tmpfs mount in bytes.",
                                                        "format": "int64",
                                                        "type": "integer"
                                                    }
                                                }
                                            },
                                            "Type": {
                                                "description": "The mount type. Available types:\n\n- `bind` Mounts a file or directory from the host into the container. Must exist prior to creating the container.\n- `volume` Creates a volume with the given name and options (or uses a pre-existing volume with the same name and options). These are **not** removed when the container is removed.\n- `tmpfs` Create a tmpfs with the given options. The mount source cannot be specified for tmpfs.\n",
                                                "enum": [
                                                    "bind",
                                                    "volume",
                                                    "tmpfs"
                                                ],
                                                "type": "string"
                                            },
                                            "VolumeOptions": {
                                                "description": "Optional configuration for the `volume` type.",
                                                "type": "object",
                                                "properties": {
                                                    "DriverConfig": {
                                                        "description": "Map of driver specific options",
                                                        "type": "object",
                                                        "properties": {
                                                            "Name": {
                                                                "description": "Name of the driver to use to create the volume.",
                                                                "type": "string"
                                                            },
                                                            "Options": {
                                                                "description": "key/value map of driver specific options.",
                                                                "type": "object",
                                                                "additionalProperties": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "Labels": {
                                                        "description": "User-defined key/value metadata.",
                                                        "type": "object",
                                                        "additionalProperties": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "NoCopy": {
                                                        "default": false,
                                                        "description": "Populate volume with data from the target.",
                                                        "type": "boolean"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "Names": {
                                    "description": "The names that this container has been given",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "NetworkSettings": {
                                    "description": "A summary of the container's network settings",
                                    "type": "object",
                                    "properties": {
                                        "Networks": {
                                            "type": "object",
                                            "additionalProperties": {
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
                                    }
                                },
                                "Ports": {
                                    "description": "The ports exposed by this container",
                                    "type": "array",
                                    "items": {
                                        "description": "An open port on a container",
                                        "example": {
                                            "PrivatePort": 8080,
                                            "PublicPort": 80,
                                            "Type": "tcp"
                                        },
                                        "required": [
                                            "PrivatePort",
                                            "Type"
                                        ],
                                        "type": "object",
                                        "properties": {
                                            "IP": {
                                                "format": "ip-address",
                                                "type": "string"
                                            },
                                            "PrivatePort": {
                                                "description": "Port on the container",
                                                "format": "uint16",
                                                "nullable": false,
                                                "type": "integer"
                                            },
                                            "PublicPort": {
                                                "description": "Port exposed on the host",
                                                "format": "uint16",
                                                "type": "integer"
                                            },
                                            "Type": {
                                                "enum": [
                                                    "tcp",
                                                    "udp"
                                                ],
                                                "nullable": false,
                                                "type": "string"
                                            }
                                        }
                                    }
                                },
                                "SizeRootFs": {
                                    "description": "The total size of all the files in this container",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "SizeRw": {
                                    "description": "The size of files that have been created or changed by this container",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "State": {
                                    "description": "The state of this container (e.g. `Exited`)",
                                    "type": "string"
                                },
                                "Status": {
                                    "description": "Additional human-readable status of this container (e.g. `Exit 0`)",
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
