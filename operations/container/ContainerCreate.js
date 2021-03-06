module.exports = {
    "version": "1.33",
    "operationId": "ContainerCreate",
    "path": "/containers/create",
    "method": "post",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "name": {
                        "pattern": "/?[a-zA-Z0-9_-]+",
                        "type": "string",
                        "description": "Assign the specified name to the container. Must match `/?[a-zA-Z0-9_-]+`."
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
            "description": "Assign the specified name to the container. Must match `/?[a-zA-Z0-9_-]+`."
        }
    },
    "requestBody": {
        "isRequired": true,
        "description": "Container to create",
        "content": {
            "application/json": {
                "schema": {
                    "description": "Configuration for a container that is portable between hosts",
                    "type": "object",
                    "properties": {
                        "ArgsEscaped": {
                            "description": "Command is already escaped (Windows only)",
                            "type": "boolean"
                        },
                        "AttachStderr": {
                            "default": true,
                            "description": "Whether to attach to `stderr`.",
                            "type": "boolean"
                        },
                        "AttachStdin": {
                            "default": false,
                            "description": "Whether to attach to `stdin`.",
                            "type": "boolean"
                        },
                        "AttachStdout": {
                            "default": true,
                            "description": "Whether to attach to `stdout`.",
                            "type": "boolean"
                        },
                        "Cmd": {
                            "description": "Command to run specified as a string or an array of strings.",
                            "oneOf": [
                                {
                                    "items": {},
                                    "type": "array"
                                },
                                {
                                    "type": "string"
                                }
                            ],
                            "items": {
                                "type": "string"
                            }
                        },
                        "Domainname": {
                            "description": "The domain name to use for the container.",
                            "type": "string"
                        },
                        "Entrypoint": {
                            "description": "The entry point for the container as a string or an array of strings.\n\nIf the array consists of exactly one empty string (`[\"\"]`) then the entry point is reset to system default (i.e., the entry point used by docker when there is no `ENTRYPOINT` instruction in the `Dockerfile`).\n",
                            "oneOf": [
                                {
                                    "items": {},
                                    "type": "array"
                                },
                                {
                                    "type": "string"
                                }
                            ],
                            "items": {
                                "type": "string"
                            }
                        },
                        "Env": {
                            "description": "A list of environment variables to set inside the container in the form `[\"VAR=value\", ...]`. A variable without `=` is removed from the environment, rather than to have an empty value.\n",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "ExposedPorts": {
                            "description": "An object mapping ports to an empty object in the form:\n\n`{\"<port>/<tcp|udp>\": {}}`\n",
                            "type": "object",
                            "additionalProperties": {
                                "default": {},
                                "enum": [
                                    {}
                                ],
                                "type": "object"
                            }
                        },
                        /*
                        "Healthcheck": {
                            //removed
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
                        */
                        "Hostname": {
                            "description": "The hostname to use for the container, as a valid RFC 1123 hostname.",
                            "type": "string"
                        },
                        "Image": {
                            "description": "The name of the image to use when creating the container",
                            "type": "string"
                        },
                        "Labels": {
                            // replaced
                            "description": "User-defined key/value metadata.",
                            "type": "object",
                            "additionalProperties": {
                                "type": "string"
                            }
                        },
                        "MacAddress": {
                            "description": "MAC address of the container.",
                            "type": "string",
                            readOnly: true
                        },
                        "NetworkDisabled": {
                            "description": "Disable networking for the container.",
                            "type": "boolean"
                        },
                        "OnBuild": {
                            "description": "`ONBUILD` metadata that were defined in the image's `Dockerfile`.",
                            "type": "array",
                            readOnly: true,
                            "items": {
                                "type": "string"
                            }
                        },
                        "OpenStdin": {
                            "default": false,
                            "description": "Open `stdin`",
                            "type": "boolean"
                        },
                        "Shell": {
                            "description": "Shell for when `RUN`, `CMD`, and `ENTRYPOINT` uses a shell.",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "StdinOnce": {
                            "default": false,
                            "description": "Close `stdin` after one attached client disconnects",
                            "type": "boolean"
                        },
                        "StopSignal": {
                            "default": "SIGTERM",
                            "description": "Signal to stop a container as a string or unsigned integer.",
                            "type": "string"
                        },
                        "StopTimeout": {
                            "default": 10,
                            "description": "Timeout to stop a container in seconds.",
                            "type": "integer"
                        },
                        "Tty": {
                            "default": false,
                            "description": "Attach standard streams to a TTY, including `stdin` if it is not closed.",
                            "type": "boolean"
                        },
                        "User": {
                            "description": "The user that commands are run as inside the container.",
                            "type": "string"
                        },
                        "Volumes": {
                            // replaced
                            "description": "An object mapping mount point paths inside the container to empty objects.",
                            "type": "object",
                            "properties": {
                                "additionalProperties": {
                                    "default": {},
                                    "enum": [
                                        {}
                                    ],
                                    "type": "object"
                                }
                            }
                        },
                        "WorkingDir": {
                            "description": "The working directory for commands to run in.",
                            "type": "string"
                        },

                        "HostConfig": {
                            "description": "Container configuration that depends on the host we are running on",
                            "type": "object",
                            "properties": {
                                "BlkioDeviceReadBps": {
                                    "description": "Limit read rate (bytes per second) from a device, in the form `[{\"Path\": \"device_path\", \"Rate\": rate}]`.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "Path": {
                                                "description": "Device path",
                                                "type": "string"
                                            },
                                            "Rate": {
                                                "description": "Rate",
                                                "format": "int64",
                                                "minimum": 0,
                                                "type": "integer"
                                            }
                                        }
                                    }
                                },
                                "BlkioDeviceReadIOps": {
                                    "description": "Limit read rate (IO per second) from a device, in the form `[{\"Path\": \"device_path\", \"Rate\": rate}]`.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "Path": {
                                                "description": "Device path",
                                                "type": "string"
                                            },
                                            "Rate": {
                                                "description": "Rate",
                                                "format": "int64",
                                                "minimum": 0,
                                                "type": "integer"
                                            }
                                        }
                                    }
                                },
                                "BlkioDeviceWriteBps": {
                                    "description": "Limit write rate (bytes per second) to a device, in the form `[{\"Path\": \"device_path\", \"Rate\": rate}]`.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "Path": {
                                                "description": "Device path",
                                                "type": "string"
                                            },
                                            "Rate": {
                                                "description": "Rate",
                                                "format": "int64",
                                                "minimum": 0,
                                                "type": "integer"
                                            }
                                        }
                                    }
                                },
                                "BlkioDeviceWriteIOps": {
                                    "description": "Limit write rate (IO per second) to a device, in the form `[{\"Path\": \"device_path\", \"Rate\": rate}]`.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "Path": {
                                                "description": "Device path",
                                                "type": "string"
                                            },
                                            "Rate": {
                                                "description": "Rate",
                                                "format": "int64",
                                                "minimum": 0,
                                                "type": "integer"
                                            }
                                        }
                                    }
                                },
                                "BlkioWeight": {
                                    "description": "Block IO weight (relative weight).",
                                    "maximum": 1000,
                                    "minimum": 0,
                                    "type": "integer"
                                },
                                "BlkioWeightDevice": {
                                    "description": "Block IO weight (relative device weight) in the form `[{\"Path\": \"device_path\", \"Weight\": weight}]`.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "Path": {
                                                "type": "string"
                                            },
                                            "Weight": {
                                                "minimum": 0,
                                                "type": "integer"
                                            }
                                        }
                                    }
                                },
                                "CgroupParent": {
                                    "description": "Path to `cgroups` under which the container's `cgroup` is created. If the path is not absolute, the path is considered to be relative to the `cgroups` path of the init process. Cgroups are created if they do not already exist.",
                                    "type": "string"
                                },
                                "CpuCount": {
                                    "description": "The number of usable CPUs (Windows only).\n\nOn Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last.\n",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "CpuPercent": {
                                    "description": "The usable percentage of the available CPUs (Windows only).\n\nOn Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last.\n",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "CpuPeriod": {
                                    "description": "The length of a CPU period in microseconds.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "CpuQuota": {
                                    "description": "Microseconds of CPU time that the container can get in a CPU period.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "CpuRealtimePeriod": {
                                    "description": "The length of a CPU real-time period in microseconds. Set to 0 to allocate no time allocated to real-time tasks.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "CpuRealtimeRuntime": {
                                    "description": "The length of a CPU real-time runtime in microseconds. Set to 0 to allocate no time allocated to real-time tasks.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "CpuShares": {
                                    "description": "An integer value representing this container's relative CPU weight versus other containers.",
                                    "type": "integer"
                                },
                                "CpusetCpus": {
                                    "description": "CPUs in which to allow execution (e.g., `0-3`, `0,1`)",
                                    "example": "0-3",
                                    "type": "string"
                                },
                                "CpusetMems": {
                                    "description": "Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only effective on NUMA systems.",
                                    "type": "string"
                                },
                                "DeviceCgroupRules": {
                                    "description": "a list of cgroup rules to apply to the container",
                                    "type": "array",
                                    "items": {
                                        "example": "c 13:* rwm",
                                        "type": "string"
                                    }
                                },
                                "Devices": {
                                    "description": "A list of devices to add to the container.",
                                    "type": "array",
                                    "items": {
                                        "description": "A device mapping between the host and container",
                                        "example": {
                                            "CgroupPermissions": "mrw",
                                            "PathInContainer": "/dev/deviceName",
                                            "PathOnHost": "/dev/deviceName"
                                        },
                                        "type": "object",
                                        "properties": {
                                            "CgroupPermissions": {
                                                "type": "string"
                                            },
                                            "PathInContainer": {
                                                "type": "string"
                                            },
                                            "PathOnHost": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                },
                                "DiskQuota": {
                                    "description": "Disk limit (in bytes).",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "IOMaximumBandwidth": {
                                    "description": "Maximum IO in bytes per second for the container system drive (Windows only)",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "IOMaximumIOps": {
                                    "description": "Maximum IOps for the container system drive (Windows only)",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "KernelMemory": {
                                    "description": "Kernel memory limit in bytes.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "Memory": {
                                    "default": 0,
                                    "description": "Memory limit in bytes.",
                                    "type": "integer"
                                },
                                "MemoryReservation": {
                                    "description": "Memory soft limit in bytes.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "MemorySwap": {
                                    "description": "Total memory limit (memory + swap). Set as `-1` to enable unlimited swap.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "MemorySwappiness": {
                                    "description": "Tune a container's memory swappiness behavior. Accepts an integer between 0 and 100.",
                                    "format": "int64",
                                    "maximum": 100,
                                    "minimum": 0,
                                    "type": "integer"
                                },
                                "NanoCPUs": {
                                    "description": "CPU quota in units of 10<sup>-9</sup> CPUs.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "OomKillDisable": {
                                    "description": "Disable OOM Killer for the container.",
                                    "type": "boolean"
                                },
                                "PidsLimit": {
                                    "description": "Tune a container's pids limit. Set -1 for unlimited.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "Ulimits": {
                                    "description": "A list of resource limits to set in the container. For example: `{\"Name\": \"nofile\", \"Soft\": 1024, \"Hard\": 2048}`\"\n",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "Hard": {
                                                "description": "Hard limit",
                                                "type": "integer"
                                            },
                                            "Name": {
                                                "description": "Name of ulimit",
                                                "type": "string"
                                            },
                                            "Soft": {
                                                "description": "Soft limit",
                                                "type": "integer"
                                            }
                                        }
                                    }
                                },
                                "AutoRemove": {
                                    "description": "Automatically remove the container when the container's process exits. This has no effect if `RestartPolicy` is set.",
                                    "type": "boolean"
                                },
                                "Binds": {
                                    "description": "A list of volume bindings for this container. Each volume binding is a string in one of these forms:\n\n- `host-src:container-dest` to bind-mount a host path into the container. Both `host-src`, and `container-dest` must be an _absolute_ path.\n- `host-src:container-dest:ro` to make the bind mount read-only inside the container. Both `host-src`, and `container-dest` must be an _absolute_ path.\n- `volume-name:container-dest` to bind-mount a volume managed by a volume driver into the container. `container-dest` must be an _absolute_ path.\n- `volume-name:container-dest:ro` to mount the volume read-only inside the container.  `container-dest` must be an _absolute_ path.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "CapAdd": {
                                    "description": "A list of kernel capabilities to add to the container.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "CapDrop": {
                                    "description": "A list of kernel capabilities to drop from the container.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "Cgroup": {
                                    "description": "Cgroup to use for the container.",
                                    "type": "string"
                                },
                                "ConsoleSize": {
                                    "description": "Initial console size, as an `[height, width]` array. (Windows only)",
                                    "maxItems": 2,
                                    "minItems": 2,
                                    "type": "array",
                                    "items": {
                                        "minimum": 0,
                                        "type": "integer"
                                    }
                                },
                                "ContainerIDFile": {
                                    "description": "Path to a file where the container ID is written",
                                    "type": "string"
                                },
                                "Dns": {
                                    "description": "A list of DNS servers for the container to use.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "DnsOptions": {
                                    "description": "A list of DNS options.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "DnsSearch": {
                                    "description": "A list of DNS search domains.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "ExtraHosts": {
                                    "description": "A list of hostnames/IP mappings to add to the container's `/etc/hosts` file. Specified in the form `[\"hostname:IP\"]`.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "GroupAdd": {
                                    "description": "A list of additional groups that the container process will run as.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "IpcMode": {
                                    "description": "IPC sharing mode for the container. Possible values are:\n\n- `\"none\"`: own private IPC namespace, with /dev/shm not mounted\n- `\"private\"`: own private IPC namespace\n- `\"shareable\"`: own private IPC namespace, with a possibility to share it with other containers\n- `\"container:<name|id>\"`: join another (shareable) container's IPC namespace\n- `\"host\"`: use the host system's IPC namespace\n\nIf not specified, daemon default is used, which can either be `\"private\"`\nor `\"shareable\"`, depending on daemon version and configuration.\n",
                                    "type": "string"
                                },
                                "Isolation": {
                                    "description": "Isolation technology of the container. (Windows only)",
                                    "enum": [
                                        "default",
                                        "process",
                                        "hyperv"
                                    ],
                                    "type": "string"
                                },
                                "Links": {
                                    "description": "A list of links for the container in the form `container_name:alias`.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "LogConfig": {
                                    "description": "The logging configuration for this container",
                                    "type": "object",
                                    "properties": {
                                        "Config": {
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "string"
                                            }
                                        },
                                        "Type": {
                                            "enum": [
                                                "json-file",
                                                "syslog",
                                                "journald",
                                                "gelf",
                                                "fluentd",
                                                "awslogs",
                                                "splunk",
                                                "etwlogs",
                                                "none"
                                            ],
                                            "type": "string"
                                        }
                                    }
                                },
                                "Mounts": {
                                    "description": "Specification for mounts to be added to the container.",
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
                                "NetworkMode": {
                                    "description": "Network mode to use for this container. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name to which this container should connect to.",
                                    "type": "string"
                                },
                                "OomScoreAdj": {
                                    "description": "An integer value containing the score given to the container in order to tune OOM killer preferences.",
                                    "example": 500,
                                    "type": "integer"
                                },
                                "PidMode": {
                                    "description": "Set the PID (Process) Namespace mode for the container. It can be either:\n\n- `\"container:<name|id>\"`: joins another container's PID namespace\n- `\"host\"`: use the host's PID namespace inside the container\n",
                                    "type": "string"
                                },
                                "PortBindings": {
                                    "description": "A map of exposed container ports and the host port they should map to.",
                                    "type": "object",
                                    "additionalProperties": {
                                        "type": "object",
                                        "properties": {
                                            "HostIp": {
                                                "description": "The host IP address",
                                                "type": "string"
                                            },
                                            "HostPort": {
                                                "description": "The host port number, as a string",
                                                "type": "string"
                                            }
                                        }
                                    }
                                },
                                "Privileged": {
                                    "description": "Gives the container full access to the host.",
                                    "type": "boolean"
                                },
                                "PublishAllPorts": {
                                    "description": "Allocates a random host port for all of a container's exposed ports.",
                                    "type": "boolean"
                                },
                                "ReadonlyRootfs": {
                                    "description": "Mount the container's root filesystem as read only.",
                                    "type": "boolean"
                                },
                                "RestartPolicy": {
                                    "description": "The behavior to apply when the container exits. The default is not to restart.\n\nAn ever increasing delay (double the previous delay, starting at 100ms) is added before each restart to prevent flooding the server.\n",
                                    "type": "object",
                                    "properties": {
                                        "MaximumRetryCount": {
                                            "description": "If `on-failure` is used, the number of times to retry before giving up",
                                            "type": "integer"
                                        },
                                        "Name": {
                                            "description": "- Empty string means not to restart\n- `always` Always restart\n- `unless-stopped` Restart always except when the user has manually stopped the container\n- `on-failure` Restart only when the container exit code is non-zero\n",
                                            "enum": [
                                                "",
                                                "always",
                                                "unless-stopped",
                                                "on-failure"
                                            ],
                                            "type": "string"
                                        }
                                    }
                                },
                                "Runtime": {
                                    "description": "Runtime to use with this container.",
                                    "type": "string"
                                },
                                "SecurityOpt": {
                                    "description": "A list of string values to customize labels for MLS systems, such as SELinux.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "ShmSize": {
                                    "description": "Size of `/dev/shm` in bytes. If omitted, the system uses 64MB.",
                                    "minimum": 0,
                                    "type": "integer"
                                },
                                "StorageOpt": {
                                    "description": "Storage driver options for this container, in the form `{\"size\": \"120G\"}`.\n",
                                    "type": "object",
                                    "additionalProperties": {
                                        "type": "string"
                                    }
                                },
                                "Sysctls": {
                                    "description": "A list of kernel parameters (sysctls) to set in the container. For example: `{\"net.ipv4.ip_forward\": \"1\"}`\n",
                                    "type": "object",
                                    "additionalProperties": {
                                        "type": "string"
                                    }
                                },
                                "Tmpfs": {
                                    "description": "A map of container directories which should be replaced by tmpfs mounts, and their corresponding mount options. For example: `{ \"/run\": \"rw,noexec,nosuid,size=65536k\" }`.\n",
                                    "type": "object",
                                    "additionalProperties": {
                                        "type": "string"
                                    }
                                },
                                "UTSMode": {
                                    "description": "UTS namespace to use for the container.",
                                    "type": "string"
                                },
                                "UsernsMode": {
                                    "description": "Sets the usernamespace mode for the container when usernamespace remapping option is enabled.",
                                    "type": "string"
                                },
                                "VolumeDriver": {
                                    "description": "Driver that this container uses to mount volumes.",
                                    "type": "string"
                                },
                                "VolumesFrom": {
                                    "description": "A list of volumes to inherit from another container, specified in the form `<container name>[:<ro|rw>]`.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        "NetworkingConfig": {
                            "description": "This container's networking configuration.",
                            "type": "object",
                            "properties": {
                                "EndpointsConfig": {
                                    "description": "A mapping of network name to endpoint configuration for that network.",
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
            "application/octet-stream": {
                "schema": {
                    "description": "Configuration for a container that is portable between hosts",
                    "type": "object",
                    "properties": {
                        "ArgsEscaped": {
                            "description": "Command is already escaped (Windows only)",
                            "type": "boolean"
                        },
                        "AttachStderr": {
                            "default": true,
                            "description": "Whether to attach to `stderr`.",
                            "type": "boolean"
                        },
                        "AttachStdin": {
                            "default": false,
                            "description": "Whether to attach to `stdin`.",
                            "type": "boolean"
                        },
                        "AttachStdout": {
                            "default": true,
                            "description": "Whether to attach to `stdout`.",
                            "type": "boolean"
                        },
                        "Cmd": {
                            "description": "Command to run specified as a string or an array of strings.",
                            "oneOf": [
                                {
                                    "items": {},
                                    "type": "array"
                                },
                                {
                                    "type": "string"
                                }
                            ],
                            "items": {
                                "type": "string"
                            }
                        },
                        "Domainname": {
                            "description": "The domain name to use for the container.",
                            "type": "string"
                        },
                        "Entrypoint": {
                            "description": "The entry point for the container as a string or an array of strings.\n\nIf the array consists of exactly one empty string (`[\"\"]`) then the entry point is reset to system default (i.e., the entry point used by docker when there is no `ENTRYPOINT` instruction in the `Dockerfile`).\n",
                            "oneOf": [
                                {
                                    "items": {},
                                    "type": "array"
                                },
                                {
                                    "type": "string"
                                }
                            ],
                            "items": {
                                "type": "string"
                            }
                        },
                        "Env": {
                            "description": "A list of environment variables to set inside the container in the form `[\"VAR=value\", ...]`. A variable without `=` is removed from the environment, rather than to have an empty value.\n",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "ExposedPorts": {
                            "description": "An object mapping ports to an empty object in the form:\n\n`{\"<port>/<tcp|udp>\": {}}`\n",
                            "type": "object",
                            "additionalProperties": {
                                "default": {},
                                "enum": [
                                    {}
                                ],
                                "type": "object"
                            }
                        },
                        "Healthcheck": {
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
                        "Image": {
                            "description": "The name of the image to use when creating the container",
                            "type": "string"
                        },
                        "Labels": {
                            "description": "User-defined key/value metadata.",
                            "type": "object",
                            "additionalProperties": {
                                "type": "string"
                            }
                        },
                        "MacAddress": {
                            "description": "MAC address of the container.",
                            "type": "string"
                        },
                        "NetworkDisabled": {
                            "description": "Disable networking for the container.",
                            "type": "boolean"
                        },
                        "OnBuild": {
                            "description": "`ONBUILD` metadata that were defined in the image's `Dockerfile`.",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "OpenStdin": {
                            "default": false,
                            "description": "Open `stdin`",
                            "type": "boolean"
                        },
                        "Shell": {
                            "description": "Shell for when `RUN`, `CMD`, and `ENTRYPOINT` uses a shell.",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "StdinOnce": {
                            "default": false,
                            "description": "Close `stdin` after one attached client disconnects",
                            "type": "boolean"
                        },
                        "StopSignal": {
                            "default": "SIGTERM",
                            "description": "Signal to stop a container as a string or unsigned integer.",
                            "type": "string"
                        },
                        "StopTimeout": {
                            "default": 10,
                            "description": "Timeout to stop a container in seconds.",
                            "type": "integer"
                        },
                        "Tty": {
                            "default": false,
                            "description": "Attach standard streams to a TTY, including `stdin` if it is not closed.",
                            "type": "boolean"
                        },
                        "User": {
                            "description": "The user that commands are run as inside the container.",
                            "type": "string"
                        },
                        "Volumes": {
                            "description": "An object mapping mount point paths inside the container to empty objects.",
                            "type": "object",
                            "properties": {
                                "additionalProperties": {
                                    "default": {},
                                    "enum": [
                                        {}
                                    ],
                                    "type": "object"
                                }
                            }
                        },
                        "WorkingDir": {
                            "description": "The working directory for commands to run in.",
                            "type": "string"
                        },
                        "HostConfig": {
                            "description": "Container configuration that depends on the host we are running on",
                            "type": "object",
                            "properties": {
                                "BlkioDeviceReadBps": {
                                    "description": "Limit read rate (bytes per second) from a device, in the form `[{\"Path\": \"device_path\", \"Rate\": rate}]`.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "Path": {
                                                "description": "Device path",
                                                "type": "string"
                                            },
                                            "Rate": {
                                                "description": "Rate",
                                                "format": "int64",
                                                "minimum": 0,
                                                "type": "integer"
                                            }
                                        }
                                    }
                                },
                                "BlkioDeviceReadIOps": {
                                    "description": "Limit read rate (IO per second) from a device, in the form `[{\"Path\": \"device_path\", \"Rate\": rate}]`.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "Path": {
                                                "description": "Device path",
                                                "type": "string"
                                            },
                                            "Rate": {
                                                "description": "Rate",
                                                "format": "int64",
                                                "minimum": 0,
                                                "type": "integer"
                                            }
                                        }
                                    }
                                },
                                "BlkioDeviceWriteBps": {
                                    "description": "Limit write rate (bytes per second) to a device, in the form `[{\"Path\": \"device_path\", \"Rate\": rate}]`.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "Path": {
                                                "description": "Device path",
                                                "type": "string"
                                            },
                                            "Rate": {
                                                "description": "Rate",
                                                "format": "int64",
                                                "minimum": 0,
                                                "type": "integer"
                                            }
                                        }
                                    }
                                },
                                "BlkioDeviceWriteIOps": {
                                    "description": "Limit write rate (IO per second) to a device, in the form `[{\"Path\": \"device_path\", \"Rate\": rate}]`.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "Path": {
                                                "description": "Device path",
                                                "type": "string"
                                            },
                                            "Rate": {
                                                "description": "Rate",
                                                "format": "int64",
                                                "minimum": 0,
                                                "type": "integer"
                                            }
                                        }
                                    }
                                },
                                "BlkioWeight": {
                                    "description": "Block IO weight (relative weight).",
                                    "maximum": 1000,
                                    "minimum": 0,
                                    "type": "integer"
                                },
                                "BlkioWeightDevice": {
                                    "description": "Block IO weight (relative device weight) in the form `[{\"Path\": \"device_path\", \"Weight\": weight}]`.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "Path": {
                                                "type": "string"
                                            },
                                            "Weight": {
                                                "minimum": 0,
                                                "type": "integer"
                                            }
                                        }
                                    }
                                },
                                "CgroupParent": {
                                    "description": "Path to `cgroups` under which the container's `cgroup` is created. If the path is not absolute, the path is considered to be relative to the `cgroups` path of the init process. Cgroups are created if they do not already exist.",
                                    "type": "string"
                                },
                                "CpuCount": {
                                    "description": "The number of usable CPUs (Windows only).\n\nOn Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last.\n",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "CpuPercent": {
                                    "description": "The usable percentage of the available CPUs (Windows only).\n\nOn Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last.\n",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "CpuPeriod": {
                                    "description": "The length of a CPU period in microseconds.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "CpuQuota": {
                                    "description": "Microseconds of CPU time that the container can get in a CPU period.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "CpuRealtimePeriod": {
                                    "description": "The length of a CPU real-time period in microseconds. Set to 0 to allocate no time allocated to real-time tasks.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "CpuRealtimeRuntime": {
                                    "description": "The length of a CPU real-time runtime in microseconds. Set to 0 to allocate no time allocated to real-time tasks.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "CpuShares": {
                                    "description": "An integer value representing this container's relative CPU weight versus other containers.",
                                    "type": "integer"
                                },
                                "CpusetCpus": {
                                    "description": "CPUs in which to allow execution (e.g., `0-3`, `0,1`)",
                                    "example": "0-3",
                                    "type": "string"
                                },
                                "CpusetMems": {
                                    "description": "Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only effective on NUMA systems.",
                                    "type": "string"
                                },
                                "DeviceCgroupRules": {
                                    "description": "a list of cgroup rules to apply to the container",
                                    "type": "array",
                                    "items": {
                                        "example": "c 13:* rwm",
                                        "type": "string"
                                    }
                                },
                                "Devices": {
                                    "description": "A list of devices to add to the container.",
                                    "type": "array",
                                    "items": {
                                        "description": "A device mapping between the host and container",
                                        "example": {
                                            "CgroupPermissions": "mrw",
                                            "PathInContainer": "/dev/deviceName",
                                            "PathOnHost": "/dev/deviceName"
                                        },
                                        "type": "object",
                                        "properties": {
                                            "CgroupPermissions": {
                                                "type": "string"
                                            },
                                            "PathInContainer": {
                                                "type": "string"
                                            },
                                            "PathOnHost": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                },
                                "DiskQuota": {
                                    "description": "Disk limit (in bytes).",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "IOMaximumBandwidth": {
                                    "description": "Maximum IO in bytes per second for the container system drive (Windows only)",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "IOMaximumIOps": {
                                    "description": "Maximum IOps for the container system drive (Windows only)",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "KernelMemory": {
                                    "description": "Kernel memory limit in bytes.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "Memory": {
                                    "default": 0,
                                    "description": "Memory limit in bytes.",
                                    "type": "integer"
                                },
                                "MemoryReservation": {
                                    "description": "Memory soft limit in bytes.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "MemorySwap": {
                                    "description": "Total memory limit (memory + swap). Set as `-1` to enable unlimited swap.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "MemorySwappiness": {
                                    "description": "Tune a container's memory swappiness behavior. Accepts an integer between 0 and 100.",
                                    "format": "int64",
                                    "maximum": 100,
                                    "minimum": 0,
                                    "type": "integer"
                                },
                                "NanoCPUs": {
                                    "description": "CPU quota in units of 10<sup>-9</sup> CPUs.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "OomKillDisable": {
                                    "description": "Disable OOM Killer for the container.",
                                    "type": "boolean"
                                },
                                "PidsLimit": {
                                    "description": "Tune a container's pids limit. Set -1 for unlimited.",
                                    "format": "int64",
                                    "type": "integer"
                                },
                                "Ulimits": {
                                    "description": "A list of resource limits to set in the container. For example: `{\"Name\": \"nofile\", \"Soft\": 1024, \"Hard\": 2048}`\"\n",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "Hard": {
                                                "description": "Hard limit",
                                                "type": "integer"
                                            },
                                            "Name": {
                                                "description": "Name of ulimit",
                                                "type": "string"
                                            },
                                            "Soft": {
                                                "description": "Soft limit",
                                                "type": "integer"
                                            }
                                        }
                                    }
                                },
                                "AutoRemove": {
                                    "description": "Automatically remove the container when the container's process exits. This has no effect if `RestartPolicy` is set.",
                                    "type": "boolean"
                                },
                                "Binds": {
                                    "description": "A list of volume bindings for this container. Each volume binding is a string in one of these forms:\n\n- `host-src:container-dest` to bind-mount a host path into the container. Both `host-src`, and `container-dest` must be an _absolute_ path.\n- `host-src:container-dest:ro` to make the bind mount read-only inside the container. Both `host-src`, and `container-dest` must be an _absolute_ path.\n- `volume-name:container-dest` to bind-mount a volume managed by a volume driver into the container. `container-dest` must be an _absolute_ path.\n- `volume-name:container-dest:ro` to mount the volume read-only inside the container.  `container-dest` must be an _absolute_ path.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "CapAdd": {
                                    "description": "A list of kernel capabilities to add to the container.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "CapDrop": {
                                    "description": "A list of kernel capabilities to drop from the container.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "Cgroup": {
                                    "description": "Cgroup to use for the container.",
                                    "type": "string"
                                },
                                "ConsoleSize": {
                                    "description": "Initial console size, as an `[height, width]` array. (Windows only)",
                                    "maxItems": 2,
                                    "minItems": 2,
                                    "type": "array",
                                    "items": {
                                        "minimum": 0,
                                        "type": "integer"
                                    }
                                },
                                "ContainerIDFile": {
                                    "description": "Path to a file where the container ID is written",
                                    "type": "string"
                                },
                                "Dns": {
                                    "description": "A list of DNS servers for the container to use.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "DnsOptions": {
                                    "description": "A list of DNS options.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "DnsSearch": {
                                    "description": "A list of DNS search domains.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "ExtraHosts": {
                                    "description": "A list of hostnames/IP mappings to add to the container's `/etc/hosts` file. Specified in the form `[\"hostname:IP\"]`.\n",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "GroupAdd": {
                                    "description": "A list of additional groups that the container process will run as.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "IpcMode": {
                                    "description": "IPC sharing mode for the container. Possible values are:\n\n- `\"none\"`: own private IPC namespace, with /dev/shm not mounted\n- `\"private\"`: own private IPC namespace\n- `\"shareable\"`: own private IPC namespace, with a possibility to share it with other containers\n- `\"container:<name|id>\"`: join another (shareable) container's IPC namespace\n- `\"host\"`: use the host system's IPC namespace\n\nIf not specified, daemon default is used, which can either be `\"private\"`\nor `\"shareable\"`, depending on daemon version and configuration.\n",
                                    "type": "string"
                                },
                                "Isolation": {
                                    "description": "Isolation technology of the container. (Windows only)",
                                    "enum": [
                                        "default",
                                        "process",
                                        "hyperv"
                                    ],
                                    "type": "string"
                                },
                                "Links": {
                                    "description": "A list of links for the container in the form `container_name:alias`.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "LogConfig": {
                                    "description": "The logging configuration for this container",
                                    "type": "object",
                                    "properties": {
                                        "Config": {
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "string"
                                            }
                                        },
                                        "Type": {
                                            "enum": [
                                                "json-file",
                                                "syslog",
                                                "journald",
                                                "gelf",
                                                "fluentd",
                                                "awslogs",
                                                "splunk",
                                                "etwlogs",
                                                "none"
                                            ],
                                            "type": "string"
                                        }
                                    }
                                },
                                "Mounts": {
                                    "description": "Specification for mounts to be added to the container.",
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
                                "NetworkMode": {
                                    "description": "Network mode to use for this container. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name to which this container should connect to.",
                                    "type": "string"
                                },
                                "OomScoreAdj": {
                                    "description": "An integer value containing the score given to the container in order to tune OOM killer preferences.",
                                    "example": 500,
                                    "type": "integer"
                                },
                                "PidMode": {
                                    "description": "Set the PID (Process) Namespace mode for the container. It can be either:\n\n- `\"container:<name|id>\"`: joins another container's PID namespace\n- `\"host\"`: use the host's PID namespace inside the container\n",
                                    "type": "string"
                                },
                                "PortBindings": {
                                    "description": "A map of exposed container ports and the host port they should map to.",
                                    "type": "object",
                                    "additionalProperties": {
                                        "type": "object",
                                        "properties": {
                                            "HostIp": {
                                                "description": "The host IP address",
                                                "type": "string"
                                            },
                                            "HostPort": {
                                                "description": "The host port number, as a string",
                                                "type": "string"
                                            }
                                        }
                                    }
                                },
                                "Privileged": {
                                    "description": "Gives the container full access to the host.",
                                    "type": "boolean"
                                },
                                "PublishAllPorts": {
                                    "description": "Allocates a random host port for all of a container's exposed ports.",
                                    "type": "boolean"
                                },
                                "ReadonlyRootfs": {
                                    "description": "Mount the container's root filesystem as read only.",
                                    "type": "boolean"
                                },
                                "RestartPolicy": {
                                    "description": "The behavior to apply when the container exits. The default is not to restart.\n\nAn ever increasing delay (double the previous delay, starting at 100ms) is added before each restart to prevent flooding the server.\n",
                                    "type": "object",
                                    "properties": {
                                        "MaximumRetryCount": {
                                            "description": "If `on-failure` is used, the number of times to retry before giving up",
                                            "type": "integer"
                                        },
                                        "Name": {
                                            "description": "- Empty string means not to restart\n- `always` Always restart\n- `unless-stopped` Restart always except when the user has manually stopped the container\n- `on-failure` Restart only when the container exit code is non-zero\n",
                                            "enum": [
                                                "",
                                                "always",
                                                "unless-stopped",
                                                "on-failure"
                                            ],
                                            "type": "string"
                                        }
                                    }
                                },
                                "Runtime": {
                                    "description": "Runtime to use with this container.",
                                    "type": "string"
                                },
                                "SecurityOpt": {
                                    "description": "A list of string values to customize labels for MLS systems, such as SELinux.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "ShmSize": {
                                    "description": "Size of `/dev/shm` in bytes. If omitted, the system uses 64MB.",
                                    "minimum": 0,
                                    "type": "integer"
                                },
                                "StorageOpt": {
                                    "description": "Storage driver options for this container, in the form `{\"size\": \"120G\"}`.\n",
                                    "type": "object",
                                    "additionalProperties": {
                                        "type": "string"
                                    }
                                },
                                "Sysctls": {
                                    "description": "A list of kernel parameters (sysctls) to set in the container. For example: `{\"net.ipv4.ip_forward\": \"1\"}`\n",
                                    "type": "object",
                                    "additionalProperties": {
                                        "type": "string"
                                    }
                                },
                                "Tmpfs": {
                                    "description": "A map of container directories which should be replaced by tmpfs mounts, and their corresponding mount options. For example: `{ \"/run\": \"rw,noexec,nosuid,size=65536k\" }`.\n",
                                    "type": "object",
                                    "additionalProperties": {
                                        "type": "string"
                                    }
                                },
                                "UTSMode": {
                                    "description": "UTS namespace to use for the container.",
                                    "type": "string"
                                },
                                "UsernsMode": {
                                    "description": "Sets the usernamespace mode for the container when usernamespace remapping option is enabled.",
                                    "type": "string"
                                },
                                "VolumeDriver": {
                                    "description": "Driver that this container uses to mount volumes.",
                                    "type": "string"
                                },
                                "VolumesFrom": {
                                    "description": "A list of volumes to inherit from another container, specified in the form `<container name>[:<ro|rw>]`.",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        "NetworkingConfig": {
                            "description": "This container's networking configuration.",
                            "type": "object",
                            "properties": {
                                "EndpointsConfig": {
                                    "description": "A mapping of network name to endpoint configuration for that network.",
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
        "201": {
            "body": {
                "application/json": {
                    "schema": {
                        "required": [
                            "Id",
                            "Warnings"
                        ],
                        "type": "object",
                        "properties": {
                            "Id": {
                                "description": "The ID of the created container",
                                "nullable": false,
                                "type": "string"
                            },
                            "Warnings": {
                                "description": "Warnings encountered when creating the container",
                                "nullable": false,
                                "type": "array",
                                "items": {
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
        "409": {
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
