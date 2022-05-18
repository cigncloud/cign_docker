module.exports = {
    "version": "1.33",
    "operationId": "TaskInspect",
    "path": "/tasks/{id}",
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
                        "description": "ID of the task"
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
            "description": "ID of the task"
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
                            "AssignedGenericResources": {
                                "description": "User-defined resources can be either Integer resources (e.g, `SSD=3`) or String resources (e.g, `GPU=UUID1`)",
                                "example": [
                                    {
                                        "DiscreteResourceSpec": {
                                            "Kind": "SSD",
                                            "Value": 3
                                        }
                                    },
                                    {
                                        "NamedResourceSpec": {
                                            "Kind": "GPU",
                                            "Value": "UUID1"
                                        }
                                    },
                                    {
                                        "NamedResourceSpec": {
                                            "Kind": "GPU",
                                            "Value": "UUID2"
                                        }
                                    }
                                ],
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "DiscreteResourceSpec": {
                                            "type": "object",
                                            "properties": {
                                                "Kind": {
                                                    "type": "string"
                                                },
                                                "Value": {
                                                    "format": "int64",
                                                    "type": "integer"
                                                }
                                            }
                                        },
                                        "NamedResourceSpec": {
                                            "type": "object",
                                            "properties": {
                                                "Kind": {
                                                    "type": "string"
                                                },
                                                "Value": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "CreatedAt": {
                                "format": "dateTime",
                                "type": "string"
                            },
                            "DesiredState": {
                                "enum": [
                                    "new",
                                    "allocated",
                                    "pending",
                                    "assigned",
                                    "accepted",
                                    "preparing",
                                    "ready",
                                    "starting",
                                    "running",
                                    "complete",
                                    "shutdown",
                                    "failed",
                                    "rejected"
                                ],
                                "type": "string"
                            },
                            "ID": {
                                "description": "The ID of the task.",
                                "type": "string"
                            },
                            "Labels": {
                                "description": "User-defined key/value metadata.",
                                "type": "object",
                                "additionalProperties": {
                                    "type": "string"
                                }
                            },
                            "Name": {
                                "description": "Name of the task.",
                                "type": "string"
                            },
                            "NodeID": {
                                "description": "The ID of the node that this task is on.",
                                "type": "string"
                            },
                            "ServiceID": {
                                "description": "The ID of the service this task is part of.",
                                "type": "string"
                            },
                            "Slot": {
                                "type": "integer"
                            },
                            "Spec": {
                                "description": "User modifiable task configuration.",
                                "type": "object",
                                "properties": {
                                    "ContainerSpec": {
                                        "description": "Invalid when specified with `PluginSpec`.",
                                        "type": "object",
                                        "properties": {
                                            "Args": {
                                                "description": "Arguments to the command.",
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            },
                                            "Command": {
                                                "description": "The command to be run in the image.",
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            },
                                            "Configs": {
                                                "description": "Configs contains references to zero or more configs that will be exposed to the service.",
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "ConfigID": {
                                                            "description": "ConfigID represents the ID of the specific config that we're referencing.",
                                                            "type": "string"
                                                        },
                                                        "ConfigName": {
                                                            "description": "ConfigName is the name of the config that this references, but this is just provided for\nlookup/display purposes. The config in the reference will be identified by its ID.\n",
                                                            "type": "string"
                                                        },
                                                        "File": {
                                                            "description": "File represents a specific target that is backed by a file.",
                                                            "type": "object",
                                                            "properties": {
                                                                "GID": {
                                                                    "description": "GID represents the file GID.",
                                                                    "type": "string"
                                                                },
                                                                "Mode": {
                                                                    "description": "Mode represents the FileMode of the file.",
                                                                    "format": "uint32",
                                                                    "type": "integer"
                                                                },
                                                                "Name": {
                                                                    "description": "Name represents the final filename in the filesystem.",
                                                                    "type": "string"
                                                                },
                                                                "UID": {
                                                                    "description": "UID represents the file UID.",
                                                                    "type": "string"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "DNSConfig": {
                                                "description": "Specification for DNS related configurations in resolver configuration file (`resolv.conf`).",
                                                "type": "object",
                                                "properties": {
                                                    "Nameservers": {
                                                        "description": "The IP addresses of the name servers.",
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "Options": {
                                                        "description": "A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.).",
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "Search": {
                                                        "description": "A search list for host-name lookup.",
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            },
                                            "Dir": {
                                                "description": "The working directory for commands to run in.",
                                                "type": "string"
                                            },
                                            "Env": {
                                                "description": "A list of environment variables in the form `VAR=value`.",
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            },
                                            "Groups": {
                                                "description": "A list of additional groups that the container process will run as.",
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            },
                                            "HealthCheck": {
                                                "description": "A test to perform to check that the container is healthy.",
                                                "type": "object",
                                                "properties": {
                                                    "Interval": {
                                                        "description": "The time to wait between checks in nanoseconds. It should be 0 or at least 1000000 (1 ms). 0 means inherit.",
                                                        "type": "integer"
                                                    },
                                                    "Retries": {
                                                        "description": "The number of consecutive failures needed to consider a container as unhealthy. 0 means inherit.",
                                                        "type": "integer"
                                                    },
                                                    "StartPeriod": {
                                                        "description": "Start period for the container to initialize before starting health-retries countdown in nanoseconds. It should be 0 or at least 1000000 (1 ms). 0 means inherit.",
                                                        "type": "integer"
                                                    },
                                                    "Test": {
                                                        "description": "The test to perform. Possible values are:\n\n- `[]` inherit healthcheck from image or parent image\n- `[\"NONE\"]` disable healthcheck\n- `[\"CMD\", args...]` exec arguments directly\n- `[\"CMD-SHELL\", command]` run command with system's default shell\n",
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "Timeout": {
                                                        "description": "The time to wait before considering the check to have hung. It should be 0 or at least 1000000 (1 ms). 0 means inherit.",
                                                        "type": "integer"
                                                    }
                                                }
                                            },
                                            "Hostname": {
                                                "description": "The hostname to use for the container, as a valid RFC 1123 hostname.",
                                                "type": "string"
                                            },
                                            "Hosts": {
                                                "description": "A list of hostname/IP mappings to add to the container's `hosts`\nfile. The format of extra hosts is specified in the\n[hosts(5)](http://man7.org/linux/man-pages/man5/hosts.5.html)\nman page:\n\n    IP_address canonical_hostname [aliases...]\n",
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            },
                                            "Image": {
                                                "description": "The image name to use for the container",
                                                "type": "string"
                                            },
                                            "Labels": {
                                                "description": "User-defined key/value data.",
                                                "type": "object",
                                                "additionalProperties": {
                                                    "type": "string"
                                                }
                                            },
                                            "Mounts": {
                                                "description": "Specification for mounts to be added to containers created as part of the service.",
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
                                            "OpenStdin": {
                                                "description": "Open `stdin`",
                                                "type": "boolean"
                                            },
                                            "Privileges": {
                                                "description": "Security options for the container",
                                                "type": "object",
                                                "properties": {
                                                    "CredentialSpec": {
                                                        "description": "CredentialSpec for managed service account (Windows only)",
                                                        "type": "object",
                                                        "properties": {
                                                            "File": {
                                                                "description": "Load credential spec from this file. The file is read by the daemon, and must be present in the\n`CredentialSpecs` subdirectory in the docker data directory, which defaults to\n`C:\\ProgramData\\Docker\\` on Windows.\n\nFor example, specifying `spec.json` loads `C:\\ProgramData\\Docker\\CredentialSpecs\\spec.json`.\n\n<p><br /></p>\n\n> **Note**: `CredentialSpec.File` and `CredentialSpec.Registry` are mutually exclusive.\n",
                                                                "type": "string"
                                                            },
                                                            "Registry": {
                                                                "description": "Load credential spec from this value in the Windows registry. The specified registry value must be\nlocated in:\n\n`HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Virtualization\\Containers\\CredentialSpecs`\n\n<p><br /></p>\n\n\n> **Note**: `CredentialSpec.File` and `CredentialSpec.Registry` are mutually exclusive.\n",
                                                                "type": "string"
                                                            }
                                                        }
                                                    },
                                                    "SELinuxContext": {
                                                        "description": "SELinux labels of the container",
                                                        "type": "object",
                                                        "properties": {
                                                            "Disable": {
                                                                "description": "Disable SELinux",
                                                                "type": "boolean"
                                                            },
                                                            "Level": {
                                                                "description": "SELinux level label",
                                                                "type": "string"
                                                            },
                                                            "Role": {
                                                                "description": "SELinux role label",
                                                                "type": "string"
                                                            },
                                                            "Type": {
                                                                "description": "SELinux type label",
                                                                "type": "string"
                                                            },
                                                            "User": {
                                                                "description": "SELinux user label",
                                                                "type": "string"
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "ReadOnly": {
                                                "description": "Mount the container's root filesystem as read only.",
                                                "type": "boolean"
                                            },
                                            "Secrets": {
                                                "description": "Secrets contains references to zero or more secrets that will be exposed to the service.",
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "File": {
                                                            "description": "File represents a specific target that is backed by a file.",
                                                            "type": "object",
                                                            "properties": {
                                                                "GID": {
                                                                    "description": "GID represents the file GID.",
                                                                    "type": "string"
                                                                },
                                                                "Mode": {
                                                                    "description": "Mode represents the FileMode of the file.",
                                                                    "format": "uint32",
                                                                    "type": "integer"
                                                                },
                                                                "Name": {
                                                                    "description": "Name represents the final filename in the filesystem.",
                                                                    "type": "string"
                                                                },
                                                                "UID": {
                                                                    "description": "UID represents the file UID.",
                                                                    "type": "string"
                                                                }
                                                            }
                                                        },
                                                        "SecretID": {
                                                            "description": "SecretID represents the ID of the specific secret that we're referencing.",
                                                            "type": "string"
                                                        },
                                                        "SecretName": {
                                                            "description": "SecretName is the name of the secret that this references, but this is just provided for\nlookup/display purposes. The secret in the reference will be identified by its ID.\n",
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            },
                                            "StopGracePeriod": {
                                                "description": "Amount of time to wait for the container to terminate before forcefully killing it.",
                                                "format": "int64",
                                                "type": "integer"
                                            },
                                            "StopSignal": {
                                                "description": "Signal to stop the container.",
                                                "type": "string"
                                            },
                                            "TTY": {
                                                "description": "Whether a pseudo-TTY should be allocated.",
                                                "type": "boolean"
                                            },
                                            "User": {
                                                "description": "The user inside the container.",
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "ForceUpdate": {
                                        "description": "A counter that triggers an update even if no relevant parameters have been changed.",
                                        "type": "integer"
                                    },
                                    "LogDriver": {
                                        "description": "Specifies the log driver to use for tasks created from this spec. If not present, the default one for the swarm will be used, finally falling back to the engine default if not specified.",
                                        "type": "object",
                                        "properties": {
                                            "Name": {
                                                "type": "string"
                                            },
                                            "Options": {
                                                "type": "object",
                                                "additionalProperties": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    },
                                    "Networks": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "Aliases": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "Target": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    },
                                    "Placement": {
                                        "type": "object",
                                        "properties": {
                                            "Constraints": {
                                                "description": "An array of constraints.",
                                                "example": [
                                                    "node.hostname!=node3.corp.example.com",
                                                    "node.role!=manager",
                                                    "node.labels.type==production"
                                                ],
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            },
                                            "Platforms": {
                                                "description": "Platforms stores all the platforms that the service's image can\nrun on. This field is used in the platform filter for scheduling.\nIf empty, then the platform filter is off, meaning there are no\nscheduling restrictions.\n",
                                                "type": "array",
                                                "items": {
                                                    "description": "Platform represents the platform (Arch/OS).\n",
                                                    "type": "object",
                                                    "properties": {
                                                        "Architecture": {
                                                            "description": "Architecture represents the hardware architecture (for example,\n`x86_64`).\n",
                                                            "example": "x86_64",
                                                            "type": "string"
                                                        },
                                                        "OS": {
                                                            "description": "OS represents the Operating System (for example, `linux` or `windows`).\n",
                                                            "example": "linux",
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            },
                                            "Preferences": {
                                                "description": "Preferences provide a way to make the scheduler aware of factors such as topology. They are provided in order from highest to lowest precedence.",
                                                "example": [
                                                    {
                                                        "Spread": {
                                                            "SpreadDescriptor": "node.labels.datacenter"
                                                        }
                                                    },
                                                    {
                                                        "Spread": {
                                                            "SpreadDescriptor": "node.labels.rack"
                                                        }
                                                    }
                                                ],
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "Spread": {
                                                            "type": "object",
                                                            "properties": {
                                                                "SpreadDescriptor": {
                                                                    "description": "label descriptor, such as engine.labels.az",
                                                                    "type": "string"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "PluginSpec": {
                                        "description": "Invalid when specified with `ContainerSpec`. *(Experimental release only.)*",
                                        "type": "object",
                                        "properties": {
                                            "Disabled": {
                                                "description": "Disable the plugin once scheduled.",
                                                "type": "boolean"
                                            },
                                            "Name": {
                                                "description": "The name or 'alias' to use for the plugin.",
                                                "type": "string"
                                            },
                                            "PluginPrivilege": {
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
                                            "Remote": {
                                                "description": "The plugin image reference to use.",
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "Resources": {
                                        "description": "Resource requirements which apply to each individual container created as part of the service.",
                                        "type": "object",
                                        "properties": {
                                            "Limits": {
                                                "description": "An object describing the resources which can be advertised by a node and requested by a task",
                                                "type": "object",
                                                "properties": {
                                                    "GenericResources": {
                                                        "description": "User-defined resources can be either Integer resources (e.g, `SSD=3`) or String resources (e.g, `GPU=UUID1`)",
                                                        "example": [
                                                            {
                                                                "DiscreteResourceSpec": {
                                                                    "Kind": "SSD",
                                                                    "Value": 3
                                                                }
                                                            },
                                                            {
                                                                "NamedResourceSpec": {
                                                                    "Kind": "GPU",
                                                                    "Value": "UUID1"
                                                                }
                                                            },
                                                            {
                                                                "NamedResourceSpec": {
                                                                    "Kind": "GPU",
                                                                    "Value": "UUID2"
                                                                }
                                                            }
                                                        ],
                                                        "type": "array",
                                                        "items": {
                                                            "type": "object",
                                                            "properties": {
                                                                "DiscreteResourceSpec": {
                                                                    "type": "object",
                                                                    "properties": {
                                                                        "Kind": {
                                                                            "type": "string"
                                                                        },
                                                                        "Value": {
                                                                            "format": "int64",
                                                                            "type": "integer"
                                                                        }
                                                                    }
                                                                },
                                                                "NamedResourceSpec": {
                                                                    "type": "object",
                                                                    "properties": {
                                                                        "Kind": {
                                                                            "type": "string"
                                                                        },
                                                                        "Value": {
                                                                            "type": "string"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "MemoryBytes": {
                                                        "example": 8272408576,
                                                        "format": "int64",
                                                        "type": "integer"
                                                    },
                                                    "NanoCPUs": {
                                                        "example": 4000000000,
                                                        "format": "int64",
                                                        "type": "integer"
                                                    }
                                                }
                                            },
                                            "Reservation": {
                                                "description": "An object describing the resources which can be advertised by a node and requested by a task",
                                                "type": "object",
                                                "properties": {
                                                    "GenericResources": {
                                                        "description": "User-defined resources can be either Integer resources (e.g, `SSD=3`) or String resources (e.g, `GPU=UUID1`)",
                                                        "example": [
                                                            {
                                                                "DiscreteResourceSpec": {
                                                                    "Kind": "SSD",
                                                                    "Value": 3
                                                                }
                                                            },
                                                            {
                                                                "NamedResourceSpec": {
                                                                    "Kind": "GPU",
                                                                    "Value": "UUID1"
                                                                }
                                                            },
                                                            {
                                                                "NamedResourceSpec": {
                                                                    "Kind": "GPU",
                                                                    "Value": "UUID2"
                                                                }
                                                            }
                                                        ],
                                                        "type": "array",
                                                        "items": {
                                                            "type": "object",
                                                            "properties": {
                                                                "DiscreteResourceSpec": {
                                                                    "type": "object",
                                                                    "properties": {
                                                                        "Kind": {
                                                                            "type": "string"
                                                                        },
                                                                        "Value": {
                                                                            "format": "int64",
                                                                            "type": "integer"
                                                                        }
                                                                    }
                                                                },
                                                                "NamedResourceSpec": {
                                                                    "type": "object",
                                                                    "properties": {
                                                                        "Kind": {
                                                                            "type": "string"
                                                                        },
                                                                        "Value": {
                                                                            "type": "string"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "MemoryBytes": {
                                                        "example": 8272408576,
                                                        "format": "int64",
                                                        "type": "integer"
                                                    },
                                                    "NanoCPUs": {
                                                        "example": 4000000000,
                                                        "format": "int64",
                                                        "type": "integer"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "RestartPolicy": {
                                        "description": "Specification for the restart policy which applies to containers created as part of this service.",
                                        "type": "object",
                                        "properties": {
                                            "Condition": {
                                                "description": "Condition for restart.",
                                                "enum": [
                                                    "none",
                                                    "on-failure",
                                                    "any"
                                                ],
                                                "type": "string"
                                            },
                                            "Delay": {
                                                "description": "Delay between restart attempts.",
                                                "format": "int64",
                                                "type": "integer"
                                            },
                                            "MaxAttempts": {
                                                "default": 0,
                                                "description": "Maximum attempts to restart a given container before giving up (default value is 0, which is ignored).",
                                                "format": "int64",
                                                "type": "integer"
                                            },
                                            "Window": {
                                                "default": 0,
                                                "description": "Windows is the time window used to evaluate the restart policy (default value is 0, which is unbounded).",
                                                "format": "int64",
                                                "type": "integer"
                                            }
                                        }
                                    },
                                    "Runtime": {
                                        "description": "Runtime is the type of runtime specified for the task executor.",
                                        "type": "string"
                                    }
                                }
                            },
                            "Status": {
                                "type": "object",
                                "properties": {
                                    "ContainerStatus": {
                                        "type": "object",
                                        "properties": {
                                            "ContainerID": {
                                                "type": "string"
                                            },
                                            "ExitCode": {
                                                "type": "integer"
                                            },
                                            "PID": {
                                                "type": "integer"
                                            }
                                        }
                                    },
                                    "Err": {
                                        "type": "string"
                                    },
                                    "Message": {
                                        "type": "string"
                                    },
                                    "State": {
                                        "enum": [
                                            "new",
                                            "allocated",
                                            "pending",
                                            "assigned",
                                            "accepted",
                                            "preparing",
                                            "ready",
                                            "starting",
                                            "running",
                                            "complete",
                                            "shutdown",
                                            "failed",
                                            "rejected"
                                        ],
                                        "type": "string"
                                    },
                                    "Timestamp": {
                                        "format": "dateTime",
                                        "type": "string"
                                    }
                                }
                            },
                            "UpdatedAt": {
                                "format": "dateTime",
                                "type": "string"
                            },
                            "Version": {
                                "description": "The version number of the object such as node, service, etc. This is needed to avoid conflicting writes.\nThe client must send the version number along with the modified specification when updating these objects.\nThis approach ensures safe concurrency and determinism in that the change on the object\nmay not be applied if the version number has changed from the last read. In other words,\nif two update requests specify the same base version, only one of the requests can succeed.\nAs a result, two separate update requests that happen at the same time will not\nunintentionally overwrite each other.\n",
                                "type": "object",
                                "properties": {
                                    "Index": {
                                        "example": 373531,
                                        "format": "uint64",
                                        "type": "integer"
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
                }
            }
        }
    },
    "callbacks": null
}