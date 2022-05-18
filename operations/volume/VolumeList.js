module.exports = {
    "version": "1.33",
    "operationId": "VolumeList",
    "path": "/volumes",
    "method": "get",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "query": {
            "schema": {
                "type": "object",
                "required": [],
                "properties": {
                    "filters": {
                        "format": "json",
                        "type": "string",
                        "description": "JSON encoded value of the filters (a `map[string][]string`) to\nprocess on the volumes list. Available filters:\n\n- `dangling=<boolean>` When set to `true` (or `1`), returns all\n   volumes that are not in use by a container. When set to `false`\n   (or `0`), only volumes that are in use by one or more\n   containers are returned.\n- `driver=<volume-driver-name>` Matches volumes based on their driver.\n- `label=<key>` or `label=<key>:<value>` Matches volumes based on\n   the presence of a `label` alone or a `label` and a value.\n- `name=<volume-name>` Matches all or part of a volume name.\n"
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
            "description": "JSON encoded value of the filters (a `map[string][]string`) to\nprocess on the volumes list. Available filters:\n\n- `dangling=<boolean>` When set to `true` (or `1`), returns all\n   volumes that are not in use by a container. When set to `false`\n   (or `0`), only volumes that are in use by one or more\n   containers are returned.\n- `driver=<volume-driver-name>` Matches volumes based on their driver.\n- `label=<key>` or `label=<key>:<value>` Matches volumes based on\n   the presence of a `label` alone or a `label` and a value.\n- `name=<volume-name>` Matches all or part of a volume name.\n"
        }
    },
    "requestBody": null,
    "responses": {
        "200": {
            "body": {
                "application/json": {
                    "schema": {
                        "required": [
                            "Volumes",
                            "Warnings"
                        ],
                        "type": "object",
                        "properties": {
                            "Volumes": {
                                "description": "List of volumes",
                                "nullable": false,
                                "type": "array",
                                "items": {
                                    "example": {
                                        "CreatedAt": "2016-06-07T20:31:11.853781916Z",
                                        "Driver": "custom",
                                        "Labels": {
                                            "com.example.some-label": "some-value",
                                            "com.example.some-other-label": "some-other-value"
                                        },
                                        "Mountpoint": "/var/lib/docker/volumes/tardis",
                                        "Name": "tardis",
                                        "Scope": "local",
                                        "Status": {
                                            "hello": "world"
                                        }
                                    },
                                    "required": [
                                        "Name",
                                        "Driver",
                                        "Mountpoint",
                                        "Labels",
                                        "Scope",
                                        "Options"
                                    ],
                                    "type": "object",
                                    "properties": {
                                        "CreatedAt": {
                                            "description": "Date/Time the volume was created.",
                                            "format": "dateTime",
                                            "type": "string"
                                        },
                                        "Driver": {
                                            "description": "Name of the volume driver used by the volume.",
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Labels": {
                                            "description": "User-defined key/value metadata.",
                                            "nullable": false,
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "string"
                                            }
                                        },
                                        "Mountpoint": {
                                            "description": "Mount path of the volume on the host.",
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Name": {
                                            "description": "Name of the volume.",
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Options": {
                                            "description": "The driver specific options used when creating the volume.",
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "string"
                                            }
                                        },
                                        "Scope": {
                                            "default": "local",
                                            "description": "The level at which the volume exists. Either `global` for cluster-wide, or `local` for machine level.",
                                            "enum": [
                                                "local",
                                                "global"
                                            ],
                                            "nullable": false,
                                            "type": "string"
                                        },
                                        "Status": {
                                            "description": "Low-level details about the volume, provided by the volume driver.\nDetails are returned as a map with key/value pairs:\n`{\"key\":\"value\",\"key2\":\"value2\"}`.\n\nThe `Status` field is optional, and is omitted if the volume driver\ndoes not support this feature.\n",
                                            "type": "object",
                                            "additionalProperties": {
                                                "type": "object"
                                            }
                                        },
                                        "UsageData": {
                                            "description": "Usage details about the volume. This information is used by the\n`GET /system/df` endpoint, and omitted in other endpoints.\n",
                                            "nullable": true,
                                            "required": [
                                                "Size",
                                                "RefCount"
                                            ],
                                            "type": "object",
                                            "properties": {
                                                "RefCount": {
                                                    "default": -1,
                                                    "description": "The number of containers referencing this volume. This field\nis set to `-1` if the reference-count is not available.\n",
                                                    "nullable": false,
                                                    "type": "integer"
                                                },
                                                "Size": {
                                                    "default": -1,
                                                    "description": "Amount of disk space used by the volume (in bytes). This information\nis only available for volumes created with the `\"local\"` volume\ndriver. For volumes created with other volume drivers, this field\nis set to `-1` (\"not available\")\n",
                                                    "nullable": false,
                                                    "type": "integer"
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "Warnings": {
                                "description": "Warnings that occurred when fetching the list of volumes",
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