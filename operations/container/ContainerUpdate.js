module.exports = {
    "version": "1.33",
    "operationId": "ContainerUpdate",
    "path": "/containers/{id}/update",
    "method": "post",
    "description": "Change various configuration options of a container without having to recreate it.",
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
                        "description": "ID or name of the container"
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
            "description": "ID or name of the container"
        }
    },
    "requestBody": {
        "isRequired": true,
        "description": null,
        "content": {
            "application/json": {
                "schema": {
                    "description": "A container's resources (cgroups config, ulimits, etc)",
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
        "200": {
            "body": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "Warnings": {
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