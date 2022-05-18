module.exports = {
    "version": "1.33",
    "operationId": "TaskLogs",
    "path": "/tasks/{id}/logs",
    "method": "get",
    "description": "Get `stdout` and `stderr` logs from a task.\n\n**Note**: This endpoint works only for services with the `json-file` or `journald` logging drivers.\n",
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
        },
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "details": {
                        "default": false,
                        "type": "boolean",
                        "description": "Show task context and extra details provided to logs."
                    },
                    "follow": {
                        "default": false,
                        "type": "boolean",
                        "description": "Return the logs as a stream.\n\nThis will return a `101` HTTP response with a `Connection: upgrade` header, then hijack the HTTP connection to send raw output. For more information about hijacking and the stream format, [see the documentation for the attach endpoint](#operation/ContainerAttach).\n"
                    },
                    "stdout": {
                        "default": false,
                        "type": "boolean",
                        "description": "Return logs from `stdout`"
                    },
                    "stderr": {
                        "default": false,
                        "type": "boolean",
                        "description": "Return logs from `stderr`"
                    },
                    "since": {
                        "default": 0,
                        "type": "integer",
                        "description": "Only return logs since this time, as a UNIX timestamp"
                    },
                    "timestamps": {
                        "default": false,
                        "type": "boolean",
                        "description": "Add timestamps to every log line"
                    },
                    "tail": {
                        "default": "all",
                        "type": "string",
                        "description": "Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines."
                    }
                }
            },
            "encoding": {
                "details": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "follow": {
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
                },
                "since": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "timestamps": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "tail": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Show task context and extra details provided to logs."
        }
    },
    "requestBody": null,
    "responses": {
        "101": {
            "body": {
                "application/json": {
                    "schema": {
                        "format": "binary",
                        "type": "string"
                    },
                    "encoding": {
                        ".": {
                            "contentType": "application/json",
                            "format": "text"
                        }
                    },
                    "description": null
                },
                "application/vnd.docker.raw-stream": {
                    "schema": {
                        "format": "binary",
                        "type": "string"
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
        "200": {
            "body": {
                "application/json": {
                    "schema": {
                        "type": "string"
                    },
                    "encoding": {
                        ".": {
                            "contentType": "application/json",
                            "format": "text"
                        }
                    },
                    "description": null
                },
                "application/vnd.docker.raw-stream": {
                    "schema": {
                        "type": "string"
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
        }
    },
    "callbacks": null
}