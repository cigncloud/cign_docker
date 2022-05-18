module.exports = {
    "version": "1.33",
    "operationId": "ImageSearch",
    "path": "/images/search",
    "method": "get",
    "description": "Search for an image on Docker Hub.",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "query": {
            "schema": {
                "type": "object",
                "required": [
                    "term"
                ],
                "properties": {
                    "term": {
                        "type": "string",
                        "description": "Term to search"
                    },
                    "limit": {
                        "type": "integer",
                        "description": "Maximum number of results to return"
                    },
                    "filters": {
                        "type": "string",
                        "description": "A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:\n\n- `is-automated=(true|false)`\n- `is-official=(true|false)`\n- `stars=<number>` Matches images that has at least 'number' stars.\n"
                    }
                }
            },
            "encoding": {
                "term": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                },
                "limit": {
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
            "description": "Term to search"
        }
    },
    "requestBody": null,
    "responses": {
        "200": {
            "body": {
                "application/json": {
                    "schema": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "description": {
                                    "type": "string"
                                },
                                "is_automated": {
                                    "type": "boolean"
                                },
                                "is_official": {
                                    "type": "boolean"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "star_count": {
                                    "type": "integer"
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