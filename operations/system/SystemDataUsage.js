module.exports = {
    "version": "1.33",
    "operationId": "SystemDataUsage",
    "path": "/system/df",
    "method": "get",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": null,
    "requestBody": null,
    "responses": {
        "200": {
            "body": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "Containers": {
                                "type": "array",
                                "items": {
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
                                }
                            },
                            "Images": {
                                "type": "array",
                                "items": {
                                    "required": [
                                        "Id",
                                        "ParentId",
                                        "RepoTags",
                                        "RepoDigests",
                                        "Created",
                                        "Size",
                                        "SharedSize",
                                        "VirtualSize",
                                        "Labels",
                                        "Containers"
                                    ],
                                    "type": "object",
                                    "properties": {
                                        "Containers": {
                                            "nullable": false,
                                            "type": "integer"
                                        },
                                        "Created": {
                                            "nullable": false,
                                            "type": "integer"
                                        },
                                        "Id": {
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Labels": {
                                            "nullable": false,
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "string"
                                            }
                                        },
                                        "ParentId": {
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "RepoDigests": {
                                            "nullable": false,
                                            "type": "array",
                                            "items": {
                                                "type": "string"
                                            }
                                        },
                                        "RepoTags": {
                                            "nullable": false,
                                            "type": "array",
                                            "items": {
                                                "type": "string"
                                            }
                                        },
                                        "SharedSize": {
                                            "nullable": false,
                                            "type": "integer"
                                        },
                                        "Size": {
                                            "nullable": false,
                                            "type": "integer"
                                        },
                                        "VirtualSize": {
                                            "nullable": false,
                                            "type": "integer"
                                        }
                                    }
                                }
                            },
                            "LayersSize": {
                                "format": "int64",
                                "type": "integer"
                            },
                            "Volumes": {
                                "type": "array",
                                "items": {
                                    "example": {
                                        "CreatedAt": "2016-06-07T20:31:11.853781916Z",
                                        "Driver": "custom",
                                        "Labels": {
                                            "com.example.some-label": "some-value",
                                            "com.example.some-other-label": "some-other-value"
                                        },
                                        "Mountpoint": "/var/lib/docker/volumes/tardis",
                                        "Name": "tardis",
                                        "Scope": "local",
                                        "Status": {
                                            "hello": "world"
                                        }
                                    },
                                    "required": [
                                        "Name",
                                        "Driver",
                                        "Mountpoint",
                                        "Labels",
                                        "Scope",
                                        "Options"
                                    ],
                                    "type": "object",
                                    "properties": {
                                        "CreatedAt": {
                                            "description": "Date/Time the volume was created.",
                                            "format": "dateTime",
                                            "type": "string"
                                        },
                                        "Driver": {
                                            "description": "Name of the volume driver used by the volume.",
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Labels": {
                                            "description": "User-defined key/value metadata.",
                                            "nullable": false,
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "string"
                                            }
                                        },
                                        "Mountpoint": {
                                            "description": "Mount path of the volume on the host.",
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Name": {
                                            "description": "Name of the volume.",
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Options": {
                                            "description": "The driver specific options used when creating the volume.",
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "string"
                                            }
                                        },
                                        "Scope": {
                                            "default": "local",
                                            "description": "The level at which the volume exists. Either `global` for cluster-wide, or `local` for machine level.",
                                            "enum": [
                                                "local",
                                                "global"
                                            ],
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Status": {
                                            "description": "Low-level details about the volume, provided by the volume driver.\nDetails are returned as a map with key/value pairs:\n`{\"key\":\"value\",\"key2\":\"value2\"}`.\n\nThe `Status` field is optional, and is omitted if the volume driver\ndoes not support this feature.\n",
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "object"
                                            }
                                        },
                                        "UsageData": {
                                            "description": "Usage details about the volume. This information is used by the\n`GET /system/df` endpoint, and omitted in other endpoints.\n",
                                            "nullable": true,
                                            "required": [
                                                "Size",
                                                "RefCount"
                                            ],
                                            "type": "object",
                                            "properties": {
                                                "RefCount": {
                                                    "default": -1,
                                                    "description": "The number of containers referencing this volume. This field\nis set to `-1` if the reference-count is not available.\n",
                                                    "nullable": false,
                                                    "type": "integer"
                                                },
                                                "Size": {
                                                    "default": -1,
                                                    "description": "Amount of disk space used by the volume (in bytes). This information\nis only available for volumes created with the `\"local\"` volume\ndriver. For volumes created with other volume drivers, this field\nis set to `-1` (\"not available\")\n",
                                                    "nullable": false,
                                                    "type": "integer"
                                                }
                                            }
                                        }
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
                        "type": "object",
                        "properties": {
                            "Containers": {
                                "type": "array",
                                "items": {
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
                                }
                            },
                            "Images": {
                                "type": "array",
                                "items": {
                                    "required": [
                                        "Id",
                                        "ParentId",
                                        "RepoTags",
                                        "RepoDigests",
                                        "Created",
                                        "Size",
                                        "SharedSize",
                                        "VirtualSize",
                                        "Labels",
                                        "Containers"
                                    ],
                                    "type": "object",
                                    "properties": {
                                        "Containers": {
                                            "nullable": false,
                                            "type": "integer"
                                        },
                                        "Created": {
                                            "nullable": false,
                                            "type": "integer"
                                        },
                                        "Id": {
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Labels": {
                                            "nullable": false,
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "string"
                                            }
                                        },
                                        "ParentId": {
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "RepoDigests": {
                                            "nullable": false,
                                            "type": "array",
                                            "items": {
                                                "type": "string"
                                            }
                                        },
                                        "RepoTags": {
                                            "nullable": false,
                                            "type": "array",
                                            "items": {
                                                "type": "string"
                                            }
                                        },
                                        "SharedSize": {
                                            "nullable": false,
                                            "type": "integer"
                                        },
                                        "Size": {
                                            "nullable": false,
                                            "type": "integer"
                                        },
                                        "VirtualSize": {
                                            "nullable": false,
                                            "type": "integer"
                                        }
                                    }
                                }
                            },
                            "LayersSize": {
                                "format": "int64",
                                "type": "integer"
                            },
                            "Volumes": {
                                "type": "array",
                                "items": {
                                    "example": {
                                        "CreatedAt": "2016-06-07T20:31:11.853781916Z",
                                        "Driver": "custom",
                                        "Labels": {
                                            "com.example.some-label": "some-value",
                                            "com.example.some-other-label": "some-other-value"
                                        },
                                        "Mountpoint": "/var/lib/docker/volumes/tardis",
                                        "Name": "tardis",
                                        "Scope": "local",
                                        "Status": {
                                            "hello": "world"
                                        }
                                    },
                                    "required": [
                                        "Name",
                                        "Driver",
                                        "Mountpoint",
                                        "Labels",
                                        "Scope",
                                        "Options"
                                    ],
                                    "type": "object",
                                    "properties": {
                                        "CreatedAt": {
                                            "description": "Date/Time the volume was created.",
                                            "format": "dateTime",
                                            "type": "string"
                                        },
                                        "Driver": {
                                            "description": "Name of the volume driver used by the volume.",
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Labels": {
                                            "description": "User-defined key/value metadata.",
                                            "nullable": false,
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "string"
                                            }
                                        },
                                        "Mountpoint": {
                                            "description": "Mount path of the volume on the host.",
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Name": {
                                            "description": "Name of the volume.",
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Options": {
                                            "description": "The driver specific options used when creating the volume.",
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "string"
                                            }
                                        },
                                        "Scope": {
                                            "default": "local",
                                            "description": "The level at which the volume exists. Either `global` for cluster-wide, or `local` for machine level.",
                                            "enum": [
                                                "local",
                                                "global"
                                            ],
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Status": {
                                            "description": "Low-level details about the volume, provided by the volume driver.\nDetails are returned as a map with key/value pairs:\n`{\"key\":\"value\",\"key2\":\"value2\"}`.\n\nThe `Status` field is optional, and is omitted if the volume driver\ndoes not support this feature.\n",
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "object"
                                            }
                                        },
                                        "UsageData": {
                                            "description": "Usage details about the volume. This information is used by the\n`GET /system/df` endpoint, and omitted in other endpoints.\n",
                                            "nullable": true,
                                            "required": [
                                                "Size",
                                                "RefCount"
                                            ],
                                            "type": "object",
                                            "properties": {
                                                "RefCount": {
                                                    "default": -1,
                                                    "description": "The number of containers referencing this volume. This field\nis set to `-1` if the reference-count is not available.\n",
                                                    "nullable": false,
                                                    "type": "integer"
                                                },
                                                "Size": {
                                                    "default": -1,
                                                    "description": "Amount of disk space used by the volume (in bytes). This information\nis only available for volumes created with the `\"local\"` volume\ndriver. For volumes created with other volume drivers, this field\nis set to `-1` (\"not available\")\n",
                                                    "nullable": false,
                                                    "type": "integer"
                                                }
                                            }
                                        }
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