module.exports = {
    "version": "1.33",
    "operationId": "NodeInspect",
    "path": "/nodes/{id}",
    "method": "get",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": {
        "path": {
            "schema": {
                "type": "object",
                "required": [
                    "id"
                ],
                "properties": {
                    "id": {
                        "type": "string",
                        "description": "The ID or name of the node"
                    }
                }
            },
            "encoding": {
                "id": {
                    "contentType": "text/plain",
                    "format": "text",
                    "style": null,
                    "explode": false,
                    "allowReserverd": false,
                    "allowEmptyValue": false
                }
            },
            "description": "The ID or name of the node"
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
                            "CreatedAt": {
                                "description": "Date and time at which the node was added to the swarm in\n[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.\n",
                                "example": "2016-08-18T10:44:24.496525531Z",
                                "format": "dateTime",
                                "type": "string"
                            },
                            "Description": {
                                "description": "NodeDescription encapsulates the properties of the Node as reported by the\nagent.\n",
                                "type": "object",
                                "properties": {
                                    "Engine": {
                                        "description": "EngineDescription provides information about an engine.",
                                        "type": "object",
                                        "properties": {
                                            "EngineVersion": {
                                                "example": "17.06.0",
                                                "type": "string"
                                            },
                                            "Labels": {
                                                "example": {
                                                    "foo": "bar"
                                                },
                                                "type": "object",
                                                "additionalProperties": {
                                                    "type": "string"
                                                }
                                            },
                                            "Plugins": {
                                                "example": [
                                                    {
                                                        "Name": "awslogs",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "fluentd",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "gcplogs",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "gelf",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "journald",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "json-file",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "logentries",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "splunk",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "syslog",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "bridge",
                                                        "Type": "Network"
                                                    },
                                                    {
                                                        "Name": "host",
                                                        "Type": "Network"
                                                    },
                                                    {
                                                        "Name": "ipvlan",
                                                        "Type": "Network"
                                                    },
                                                    {
                                                        "Name": "macvlan",
                                                        "Type": "Network"
                                                    },
                                                    {
                                                        "Name": "null",
                                                        "Type": "Network"
                                                    },
                                                    {
                                                        "Name": "overlay",
                                                        "Type": "Network"
                                                    },
                                                    {
                                                        "Name": "local",
                                                        "Type": "Volume"
                                                    },
                                                    {
                                                        "Name": "localhost:5000/vieux/sshfs:latest",
                                                        "Type": "Volume"
                                                    },
                                                    {
                                                        "Name": "vieux/sshfs:latest",
                                                        "Type": "Volume"
                                                    }
                                                ],
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "Name": {
                                                            "type": "string"
                                                        },
                                                        "Type": {
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Hostname": {
                                        "example": "bf3067039e47",
                                        "type": "string"
                                    },
                                    "Platform": {
                                        "description": "Platform represents the platform (Arch/OS).\n",
                                        "type": "object",
                                        "properties": {
                                            "Architecture": {
                                                "description": "Architecture represents the hardware architecture (for example,\n`x86_64`).\n",
                                                "example": "x86_64",
                                                "type": "string"
                                            },
                                            "OS": {
                                                "description": "OS represents the Operating System (for example, `linux` or `windows`).\n",
                                                "example": "linux",
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "Resources": {
                                        "description": "An object describing the resources which can be advertised by a node and requested by a task",
                                        "type": "object",
                                        "properties": {
                                            "GenericResources": {
                                                "description": "User-defined resources can be either Integer resources (e.g, `SSD=3`) or String resources (e.g, `GPU=UUID1`)",
                                                "example": [
                                                    {
                                                        "DiscreteResourceSpec": {
                                                            "Kind": "SSD",
                                                            "Value": 3
                                                        }
                                                    },
                                                    {
                                                        "NamedResourceSpec": {
                                                            "Kind": "GPU",
                                                            "Value": "UUID1"
                                                        }
                                                    },
                                                    {
                                                        "NamedResourceSpec": {
                                                            "Kind": "GPU",
                                                            "Value": "UUID2"
                                                        }
                                                    }
                                                ],
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "DiscreteResourceSpec": {
                                                            "type": "object",
                                                            "properties": {
                                                                "Kind": {
                                                                    "type": "string"
                                                                },
                                                                "Value": {
                                                                    "format": "int64",
                                                                    "type": "integer"
                                                                }
                                                            }
                                                        },
                                                        "NamedResourceSpec": {
                                                            "type": "object",
                                                            "properties": {
                                                                "Kind": {
                                                                    "type": "string"
                                                                },
                                                                "Value": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "MemoryBytes": {
                                                "example": 8272408576,
                                                "format": "int64",
                                                "type": "integer"
                                            },
                                            "NanoCPUs": {
                                                "example": 4000000000,
                                                "format": "int64",
                                                "type": "integer"
                                            }
                                        }
                                    },
                                    "TLSInfo": {
                                        "description": "Information about the issuer of leaf TLS certificates and the trusted root CA certificate",
                                        "example": {
                                            "CertIssuerPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEmT9XIw9h1qoNclv9VeHmf/Vi6/uI2vFXdBveXTpcPjqx6i9wNazchk1XWV/dKTKvSh9xyGKmiIeRcE4OiMnJ1A==",
                                            "CertIssuerSubject": "MBMxETAPBgNVBAMTCHN3YXJtLWNh",
                                            "TrustRoot": "-----BEGIN CERTIFICATE-----\nMIIBajCCARCgAwIBAgIUbYqrLSOSQHoxD8CwG6Bi2PJi9c8wCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMTcwNDI0MjE0MzAwWhcNMzcwNDE5MjE0\nMzAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABJk/VyMPYdaqDXJb/VXh5n/1Yuv7iNrxV3Qb3l06XD46seovcDWs3IZNV1lf\n3Skyr0ofcchipoiHkXBODojJydSjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBRUXxuRcnFjDfR/RIAUQab8ZV/n4jAKBggqhkjO\nPQQDAgNIADBFAiAy+JTe6Uc3KyLCMiqGl2GyWGQqQDEcO3/YG36x7om65AIhAJvz\npxv6zFeVEkAEEkqIYi0omA9+CjanB/6Bz4n1uw8H\n-----END CERTIFICATE-----\n"
                                        },
                                        "type": "object",
                                        "properties": {
                                            "CertIssuerPublicKey": {
                                                "description": "The base64-url-safe-encoded raw public key bytes of the issuer",
                                                "type": "string"
                                            },
                                            "CertIssuerSubject": {
                                                "description": "The base64-url-safe-encoded raw subject bytes of the issuer",
                                                "type": "string"
                                            },
                                            "TrustRoot": {
                                                "description": "The root CA certificate(s) that are used to validate leaf TLS certificates",
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            },
                            "ID": {
                                "example": "24ifsmvkjbyhk",
                                "type": "string"
                            },
                            "ManagerStatus": {
                                "description": "ManagerStatus represents the status of a manager.\n\nIt provides the current status of a node's manager component, if the node\nis a manager.\n",
                                "nullable": true,
                                "type": "object",
                                "properties": {
                                    "Addr": {
                                        "description": "The IP address and port at which the manager is reachable.\n",
                                        "example": "10.0.0.46:2377",
                                        "type": "string"
                                    },
                                    "Leader": {
                                        "default": false,
                                        "example": true,
                                        "type": "boolean"
                                    },
                                    "Reachability": {
                                        "description": "Reachability represents the reachability of a node.",
                                        "enum": [
                                            "unknown",
                                            "unreachable",
                                            "reachable"
                                        ],
                                        "example": "reachable",
                                        "type": "string"
                                    }
                                }
                            },
                            "Spec": {
                                "example": {
                                    "Availability": "active",
                                    "Labels": {
                                        "foo": "bar"
                                    },
                                    "Name": "node-name",
                                    "Role": "manager"
                                },
                                "type": "object",
                                "properties": {
                                    "Availability": {
                                        "description": "Availability of the node.",
                                        "enum": [
                                            "active",
                                            "pause",
                                            "drain"
                                        ],
                                        "example": "active",
                                        "type": "string"
                                    },
                                    "Labels": {
                                        "description": "User-defined key/value metadata.",
                                        "type": "object",
                                        "additionalProperties": {
                                            "type": "string"
                                        }
                                    },
                                    "Name": {
                                        "description": "Name for the node.",
                                        "example": "my-node",
                                        "type": "string"
                                    },
                                    "Role": {
                                        "description": "Role of the node.",
                                        "enum": [
                                            "worker",
                                            "manager"
                                        ],
                                        "example": "manager",
                                        "type": "string"
                                    }
                                }
                            },
                            "Status": {
                                "description": "NodeStatus represents the status of a node.\n\nIt provides the current status of the node, as seen by the manager.\n",
                                "type": "object",
                                "properties": {
                                    "Addr": {
                                        "description": "IP address of the node.",
                                        "example": "172.17.0.2",
                                        "type": "string"
                                    },
                                    "Message": {
                                        "example": "",
                                        "type": "string"
                                    },
                                    "State": {
                                        "description": "NodeState represents the state of a node.",
                                        "enum": [
                                            "unknown",
                                            "down",
                                            "ready",
                                            "disconnected"
                                        ],
                                        "example": "ready",
                                        "type": "string"
                                    }
                                }
                            },
                            "UpdatedAt": {
                                "description": "Date and time at which the node was last updated in\n[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.\n",
                                "example": "2017-08-09T07:09:37.632105588Z",
                                "format": "dateTime",
                                "type": "string"
                            },
                            "Version": {
                                "description": "The version number of the object such as node, service, etc. This is needed to avoid conflicting writes.\nThe client must send the version number along with the modified specification when updating these objects.\nThis approach ensures safe concurrency and determinism in that the change on the object\nmay not be applied if the version number has changed from the last read. In other words,\nif two update requests specify the same base version, only one of the requests can succeed.\nAs a result, two separate update requests that happen at the same time will not\nunintentionally overwrite each other.\n",
                                "type": "object",
                                "properties": {
                                    "Index": {
                                        "example": 373531,
                                        "format": "uint64",
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
                },
                "text/plain": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "CreatedAt": {
                                "description": "Date and time at which the node was added to the swarm in\n[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.\n",
                                "example": "2016-08-18T10:44:24.496525531Z",
                                "format": "dateTime",
                                "type": "string"
                            },
                            "Description": {
                                "description": "NodeDescription encapsulates the properties of the Node as reported by the\nagent.\n",
                                "type": "object",
                                "properties": {
                                    "Engine": {
                                        "description": "EngineDescription provides information about an engine.",
                                        "type": "object",
                                        "properties": {
                                            "EngineVersion": {
                                                "example": "17.06.0",
                                                "type": "string"
                                            },
                                            "Labels": {
                                                "example": {
                                                    "foo": "bar"
                                                },
                                                "type": "object",
                                                "additionalProperties": {
                                                    "type": "string"
                                                }
                                            },
                                            "Plugins": {
                                                "example": [
                                                    {
                                                        "Name": "awslogs",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "fluentd",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "gcplogs",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "gelf",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "journald",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "json-file",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "logentries",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "splunk",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "syslog",
                                                        "Type": "Log"
                                                    },
                                                    {
                                                        "Name": "bridge",
                                                        "Type": "Network"
                                                    },
                                                    {
                                                        "Name": "host",
                                                        "Type": "Network"
                                                    },
                                                    {
                                                        "Name": "ipvlan",
                                                        "Type": "Network"
                                                    },
                                                    {
                                                        "Name": "macvlan",
                                                        "Type": "Network"
                                                    },
                                                    {
                                                        "Name": "null",
                                                        "Type": "Network"
                                                    },
                                                    {
                                                        "Name": "overlay",
                                                        "Type": "Network"
                                                    },
                                                    {
                                                        "Name": "local",
                                                        "Type": "Volume"
                                                    },
                                                    {
                                                        "Name": "localhost:5000/vieux/sshfs:latest",
                                                        "Type": "Volume"
                                                    },
                                                    {
                                                        "Name": "vieux/sshfs:latest",
                                                        "Type": "Volume"
                                                    }
                                                ],
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "Name": {
                                                            "type": "string"
                                                        },
                                                        "Type": {
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Hostname": {
                                        "example": "bf3067039e47",
                                        "type": "string"
                                    },
                                    "Platform": {
                                        "description": "Platform represents the platform (Arch/OS).\n",
                                        "type": "object",
                                        "properties": {
                                            "Architecture": {
                                                "description": "Architecture represents the hardware architecture (for example,\n`x86_64`).\n",
                                                "example": "x86_64",
                                                "type": "string"
                                            },
                                            "OS": {
                                                "description": "OS represents the Operating System (for example, `linux` or `windows`).\n",
                                                "example": "linux",
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "Resources": {
                                        "description": "An object describing the resources which can be advertised by a node and requested by a task",
                                        "type": "object",
                                        "properties": {
                                            "GenericResources": {
                                                "description": "User-defined resources can be either Integer resources (e.g, `SSD=3`) or String resources (e.g, `GPU=UUID1`)",
                                                "example": [
                                                    {
                                                        "DiscreteResourceSpec": {
                                                            "Kind": "SSD",
                                                            "Value": 3
                                                        }
                                                    },
                                                    {
                                                        "NamedResourceSpec": {
                                                            "Kind": "GPU",
                                                            "Value": "UUID1"
                                                        }
                                                    },
                                                    {
                                                        "NamedResourceSpec": {
                                                            "Kind": "GPU",
                                                            "Value": "UUID2"
                                                        }
                                                    }
                                                ],
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "DiscreteResourceSpec": {
                                                            "type": "object",
                                                            "properties": {
                                                                "Kind": {
                                                                    "type": "string"
                                                                },
                                                                "Value": {
                                                                    "format": "int64",
                                                                    "type": "integer"
                                                                }
                                                            }
                                                        },
                                                        "NamedResourceSpec": {
                                                            "type": "object",
                                                            "properties": {
                                                                "Kind": {
                                                                    "type": "string"
                                                                },
                                                                "Value": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "MemoryBytes": {
                                                "example": 8272408576,
                                                "format": "int64",
                                                "type": "integer"
                                            },
                                            "NanoCPUs": {
                                                "example": 4000000000,
                                                "format": "int64",
                                                "type": "integer"
                                            }
                                        }
                                    },
                                    "TLSInfo": {
                                        "description": "Information about the issuer of leaf TLS certificates and the trusted root CA certificate",
                                        "example": {
                                            "CertIssuerPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEmT9XIw9h1qoNclv9VeHmf/Vi6/uI2vFXdBveXTpcPjqx6i9wNazchk1XWV/dKTKvSh9xyGKmiIeRcE4OiMnJ1A==",
                                            "CertIssuerSubject": "MBMxETAPBgNVBAMTCHN3YXJtLWNh",
                                            "TrustRoot": "-----BEGIN CERTIFICATE-----\nMIIBajCCARCgAwIBAgIUbYqrLSOSQHoxD8CwG6Bi2PJi9c8wCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMTcwNDI0MjE0MzAwWhcNMzcwNDE5MjE0\nMzAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABJk/VyMPYdaqDXJb/VXh5n/1Yuv7iNrxV3Qb3l06XD46seovcDWs3IZNV1lf\n3Skyr0ofcchipoiHkXBODojJydSjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBRUXxuRcnFjDfR/RIAUQab8ZV/n4jAKBggqhkjO\nPQQDAgNIADBFAiAy+JTe6Uc3KyLCMiqGl2GyWGQqQDEcO3/YG36x7om65AIhAJvz\npxv6zFeVEkAEEkqIYi0omA9+CjanB/6Bz4n1uw8H\n-----END CERTIFICATE-----\n"
                                        },
                                        "type": "object",
                                        "properties": {
                                            "CertIssuerPublicKey": {
                                                "description": "The base64-url-safe-encoded raw public key bytes of the issuer",
                                                "type": "string"
                                            },
                                            "CertIssuerSubject": {
                                                "description": "The base64-url-safe-encoded raw subject bytes of the issuer",
                                                "type": "string"
                                            },
                                            "TrustRoot": {
                                                "description": "The root CA certificate(s) that are used to validate leaf TLS certificates",
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            },
                            "ID": {
                                "example": "24ifsmvkjbyhk",
                                "type": "string"
                            },
                            "ManagerStatus": {
                                "description": "ManagerStatus represents the status of a manager.\n\nIt provides the current status of a node's manager component, if the node\nis a manager.\n",
                                "nullable": true,
                                "type": "object",
                                "properties": {
                                    "Addr": {
                                        "description": "The IP address and port at which the manager is reachable.\n",
                                        "example": "10.0.0.46:2377",
                                        "type": "string"
                                    },
                                    "Leader": {
                                        "default": false,
                                        "example": true,
                                        "type": "boolean"
                                    },
                                    "Reachability": {
                                        "description": "Reachability represents the reachability of a node.",
                                        "enum": [
                                            "unknown",
                                            "unreachable",
                                            "reachable"
                                        ],
                                        "example": "reachable",
                                        "type": "string"
                                    }
                                }
                            },
                            "Spec": {
                                "example": {
                                    "Availability": "active",
                                    "Labels": {
                                        "foo": "bar"
                                    },
                                    "Name": "node-name",
                                    "Role": "manager"
                                },
                                "type": "object",
                                "properties": {
                                    "Availability": {
                                        "description": "Availability of the node.",
                                        "enum": [
                                            "active",
                                            "pause",
                                            "drain"
                                        ],
                                        "example": "active",
                                        "type": "string"
                                    },
                                    "Labels": {
                                        "description": "User-defined key/value metadata.",
                                        "type": "object",
                                        "additionalProperties": {
                                            "type": "string"
                                        }
                                    },
                                    "Name": {
                                        "description": "Name for the node.",
                                        "example": "my-node",
                                        "type": "string"
                                    },
                                    "Role": {
                                        "description": "Role of the node.",
                                        "enum": [
                                            "worker",
                                            "manager"
                                        ],
                                        "example": "manager",
                                        "type": "string"
                                    }
                                }
                            },
                            "Status": {
                                "description": "NodeStatus represents the status of a node.\n\nIt provides the current status of the node, as seen by the manager.\n",
                                "type": "object",
                                "properties": {
                                    "Addr": {
                                        "description": "IP address of the node.",
                                        "example": "172.17.0.2",
                                        "type": "string"
                                    },
                                    "Message": {
                                        "example": "",
                                        "type": "string"
                                    },
                                    "State": {
                                        "description": "NodeState represents the state of a node.",
                                        "enum": [
                                            "unknown",
                                            "down",
                                            "ready",
                                            "disconnected"
                                        ],
                                        "example": "ready",
                                        "type": "string"
                                    }
                                }
                            },
                            "UpdatedAt": {
                                "description": "Date and time at which the node was last updated in\n[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.\n",
                                "example": "2017-08-09T07:09:37.632105588Z",
                                "format": "dateTime",
                                "type": "string"
                            },
                            "Version": {
                                "description": "The version number of the object such as node, service, etc. This is needed to avoid conflicting writes.\nThe client must send the version number along with the modified specification when updating these objects.\nThis approach ensures safe concurrency and determinism in that the change on the object\nmay not be applied if the version number has changed from the last read. In other words,\nif two update requests specify the same base version, only one of the requests can succeed.\nAs a result, two separate update requests that happen at the same time will not\nunintentionally overwrite each other.\n",
                                "type": "object",
                                "properties": {
                                    "Index": {
                                        "example": 373531,
                                        "format": "uint64",
                                        "type": "integer"
                                    }
                                }
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
        },
        "404": {
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
                },
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
                },
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
        },
        "503": {
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
                },
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