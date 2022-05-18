module.exports = {
    "version": "1.33",
    "operationId": "ImagePrune",
    "path": "/images/prune",
    "method": "post",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "filters": {
                        "type": "string",
                        "description": "Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:\n\n- `dangling=<boolean>` When set to `true` (or `1`), prune only\n   unused *and* untagged images. When set to `false`\n   (or `0`), all unused images are pruned.\n- `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.\n- `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.\n"
                    }
                }
            },
            "encoding": {
                "filters": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:\n\n- `dangling=<boolean>` When set to `true` (or `1`), prune only\n   unused *and* untagged images. When set to `false`\n   (or `0`), all unused images are pruned.\n- `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.\n- `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.\n"
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
                            "ImagesDeleted": {
                                "description": "Images that were deleted",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "Deleted": {
                                            "description": "The image ID of an image that was deleted",
                                            "type": "string"
                                        },
                                        "Untagged": {
                                            "description": "The image ID of an image that was untagged",
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "SpaceReclaimed": {
                                "description": "Disk space reclaimed in bytes",
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