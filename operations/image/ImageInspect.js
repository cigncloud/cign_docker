module.exports = {
    "version": "1.33",
    "operationId": "ImageInspect",
    "path": "/images/{name}/json",
    "method": "get",
    "description": "Return low-level information about an image.",
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
                        "description": "Image name or id"
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
            "description": "Image name or id"
        }
    },
    "requestBody": null,
    "responses": {
        "200": {
            "body": {
                "application/json": {
                    "schema": {
                        "required": [
                            "Id",
                            "Parent",
                            "Comment",
                            "Created",
                            "Container",
                            "DockerVersion",
                            "Author",
                            "Architecture",
                            "Os",
                            "Size",
                            "VirtualSize",
                            "GraphDriver",
                            "RootFS"
                        ],
                        "type": "object",
                        "properties": {
                            "Architecture": {
                                "nullable": false,
                                "type": "string"
                            },
                            "Author": {
                                "nullable": false,
                                "type": "string"
                            },
                            "Comment": {
                                "nullable": false,
                                "type": "string"
                            },
                            "Config": {
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
                                    }
                                }
                            },
                            "Container": {
                                "nullable": false,
                                "type": "string"
                            },
                            "ContainerConfig": {
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
                                    }
                                }
                            },
                            "Created": {
                                "nullable": false,
                                "type": "string"
                            },
                            "DockerVersion": {
                                "nullable": false,
                                "type": "string"
                            },
                            "GraphDriver": {
                                "description": "Information about a container's graph driver.",
                                "required": [
                                    "Name",
                                    "Data"
                                ],
                                "type": "object",
                                "properties": {
                                    "Data": {
                                        "nullable": false,
                                        "type": "object",
                                        "additionalProperties": {
                                            "type": "string"
                                        }
                                    },
                                    "Name": {
                                        "nullable": false,
                                        "type": "string"
                                    }
                                }
                            },
                            "Id": {
                                "nullable": false,
                                "type": "string"
                            },
                            "Metadata": {
                                "type": "object",
                                "properties": {
                                    "LastTagTime": {
                                        "format": "dateTime",
                                        "type": "string"
                                    }
                                }
                            },
                            "Os": {
                                "nullable": false,
                                "type": "string"
                            },
                            "OsVersion": {
                                "type": "string"
                            },
                            "Parent": {
                                "nullable": false,
                                "type": "string"
                            },
                            "RepoDigests": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "RepoTags": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "RootFS": {
                                "required": [
                                    "Type"
                                ],
                                "type": "object",
                                "properties": {
                                    "BaseLayer": {
                                        "type": "string"
                                    },
                                    "Layers": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "Type": {
                                        "nullable": false,
                                        "type": "string"
                                    }
                                }
                            },
                            "Size": {
                                "format": "int64",
                                "nullable": false,
                                "type": "integer"
                            },
                            "VirtualSize": {
                                "format": "int64",
                                "nullable": false,
                                "type": "integer"
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