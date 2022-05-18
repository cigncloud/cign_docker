module.exports = {
    "version": "1.33",
    "operationId": "SystemVersion",
    "path": "/version",
    "method": "get",
    "description": "Returns the version of Docker that is running and various information about the system that Docker is running on.",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": null,
    "requestBody": null,
    "responses": {
        "200": {
            "body": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "ApiVersion": {
                                "type": "string"
                            },
                            "Arch": {
                                "type": "string"
                            },
                            "BuildTime": {
                                "type": "string"
                            },
                            "Experimental": {
                                "type": "boolean"
                            },
                            "GitCommit": {
                                "type": "string"
                            },
                            "GoVersion": {
                                "type": "string"
                            },
                            "KernelVersion": {
                                "type": "string"
                            },
                            "MinAPIVersion": {
                                "type": "string"
                            },
                            "Os": {
                                "type": "string"
                            },
                            "Version": {
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