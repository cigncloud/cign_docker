module.exports = {
    "version": "1.33",
    "operationId": "ImageBuild",
    "path": "/build",
    "method": "post",
    "description": "Build an image from a tar archive with a `Dockerfile` in it.\n\nThe `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive's root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](https://docs.docker.com/engine/reference/builder/).\n\nThe Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output.\n\nThe build is canceled if the client drops the connection by quitting or being killed.\n",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "dockerfile": {
                        "default": "Dockerfile",
                        "type": "string",
                        "description": "Path within the build context to the `Dockerfile`. This is ignored if `remote` is specified and points to an external `Dockerfile`."
                    },
                    "t": {
                        "type": "string",
                        "description": "A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag the default `latest` value is assumed. You can provide several `t` parameters."
                    },
                    "extrahosts": {
                        "type": "string",
                        "description": "Extra hosts to add to /etc/hosts"
                    },
                    "remote": {
                        "type": "string",
                        "description": "A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called `Dockerfile` and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the `dockerfile` parameter is also specified, there must be a file with the corresponding path inside the tarball."
                    },
                    "q": {
                        "default": false,
                        "type": "boolean",
                        "description": "Suppress verbose build output."
                    },
                    "nocache": {
                        "default": false,
                        "type": "boolean",
                        "description": "Do not use the cache when building the image."
                    },
                    "cachefrom": {
                        "type": "string",
                        "description": "JSON array of images used for build cache resolution."
                    },
                    "pull": {
                        "type": "string",
                        "description": "Attempt to pull the image even if an older image exists locally."
                    },
                    "rm": {
                        "default": true,
                        "type": "boolean",
                        "description": "Remove intermediate containers after a successful build."
                    },
                    "forcerm": {
                        "default": false,
                        "type": "boolean",
                        "description": "Always remove intermediate containers, even upon failure."
                    },
                    "memory": {
                        "type": "integer",
                        "description": "Set memory limit for build."
                    },
                    "memswap": {
                        "type": "integer",
                        "description": "Total memory (memory + swap). Set as `-1` to disable swap."
                    },
                    "cpushares": {
                        "type": "integer",
                        "description": "CPU shares (relative weight)."
                    },
                    "cpusetcpus": {
                        "type": "string",
                        "description": "CPUs in which to allow execution (e.g., `0-3`, `0,1`)."
                    },
                    "cpuperiod": {
                        "type": "integer",
                        "description": "The length of a CPU period in microseconds."
                    },
                    "cpuquota": {
                        "type": "integer",
                        "description": "Microseconds of CPU time that the container can get in a CPU period."
                    },
                    "buildargs": {
                        "type": "integer",
                        "description": "JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the `Dockerfile` RUN instruction, or for variable expansion in other `Dockerfile` instructions. This is not meant for passing secret values. [Read more about the buildargs instruction.](https://docs.docker.com/engine/reference/builder/#arg)"
                    },
                    "shmsize": {
                        "type": "integer",
                        "description": "Size of `/dev/shm` in bytes. The size must be greater than 0. If omitted the system uses 64MB."
                    },
                    "squash": {
                        "type": "boolean",
                        "description": "Squash the resulting images layers into a single layer. *(Experimental release only.)*"
                    },
                    "labels": {
                        "type": "string",
                        "description": "Arbitrary key/value labels to set on the image, as a JSON map of string pairs."
                    },
                    "networkmode": {
                        "type": "string",
                        "description": "Sets the networking mode for the run commands during build. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name to which this container should connect to."
                    }
                }
            },
            "encoding": {
                "dockerfile": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "t": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "extrahosts": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "remote": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "q": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "nocache": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "cachefrom": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "pull": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "rm": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "forcerm": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "memory": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "memswap": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "cpushares": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "cpusetcpus": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "cpuperiod": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "cpuquota": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "buildargs": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "shmsize": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "squash": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "labels": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "networkmode": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Path within the build context to the `Dockerfile`. This is ignored if `remote` is specified and points to an external `Dockerfile`."
        },
        "header": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "Content-type": {
                        "default": "application/x-tar",
                        "enum": [
                            "application/x-tar"
                        ],
                        "type": "string",
                        "description": null
                    },
                    "X-Registry-Config": {
                        "type": "string",
                        "description": "This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.\n\nThe key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:\n\n```\n{\n  \"docker.example.com\": {\n    \"username\": \"janedoe\",\n    \"password\": \"hunter2\"\n  },\n  \"https://index.docker.io/v1/\": {\n    \"username\": \"mobydock\",\n    \"password\": \"conta1n3rize14\"\n  }\n}\n```\n\nOnly the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a `https://` prefix and a `/v1/` suffix even though Docker will prefer to use the v2 registry API.\n"
                    }
                }
            },
            "encoding": {
                "Content-type": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "X-Registry-Config": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": null
        }
    },
    "requestBody": {
        "isRequired": true,
        "description": "A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz.",
        "content": {
            "application/octet-stream": {
                "schema": {
                    "format": "binary",
                    "type": "string"
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