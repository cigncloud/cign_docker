module.exports = {
    "version": "1.33",
    "operationId": "PluginInspect",
    "path": "/plugins/{name}/json",
    "method": "get",
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
        }
    },
    "requestBody": null,
    "responses": {
        "200": {
            "body": {
                "application/json": {
                    "schema": {
                        "description": "A plugin for the Engine API",
                        "required": [
                            "Settings",
                            "Enabled",
                            "Config",
                            "Name"
                        ],
                        "type": "object",
                        "properties": {
                            "Config": {
                                "description": "The config of a plugin.",
                                "nullable": false,
                                "required": [
                                    "Description",
                                    "Documentation",
                                    "Interface",
                                    "Entrypoint",
                                    "WorkDir",
                                    "Network",
                                    "Linux",
                                    "PidHost",
                                    "PropagatedMount",
                                    "IpcHost",
                                    "Mounts",
                                    "Env",
                                    "Args"
                                ],
                                "type": "object",
                                "properties": {
                                    "Args": {
                                        "nullable": false,
                                        "required": [
                                            "Name",
                                            "Description",
                                            "Settable",
                                            "Value"
                                        ],
                                        "type": "object",
                                        "properties": {
                                            "Description": {
                                                "example": "command line arguments",
                                                "nullable": false,
                                                "type": "string"
                                            },
                                            "Name": {
                                                "example": "args",
                                                "nullable": false,
                                                "type": "string"
                                            },
                                            "Settable": {
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            },
                                            "Value": {
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    },
                                    "Description": {
                                        "example": "A sample volume plugin for Docker",
                                        "nullable": false,
                                        "type": "string"
                                    },
                                    "DockerVersion": {
                                        "description": "Docker Version used to create the plugin",
                                        "example": "17.06.0-ce",
                                        "nullable": false,
                                        "type": "string"
                                    },
                                    "Documentation": {
                                        "example": "https://docs.docker.com/engine/extend/plugins/",
                                        "nullable": false,
                                        "type": "string"
                                    },
                                    "Entrypoint": {
                                        "example": [
                                            "/usr/bin/sample-volume-plugin",
                                            "/data"
                                        ],
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "Env": {
                                        "example": [
                                            {
                                                "Description": "If set, prints debug messages",
                                                "Name": "DEBUG",
                                                "Settable": null,
                                                "Value": "0"
                                            }
                                        ],
                                        "type": "array",
                                        "items": {
                                            "nullable": false,
                                            "required": [
                                                "Name",
                                                "Description",
                                                "Settable",
                                                "Value"
                                            ],
                                            "type": "object",
                                            "properties": {
                                                "Description": {
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Name": {
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Settable": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "Value": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    },
                                    "Interface": {
                                        "description": "The interface between Docker and the plugin",
                                        "nullable": false,
                                        "required": [
                                            "Types",
                                            "Socket"
                                        ],
                                        "type": "object",
                                        "properties": {
                                            "Socket": {
                                                "example": "plugins.sock",
                                                "nullable": false,
                                                "type": "string"
                                            },
                                            "Types": {
                                                "example": [
                                                    "docker.volumedriver/1.0"
                                                ],
                                                "type": "array",
                                                "items": {
                                                    "nullable": false,
                                                    "required": [
                                                        "Prefix",
                                                        "Capability",
                                                        "Version"
                                                    ],
                                                    "type": "object",
                                                    "properties": {
                                                        "Capability": {
                                                            "nullable": false,
                                                            "type": "string"
                                                        },
                                                        "Prefix": {
                                                            "nullable": false,
                                                            "type": "string"
                                                        },
                                                        "Version": {
                                                            "nullable": false,
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "IpcHost": {
                                        "example": false,
                                        "nullable": false,
                                        "type": "boolean"
                                    },
                                    "Linux": {
                                        "nullable": false,
                                        "required": [
                                            "Capabilities",
                                            "AllowAllDevices",
                                            "Devices"
                                        ],
                                        "type": "object",
                                        "properties": {
                                            "AllowAllDevices": {
                                                "example": false,
                                                "nullable": false,
                                                "type": "boolean"
                                            },
                                            "Capabilities": {
                                                "example": [
                                                    "CAP_SYS_ADMIN",
                                                    "CAP_SYSLOG"
                                                ],
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            },
                                            "Devices": {
                                                "type": "array",
                                                "items": {
                                                    "nullable": false,
                                                    "required": [
                                                        "Name",
                                                        "Description",
                                                        "Settable",
                                                        "Path"
                                                    ],
                                                    "type": "object",
                                                    "properties": {
                                                        "Description": {
                                                            "nullable": false,
                                                            "type": "string"
                                                        },
                                                        "Name": {
                                                            "nullable": false,
                                                            "type": "string"
                                                        },
                                                        "Path": {
                                                            "example": "/dev/fuse",
                                                            "type": "string"
                                                        },
                                                        "Settable": {
                                                            "type": "array",
                                                            "items": {
                                                                "type": "string"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Mounts": {
                                        "type": "array",
                                        "items": {
                                            "nullable": false,
                                            "required": [
                                                "Name",
                                                "Description",
                                                "Settable",
                                                "Source",
                                                "Destination",
                                                "Type",
                                                "Options"
                                            ],
                                            "type": "object",
                                            "properties": {
                                                "Description": {
                                                    "example": "This is a mount that's used by the plugin.",
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Destination": {
                                                    "example": "/mnt/state",
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Name": {
                                                    "example": "some-mount",
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Options": {
                                                    "example": [
                                                        "rbind",
                                                        "rw"
                                                    ],
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "Settable": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "Source": {
                                                    "example": "/var/lib/docker/plugins/",
                                                    "type": "string"
                                                },
                                                "Type": {
                                                    "example": "bind",
                                                    "nullable": false,
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    },
                                    "Network": {
                                        "nullable": false,
                                        "required": [
                                            "Type"
                                        ],
                                        "type": "object",
                                        "properties": {
                                            "Type": {
                                                "example": "host",
                                                "nullable": false,
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "PidHost": {
                                        "example": false,
                                        "nullable": false,
                                        "type": "boolean"
                                    },
                                    "PropagatedMount": {
                                        "example": "/mnt/volumes",
                                        "nullable": false,
                                        "type": "string"
                                    },
                                    "User": {
                                        "nullable": false,
                                        "type": "object",
                                        "properties": {
                                            "GID": {
                                                "example": 1000,
                                                "format": "uint32",
                                                "type": "integer"
                                            },
                                            "UID": {
                                                "example": 1000,
                                                "format": "uint32",
                                                "type": "integer"
                                            }
                                        }
                                    },
                                    "WorkDir": {
                                        "example": "/bin/",
                                        "nullable": false,
                                        "type": "string"
                                    },
                                    "rootfs": {
                                        "type": "object",
                                        "properties": {
                                            "diff_ids": {
                                                "example": [
                                                    "sha256:675532206fbf3030b8458f88d6e26d4eb1577688a25efec97154c94e8b6b4887",
                                                    "sha256:e216a057b1cb1efc11f8a268f37ef62083e70b1b38323ba252e25ac88904a7e8"
                                                ],
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            },
                                            "type": {
                                                "example": "layers",
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            },
                            "Enabled": {
                                "description": "True if the plugin is running. False if the plugin is not running, only installed.",
                                "example": true,
                                "nullable": false,
                                "type": "boolean"
                            },
                            "Id": {
                                "example": "5724e2c8652da337ab2eedd19fc6fc0ec908e4bd907c7421bf6a8dfc70c4c078",
                                "type": "string"
                            },
                            "Name": {
                                "example": "tiborvass/sample-volume-plugin",
                                "nullable": false,
                                "type": "string"
                            },
                            "PluginReference": {
                                "description": "plugin remote reference used to push/pull the plugin",
                                "example": "localhost:5000/tiborvass/sample-volume-plugin:latest",
                                "nullable": false,
                                "type": "string"
                            },
                            "Settings": {
                                "description": "Settings that can be modified by users.",
                                "nullable": false,
                                "required": [
                                    "Args",
                                    "Devices",
                                    "Env",
                                    "Mounts"
                                ],
                                "type": "object",
                                "properties": {
                                    "Args": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "Devices": {
                                        "type": "array",
                                        "items": {
                                            "nullable": false,
                                            "required": [
                                                "Name",
                                                "Description",
                                                "Settable",
                                                "Path"
                                            ],
                                            "type": "object",
                                            "properties": {
                                                "Description": {
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Name": {
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Path": {
                                                    "example": "/dev/fuse",
                                                    "type": "string"
                                                },
                                                "Settable": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Env": {
                                        "example": [
                                            "DEBUG=0"
                                        ],
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "Mounts": {
                                        "type": "array",
                                        "items": {
                                            "nullable": false,
                                            "required": [
                                                "Name",
                                                "Description",
                                                "Settable",
                                                "Source",
                                                "Destination",
                                                "Type",
                                                "Options"
                                            ],
                                            "type": "object",
                                            "properties": {
                                                "Description": {
                                                    "example": "This is a mount that's used by the plugin.",
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Destination": {
                                                    "example": "/mnt/state",
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Name": {
                                                    "example": "some-mount",
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Options": {
                                                    "example": [
                                                        "rbind",
                                                        "rw"
                                                    ],
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "Settable": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "Source": {
                                                    "example": "/var/lib/docker/plugins/",
                                                    "type": "string"
                                                },
                                                "Type": {
                                                    "example": "bind",
                                                    "nullable": false,
                                                    "type": "string"
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
                        "description": "A plugin for the Engine API",
                        "required": [
                            "Settings",
                            "Enabled",
                            "Config",
                            "Name"
                        ],
                        "type": "object",
                        "properties": {
                            "Config": {
                                "description": "The config of a plugin.",
                                "nullable": false,
                                "required": [
                                    "Description",
                                    "Documentation",
                                    "Interface",
                                    "Entrypoint",
                                    "WorkDir",
                                    "Network",
                                    "Linux",
                                    "PidHost",
                                    "PropagatedMount",
                                    "IpcHost",
                                    "Mounts",
                                    "Env",
                                    "Args"
                                ],
                                "type": "object",
                                "properties": {
                                    "Args": {
                                        "nullable": false,
                                        "required": [
                                            "Name",
                                            "Description",
                                            "Settable",
                                            "Value"
                                        ],
                                        "type": "object",
                                        "properties": {
                                            "Description": {
                                                "example": "command line arguments",
                                                "nullable": false,
                                                "type": "string"
                                            },
                                            "Name": {
                                                "example": "args",
                                                "nullable": false,
                                                "type": "string"
                                            },
                                            "Settable": {
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            },
                                            "Value": {
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    },
                                    "Description": {
                                        "example": "A sample volume plugin for Docker",
                                        "nullable": false,
                                        "type": "string"
                                    },
                                    "DockerVersion": {
                                        "description": "Docker Version used to create the plugin",
                                        "example": "17.06.0-ce",
                                        "nullable": false,
                                        "type": "string"
                                    },
                                    "Documentation": {
                                        "example": "https://docs.docker.com/engine/extend/plugins/",
                                        "nullable": false,
                                        "type": "string"
                                    },
                                    "Entrypoint": {
                                        "example": [
                                            "/usr/bin/sample-volume-plugin",
                                            "/data"
                                        ],
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "Env": {
                                        "example": [
                                            {
                                                "Description": "If set, prints debug messages",
                                                "Name": "DEBUG",
                                                "Settable": null,
                                                "Value": "0"
                                            }
                                        ],
                                        "type": "array",
                                        "items": {
                                            "nullable": false,
                                            "required": [
                                                "Name",
                                                "Description",
                                                "Settable",
                                                "Value"
                                            ],
                                            "type": "object",
                                            "properties": {
                                                "Description": {
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Name": {
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Settable": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "Value": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    },
                                    "Interface": {
                                        "description": "The interface between Docker and the plugin",
                                        "nullable": false,
                                        "required": [
                                            "Types",
                                            "Socket"
                                        ],
                                        "type": "object",
                                        "properties": {
                                            "Socket": {
                                                "example": "plugins.sock",
                                                "nullable": false,
                                                "type": "string"
                                            },
                                            "Types": {
                                                "example": [
                                                    "docker.volumedriver/1.0"
                                                ],
                                                "type": "array",
                                                "items": {
                                                    "nullable": false,
                                                    "required": [
                                                        "Prefix",
                                                        "Capability",
                                                        "Version"
                                                    ],
                                                    "type": "object",
                                                    "properties": {
                                                        "Capability": {
                                                            "nullable": false,
                                                            "type": "string"
                                                        },
                                                        "Prefix": {
                                                            "nullable": false,
                                                            "type": "string"
                                                        },
                                                        "Version": {
                                                            "nullable": false,
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "IpcHost": {
                                        "example": false,
                                        "nullable": false,
                                        "type": "boolean"
                                    },
                                    "Linux": {
                                        "nullable": false,
                                        "required": [
                                            "Capabilities",
                                            "AllowAllDevices",
                                            "Devices"
                                        ],
                                        "type": "object",
                                        "properties": {
                                            "AllowAllDevices": {
                                                "example": false,
                                                "nullable": false,
                                                "type": "boolean"
                                            },
                                            "Capabilities": {
                                                "example": [
                                                    "CAP_SYS_ADMIN",
                                                    "CAP_SYSLOG"
                                                ],
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            },
                                            "Devices": {
                                                "type": "array",
                                                "items": {
                                                    "nullable": false,
                                                    "required": [
                                                        "Name",
                                                        "Description",
                                                        "Settable",
                                                        "Path"
                                                    ],
                                                    "type": "object",
                                                    "properties": {
                                                        "Description": {
                                                            "nullable": false,
                                                            "type": "string"
                                                        },
                                                        "Name": {
                                                            "nullable": false,
                                                            "type": "string"
                                                        },
                                                        "Path": {
                                                            "example": "/dev/fuse",
                                                            "type": "string"
                                                        },
                                                        "Settable": {
                                                            "type": "array",
                                                            "items": {
                                                                "type": "string"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Mounts": {
                                        "type": "array",
                                        "items": {
                                            "nullable": false,
                                            "required": [
                                                "Name",
                                                "Description",
                                                "Settable",
                                                "Source",
                                                "Destination",
                                                "Type",
                                                "Options"
                                            ],
                                            "type": "object",
                                            "properties": {
                                                "Description": {
                                                    "example": "This is a mount that's used by the plugin.",
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Destination": {
                                                    "example": "/mnt/state",
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Name": {
                                                    "example": "some-mount",
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Options": {
                                                    "example": [
                                                        "rbind",
                                                        "rw"
                                                    ],
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "Settable": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "Source": {
                                                    "example": "/var/lib/docker/plugins/",
                                                    "type": "string"
                                                },
                                                "Type": {
                                                    "example": "bind",
                                                    "nullable": false,
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    },
                                    "Network": {
                                        "nullable": false,
                                        "required": [
                                            "Type"
                                        ],
                                        "type": "object",
                                        "properties": {
                                            "Type": {
                                                "example": "host",
                                                "nullable": false,
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "PidHost": {
                                        "example": false,
                                        "nullable": false,
                                        "type": "boolean"
                                    },
                                    "PropagatedMount": {
                                        "example": "/mnt/volumes",
                                        "nullable": false,
                                        "type": "string"
                                    },
                                    "User": {
                                        "nullable": false,
                                        "type": "object",
                                        "properties": {
                                            "GID": {
                                                "example": 1000,
                                                "format": "uint32",
                                                "type": "integer"
                                            },
                                            "UID": {
                                                "example": 1000,
                                                "format": "uint32",
                                                "type": "integer"
                                            }
                                        }
                                    },
                                    "WorkDir": {
                                        "example": "/bin/",
                                        "nullable": false,
                                        "type": "string"
                                    },
                                    "rootfs": {
                                        "type": "object",
                                        "properties": {
                                            "diff_ids": {
                                                "example": [
                                                    "sha256:675532206fbf3030b8458f88d6e26d4eb1577688a25efec97154c94e8b6b4887",
                                                    "sha256:e216a057b1cb1efc11f8a268f37ef62083e70b1b38323ba252e25ac88904a7e8"
                                                ],
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            },
                                            "type": {
                                                "example": "layers",
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            },
                            "Enabled": {
                                "description": "True if the plugin is running. False if the plugin is not running, only installed.",
                                "example": true,
                                "nullable": false,
                                "type": "boolean"
                            },
                            "Id": {
                                "example": "5724e2c8652da337ab2eedd19fc6fc0ec908e4bd907c7421bf6a8dfc70c4c078",
                                "type": "string"
                            },
                            "Name": {
                                "example": "tiborvass/sample-volume-plugin",
                                "nullable": false,
                                "type": "string"
                            },
                            "PluginReference": {
                                "description": "plugin remote reference used to push/pull the plugin",
                                "example": "localhost:5000/tiborvass/sample-volume-plugin:latest",
                                "nullable": false,
                                "type": "string"
                            },
                            "Settings": {
                                "description": "Settings that can be modified by users.",
                                "nullable": false,
                                "required": [
                                    "Args",
                                    "Devices",
                                    "Env",
                                    "Mounts"
                                ],
                                "type": "object",
                                "properties": {
                                    "Args": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "Devices": {
                                        "type": "array",
                                        "items": {
                                            "nullable": false,
                                            "required": [
                                                "Name",
                                                "Description",
                                                "Settable",
                                                "Path"
                                            ],
                                            "type": "object",
                                            "properties": {
                                                "Description": {
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Name": {
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Path": {
                                                    "example": "/dev/fuse",
                                                    "type": "string"
                                                },
                                                "Settable": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Env": {
                                        "example": [
                                            "DEBUG=0"
                                        ],
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "Mounts": {
                                        "type": "array",
                                        "items": {
                                            "nullable": false,
                                            "required": [
                                                "Name",
                                                "Description",
                                                "Settable",
                                                "Source",
                                                "Destination",
                                                "Type",
                                                "Options"
                                            ],
                                            "type": "object",
                                            "properties": {
                                                "Description": {
                                                    "example": "This is a mount that's used by the plugin.",
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Destination": {
                                                    "example": "/mnt/state",
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Name": {
                                                    "example": "some-mount",
                                                    "nullable": false,
                                                    "type": "string"
                                                },
                                                "Options": {
                                                    "example": [
                                                        "rbind",
                                                        "rw"
                                                    ],
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "Settable": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "Source": {
                                                    "example": "/var/lib/docker/plugins/",
                                                    "type": "string"
                                                },
                                                "Type": {
                                                    "example": "bind",
                                                    "nullable": false,
                                                    "type": "string"
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