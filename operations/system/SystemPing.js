module.exports = {
    "version": "1.33",
    "operationId": "SystemPing",
    "path": "/_ping",
    "method": "get",
    "description": "This is a dummy endpoint you can use to test if the server is accessible.",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": null,
    "requestBody": null,
    "responses": {
        "200": {
            "header": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "API-Version": {
                            "type": "string",
                            "description": "Max API Version the server supports"
                        },
                        "Docker-Experimental": {
                            "type": "boolean",
                            "description": "If the server is running with experimental mode enabled"
                        }
                    }
                }
            },
            "body": {
                "text/plain": {
                    "schema": {
                        "type": "string"
                    },
                    "encoding": {
                        ".": {
                            "contentType": "text/plain",
                            "format": "text"
                        }
                    },
                    "description": null
                }
            }
        },
        "500": {
            "body": {
                "text/plain": {
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
                            "contentType": "text/plain",
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