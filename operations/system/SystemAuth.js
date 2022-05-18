module.exports = {
    "version": "1.33",
    "operationId": "SystemAuth",
    "path": "/auth",
    "method": "post",
    "description": "Validate credentials for a registry and, if available, get an identity token for accessing the registry without password.",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": null,
    "requestBody": {
        "isRequired": true,
        "description": "Authentication to check",
        "content": {
            "application/json": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "email": {
                            "type": "string"
                        },
                        "password": {
                            "type": "string"
                        },
                        "serveraddress": {
                            "type": "string"
                        },
                        "username": {
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
        "200": {
            "body": {
                "application/json": {
                    "schema": {
                        "required": [
                            "Status"
                        ],
                        "type": "object",
                        "properties": {
                            "IdentityToken": {
                                "description": "An opaque token used to authenticate a user after a successful login",
                                "nullable": false,
                                "type": "string"
                            },
                            "Status": {
                                "description": "The status of the authentication",
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
        "204": {},
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