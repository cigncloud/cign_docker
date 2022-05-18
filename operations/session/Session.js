module.exports = {
    "version": "1.33",
    "operationId": "Session",
    "path": "/session",
    "method": "post",
    "description": "Start a new interactive session with a server. Session allows server to call back to the client for advanced capabilities.\n\n> **Note**: This endpoint is *experimental* and only available if the daemon is started with experimental\n> features enabled. The specifications for this endpoint may still change in a future version of the API.\n\n### Hijacking\n\nThis endpoint hijacks the HTTP connection to HTTP2 transport that allows the client to expose gPRC services on that connection.\n\nFor example, the client sends this request to upgrade the connection:\n\n```\nPOST /session HTTP/1.1\nUpgrade: h2c\nConnection: Upgrade\n```\n\nThe Docker daemon will respond with a `101 UPGRADED` response follow with the raw stream:\n\n```\nHTTP/1.1 101 UPGRADED\nConnection: Upgrade\nUpgrade: h2c\n```\n",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": null,
    "requestBody": null,
    "responses": {
        "101": {},
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