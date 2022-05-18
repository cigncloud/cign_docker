module.exports = {
    "version": "1.33",
    "operationId": "VolumeCreate",
    "path": "/volumes/create",
    "method": "post",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": null,
    "requestBody": {
        "isRequired": true,
        "description": "Volume configuration",
        "content": {
            "application/json": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "Driver": {
                            "default": "local",
                            "description": "Name of the volume driver to use.",
                            "nullable": false,
                            "type": "string"
                        },
                        "DriverOpts": {
                            "description": "A mapping of driver options and values. These options are passed directly to the driver and are driver specific.",
                            "type": "object",
                            "additionalProperties": {
                                "type": "string"
                            }
                        },
                        "Labels": {
                            "description": "User-defined key/value metadata.",
                            "type": "object",
                            "additionalProperties": {
                                "type": "string"
                            }
                        },
                        "Name": {
                            "description": "The new volume's name. If not specified, Docker generates a name.",
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