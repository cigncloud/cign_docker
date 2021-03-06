module.exports = {
    "version": "1.33",
    "operationId": "ImageGet",
    "path": "/images/{name}/get",
    "method": "get",
    "description": "Get a tarball containing all images and metadata for a repository.\n\nIf `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.\n\n### Image tarball format\n\nAn image tarball contains one directory per image layer (named using its long ID), each containing these files:\n\n- `VERSION`: currently `1.0` - the file format version\n- `json`: detailed layer information, similar to `docker inspect layer_id`\n- `layer.tar`: A tarfile containing the filesystem changes in this layer\n\nThe `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.\n\nIf the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.\n\n```json\n{\n  \"hello-world\": {\n    \"latest\": \"565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1\"\n  }\n}\n```\n",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "path": {
            "schema": {
                "type": "object",
                "required": [
                    "name"
                ],
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "Image name or ID"
                    }
                }
            },
            "encoding": {
                "name": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "Image name or ID"
        }
    },
    "requestBody": null,
    "responses": {
        "200": {
            "body": {
                "application/x-tar": {
                    "schema": {
                        "format": "binary",
                        "type": "string"
                    },
                    "encoding": {
                        ".": {
                            "contentType": "application/x-tar",
                            "format": "text"
                        }
                    },
                    "description": null
                }
            }
        },
        "500": {
            "body": {
                "application/x-tar": {
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
                            "contentType": "application/x-tar",
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