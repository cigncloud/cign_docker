module.exports = {
    "version": "1.33",
    "operationId": "ContainerAttach",
    "path": "/containers/{id}/attach",
    "method": "post",
    "description": "Attach to a container to read its output or send it input. You can attach to the same container multiple times and you can reattach to containers that have been detached.\n\nEither the `stream` or `logs` parameter must be `true` for this endpoint to do anything.\n\nSee [the documentation for the `docker attach` command](https://docs.docker.com/engine/reference/commandline/attach/) for more details.\n\n### Hijacking\n\nThis endpoint hijacks the HTTP connection to transport `stdin`, `stdout`, and `stderr` on the same socket.\n\nThis is the response from the daemon for an attach request:\n\n```\nHTTP/1.1 200 OK\nContent-Type: application/vnd.docker.raw-stream\n\n[STREAM]\n```\n\nAfter the headers and two new lines, the TCP connection can now be used for raw, bidirectional communication between the client and server.\n\nTo hint potential proxies about connection hijacking, the Docker client can also optionally send connection upgrade headers.\n\nFor example, the client sends this request to upgrade the connection:\n\n```\nPOST /containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1\nUpgrade: tcp\nConnection: Upgrade\n```\n\nThe Docker daemon will respond with a `101 UPGRADED` response, and will similarly follow with the raw stream:\n\n```\nHTTP/1.1 101 UPGRADED\nContent-Type: application/vnd.docker.raw-stream\nConnection: Upgrade\nUpgrade: tcp\n\n[STREAM]\n```\n\n### Stream format\n\nWhen the TTY setting is disabled in [`POST /containers/create`](#operation/ContainerCreate), the stream over the hijacked connected is multiplexed to separate out `stdout` and `stderr`. The stream consists of a series of frames, each containing a header and a payload.\n\nThe header contains the information which the stream writes (`stdout` or `stderr`). It also contains the size of the associated frame encoded in the last four bytes (`uint32`).\n\nIt is encoded on the first eight bytes like this:\n\n```go\nheader := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4}\n```\n\n`STREAM_TYPE` can be:\n\n- 0: `stdin` (is written on `stdout`)\n- 1: `stdout`\n- 2: `stderr`\n\n`SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size encoded as big endian.\n\nFollowing the header is the payload, which is the specified number of bytes of `STREAM_TYPE`.\n\nThe simplest way to implement this protocol is the following:\n\n1. Read 8 bytes.\n2. Choose `stdout` or `stderr` depending on the first byte.\n3. Extract the frame size from the last four bytes.\n4. Read the extracted size and output it on the correct output.\n5. Goto 1.\n\n### Stream format when using a TTY\n\nWhen the TTY setting is enabled in [`POST /containers/create`](#operation/ContainerCreate), the stream is not multiplexed. The data exchanged over the hijacked connection is simply the raw data from the process PTY and client's `stdin`.\n",
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
        },
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "detachKeys": {
                        "type": "string",
                        "description": "Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`."
                    },
                    "logs": {
                        "default": false,
                        "type": "boolean",
                        "description": "Replay previous logs from the container.\n\nThis is useful for attaching to a container that has started and you want to output everything since the container started.\n\nIf `stream` is also enabled, once all the previous output has been returned, it will seamlessly transition into streaming current output.\n"
                    },
                    "stream": {
                        "default": false,
                        "type": "boolean",
                        "description": "Stream attached streams from the time the request was made onwards"
                    },
                    "stdin": {
                        "default": false,
                        "type": "boolean",
                        "description": "Attach to `stdin`"
                    },
                    "stdout": {
                        "default": false,
                        "type": "boolean",
                        "description": "Attach to `stdout`"
                    },
                    "stderr": {
                        "default": false,
                        "type": "boolean",
                        "description": "Attach to `stderr`"
                    }
                }
            },
            "encoding": {
                "detachKeys": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "logs": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "stream": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "stdin": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "stdout": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "stderr": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`."
        }
    },
    "requestBody": null,
    "responses": {
        "101": {},
        "200": {},
        "400": {
            "body": {
                "application/vnd.docker.raw-stream": {
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
                            "contentType": "application/vnd.docker.raw-stream",
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
                    "encoding": {
                        ".": {}
                    },
                    "description": null
                },
                "application/vnd.docker.raw-stream": {
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
                            "contentType": "application/vnd.docker.raw-stream",
                            "format": "text"
                        }
                    },
                    "description": null
                }
            }
        },
        "500": {
            "body": {
                "application/vnd.docker.raw-stream": {
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
                            "contentType": "application/vnd.docker.raw-stream",
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