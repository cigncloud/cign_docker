module.exports = {
    "version": "1.33",
    "operationId": "SystemEvents",
    "path": "/events",
    "method": "get",
    "description": "Stream real-time events from the server.\n\nVarious objects within Docker report events when something happens to them.\n\nContainers report these events: `attach`, `commit`, `copy`, `create`, `destroy`, `detach`, `die`, `exec_create`, `exec_detach`, `exec_start`, `export`, `health_status`, `kill`, `oom`, `pause`, `rename`, `resize`, `restart`, `start`, `stop`, `top`, `unpause`, and `update`\n\nImages report these events: `delete`, `import`, `load`, `pull`, `push`, `save`, `tag`, and `untag`\n\nVolumes report these events: `create`, `mount`, `unmount`, and `destroy`\n\nNetworks report these events: `create`, `connect`, `disconnect`, `destroy`, `update`, and `remove`\n\nThe Docker daemon reports these events: `reload`\n\nServices report these events: `create`, `update`, and `remove`\n\nNodes report these events: `create`, `update`, and `remove`\n\nSecrets report these events: `create`, `update`, and `remove`\n\nConfigs report these events: `create`, `update`, and `remove`\n",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "since": {
                        "type": "string",
                        "description": "Show events created since this timestamp then stream new events."
                    },
                    "until": {
                        "type": "string",
                        "description": "Show events created until this timestamp then stop streaming."
                    },
                    "filters": {
                        "type": "string",
                        "description": "A JSON encoded value of filters (a `map[string][]string`) to process on the event list. Available filters:\n\n- `config=<string>` config name or ID\n- `container=<string>` container name or ID\n- `daemon=<string>` daemon name or ID\n- `event=<string>` event type\n- `image=<string>` image name or ID\n- `label=<string>` image or container label\n- `network=<string>` network name or ID\n- `node=<string>` node ID\n- `plugin`=<string> plugin name or ID\n- `scope`＝<string> local or swarm\n- `secret=<string>` secret name or ID\n- `service=<string>` service name or ID\n- `type=<string>` object to filter by, one of `container`, `image`, `volume`, `network`, `daemon`, `plugin`, `node`, `service`, `secret` or `config`\n- `volume=<string>` volume name\n"
                    }
                }
            },
            "encoding": {
                "since": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "until": {
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
            "description": "Show events created since this timestamp then stream new events."
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
                            "Action": {
                                "description": "The type of event",
                                "type": "string"
                            },
                            "Actor": {
                                "type": "object",
                                "properties": {
                                    "Attributes": {
                                        "description": "Various key/value attributes of the object, depending on its type",
                                        "type": "object",
                                        "additionalProperties": {
                                            "type": "string"
                                        }
                                    },
                                    "ID": {
                                        "description": "The ID of the object emitting the event",
                                        "type": "string"
                                    }
                                }
                            },
                            "Type": {
                                "description": "The type of object emitting the event",
                                "type": "string"
                            },
                            "time": {
                                "description": "Timestamp of event",
                                "type": "integer"
                            },
                            "timeNano": {
                                "description": "Timestamp of event, with nanosecond accuracy",
                                "format": "int64",
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