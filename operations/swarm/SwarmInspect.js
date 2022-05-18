module.exports = {
    "version": "1.33",
    "operationId": "SwarmInspect",
    "path": "/swarm",
    "method": "get",
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
                        "description": "ClusterInfo represents information about the swarm as is returned by the\n\"/info\" endpoint. Join-tokens are not included.\n",
                        "nullable": true,
                        "properties": {
                            "CreatedAt": {
                                "description": "Date and time at which the swarm was initialised in\n[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.\n",
                                "example": "2016-08-18T10:44:24.496525531Z",
                                "format": "dateTime",
                                "type": "string"
                            },
                            "ID": {
                                "description": "The ID of the swarm.",
                                "example": "abajmipo7b4xz5ip2nrla6b11",
                                "type": "string"
                            },
                            "RootRotationInProgress": {
                                "description": "Whether there is currently a root CA rotation in progress for the swarm",
                                "example": false,
                                "type": "boolean"
                            },
                            "Spec": {
                                "description": "User modifiable swarm configuration.",
                                "type": "object",
                                "properties": {
                                    "CAConfig": {
                                        "description": "CA configuration.",
                                        "nullable": true,
                                        "type": "object",
                                        "properties": {
                                            "ExternalCAs": {
                                                "description": "Configuration for forwarding signing requests to an external certificate authority.",
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "CACert": {
                                                            "description": "The root CA certificate (in PEM format) this external CA uses to issue TLS certificates (assumed to be to the current swarm root CA certificate if not provided).",
                                                            "type": "string"
                                                        },
                                                        "Options": {
                                                            "description": "An object with key/value pairs that are interpreted as protocol-specific options for the external CA driver.",
                                                            "type": "object",
                                                            "additionalProperties": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "Protocol": {
                                                            "default": "cfssl",
                                                            "description": "Protocol for communication with the external CA (currently only `cfssl` is supported).",
                                                            "enum": [
                                                                "cfssl"
                                                            ],
                                                            "type": "string"
                                                        },
                                                        "URL": {
                                                            "description": "URL where certificate signing requests should be sent.",
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            },
                                            "ForceRotate": {
                                                "description": "An integer whose purpose is to force swarm to generate a new signing CA certificate and key, if none have been specified in `SigningCACert` and `SigningCAKey`",
                                                "format": "uint64",
                                                "type": "integer"
                                            },
                                            "NodeCertExpiry": {
                                                "description": "The duration node certificates are issued for.",
                                                "example": 7776000000000000,
                                                "format": "int64",
                                                "type": "integer"
                                            },
                                            "SigningCACert": {
                                                "description": "The desired signing CA certificate for all swarm node TLS leaf certificates, in PEM format.",
                                                "type": "string"
                                            },
                                            "SigningCAKey": {
                                                "description": "The desired signing CA key for all swarm node TLS leaf certificates, in PEM format.",
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "Dispatcher": {
                                        "description": "Dispatcher configuration.",
                                        "nullable": true,
                                        "type": "object",
                                        "properties": {
                                            "HeartbeatPeriod": {
                                                "description": "The delay for an agent to send a heartbeat to the dispatcher.",
                                                "example": 5000000000,
                                                "format": "int64",
                                                "type": "integer"
                                            }
                                        }
                                    },
                                    "EncryptionConfig": {
                                        "description": "Parameters related to encryption-at-rest.",
                                        "type": "object",
                                        "properties": {
                                            "AutoLockManagers": {
                                                "description": "If set, generate a key and use it to lock data stored on the managers.",
                                                "example": false,
                                                "type": "boolean"
                                            }
                                        }
                                    },
                                    "Labels": {
                                        "description": "User-defined key/value metadata.",
                                        "example": {
                                            "com.example.corp.department": "engineering",
                                            "com.example.corp.type": "production"
                                        },
                                        "type": "object",
                                        "additionalProperties": {
                                            "type": "string"
                                        }
                                    },
                                    "Name": {
                                        "description": "Name of the swarm.",
                                        "example": "default",
                                        "type": "string"
                                    },
                                    "Orchestration": {
                                        "description": "Orchestration configuration.",
                                        "nullable": true,
                                        "type": "object",
                                        "properties": {
                                            "TaskHistoryRetentionLimit": {
                                                "description": "The number of historic tasks to keep per instance or node. If negative, never remove completed or failed tasks.",
                                                "example": 10,
                                                "format": "int64",
                                                "type": "integer"
                                            }
                                        }
                                    },
                                    "Raft": {
                                        "description": "Raft configuration.",
                                        "type": "object",
                                        "properties": {
                                            "ElectionTick": {
                                                "description": "The number of ticks that a follower will wait for a message from the leader before becoming a candidate and starting an election. `ElectionTick` must be greater than `HeartbeatTick`.\n\nA tick currently defaults to one second, so these translate directly to seconds currently, but this is NOT guaranteed.\n",
                                                "example": 3,
                                                "type": "integer"
                                            },
                                            "HeartbeatTick": {
                                                "description": "The number of ticks between heartbeats. Every HeartbeatTick ticks, the leader will send a heartbeat to the followers.\n\nA tick currently defaults to one second, so these translate directly to seconds currently, but this is NOT guaranteed.\n",
                                                "example": 1,
                                                "type": "integer"
                                            },
                                            "KeepOldSnapshots": {
                                                "description": "The number of snapshots to keep beyond the current snapshot.",
                                                "format": "uint64",
                                                "type": "integer"
                                            },
                                            "LogEntriesForSlowFollowers": {
                                                "description": "The number of log entries to keep around to sync up slow followers after a snapshot is created.",
                                                "example": 500,
                                                "format": "uint64",
                                                "type": "integer"
                                            },
                                            "SnapshotInterval": {
                                                "description": "The number of log entries between snapshots.",
                                                "example": 10000,
                                                "format": "uint64",
                                                "type": "integer"
                                            }
                                        }
                                    },
                                    "TaskDefaults": {
                                        "description": "Defaults for creating tasks in this cluster.",
                                        "type": "object",
                                        "properties": {
                                            "LogDriver": {
                                                "description": "The log driver to use for tasks created in the orchestrator if\nunspecified by a service.\n\nUpdating this value only affects new tasks. Existing tasks continue\nto use their previously configured log driver until recreated.\n",
                                                "type": "object",
                                                "properties": {
                                                    "Name": {
                                                        "description": "The log driver to use as a default for new tasks.\n",
                                                        "example": "json-file",
                                                        "type": "string"
                                                    },
                                                    "Options": {
                                                        "description": "Driver-specific options for the selectd log driver, specified\nas key/value pairs.\n",
                                                        "example": {
                                                            "max-file": "10",
                                                            "max-size": "100m"
                                                        },
                                                        "type": "object",
                                                        "additionalProperties": {
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            }
                                        }
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
                            },
                            "UpdatedAt": {
                                "description": "Date and time at which the swarm was last updated in\n[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.\n",
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
                            },
                            "JoinTokens": {
                                "description": "JoinTokens contains the tokens workers and managers need to join the swarm.\n",
                                "type": "object",
                                "properties": {
                                    "Manager": {
                                        "description": "The token managers can use to join the swarm.\n",
                                        "example": "SWMTKN-1-3pu6hszjas19xyp7ghgosyx9k8atbfcr8p2is99znpy26u2lkl-7p73s1dx5in4tatdymyhg9hu2",
                                        "type": "string"
                                    },
                                    "Worker": {
                                        "description": "The token workers can use to join the swarm.\n",
                                        "example": "SWMTKN-1-3pu6hszjas19xyp7ghgosyx9k8atbfcr8p2is99znpy26u2lkl-1awxwuwd3z9j1z3puu7rcgdbx",
                                        "type": "string"
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
                        "description": "ClusterInfo represents information about the swarm as is returned by the\n\"/info\" endpoint. Join-tokens are not included.\n",
                        "nullable": true,
                        "properties": {
                            "CreatedAt": {
                                "description": "Date and time at which the swarm was initialised in\n[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.\n",
                                "example": "2016-08-18T10:44:24.496525531Z",
                                "format": "dateTime",
                                "type": "string"
                            },
                            "ID": {
                                "description": "The ID of the swarm.",
                                "example": "abajmipo7b4xz5ip2nrla6b11",
                                "type": "string"
                            },
                            "RootRotationInProgress": {
                                "description": "Whether there is currently a root CA rotation in progress for the swarm",
                                "example": false,
                                "type": "boolean"
                            },
                            "Spec": {
                                "description": "User modifiable swarm configuration.",
                                "type": "object",
                                "properties": {
                                    "CAConfig": {
                                        "description": "CA configuration.",
                                        "nullable": true,
                                        "type": "object",
                                        "properties": {
                                            "ExternalCAs": {
                                                "description": "Configuration for forwarding signing requests to an external certificate authority.",
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "CACert": {
                                                            "description": "The root CA certificate (in PEM format) this external CA uses to issue TLS certificates (assumed to be to the current swarm root CA certificate if not provided).",
                                                            "type": "string"
                                                        },
                                                        "Options": {
                                                            "description": "An object with key/value pairs that are interpreted as protocol-specific options for the external CA driver.",
                                                            "type": "object",
                                                            "additionalProperties": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "Protocol": {
                                                            "default": "cfssl",
                                                            "description": "Protocol for communication with the external CA (currently only `cfssl` is supported).",
                                                            "enum": [
                                                                "cfssl"
                                                            ],
                                                            "type": "string"
                                                        },
                                                        "URL": {
                                                            "description": "URL where certificate signing requests should be sent.",
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            },
                                            "ForceRotate": {
                                                "description": "An integer whose purpose is to force swarm to generate a new signing CA certificate and key, if none have been specified in `SigningCACert` and `SigningCAKey`",
                                                "format": "uint64",
                                                "type": "integer"
                                            },
                                            "NodeCertExpiry": {
                                                "description": "The duration node certificates are issued for.",
                                                "example": 7776000000000000,
                                                "format": "int64",
                                                "type": "integer"
                                            },
                                            "SigningCACert": {
                                                "description": "The desired signing CA certificate for all swarm node TLS leaf certificates, in PEM format.",
                                                "type": "string"
                                            },
                                            "SigningCAKey": {
                                                "description": "The desired signing CA key for all swarm node TLS leaf certificates, in PEM format.",
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "Dispatcher": {
                                        "description": "Dispatcher configuration.",
                                        "nullable": true,
                                        "type": "object",
                                        "properties": {
                                            "HeartbeatPeriod": {
                                                "description": "The delay for an agent to send a heartbeat to the dispatcher.",
                                                "example": 5000000000,
                                                "format": "int64",
                                                "type": "integer"
                                            }
                                        }
                                    },
                                    "EncryptionConfig": {
                                        "description": "Parameters related to encryption-at-rest.",
                                        "type": "object",
                                        "properties": {
                                            "AutoLockManagers": {
                                                "description": "If set, generate a key and use it to lock data stored on the managers.",
                                                "example": false,
                                                "type": "boolean"
                                            }
                                        }
                                    },
                                    "Labels": {
                                        "description": "User-defined key/value metadata.",
                                        "example": {
                                            "com.example.corp.department": "engineering",
                                            "com.example.corp.type": "production"
                                        },
                                        "type": "object",
                                        "additionalProperties": {
                                            "type": "string"
                                        }
                                    },
                                    "Name": {
                                        "description": "Name of the swarm.",
                                        "example": "default",
                                        "type": "string"
                                    },
                                    "Orchestration": {
                                        "description": "Orchestration configuration.",
                                        "nullable": true,
                                        "type": "object",
                                        "properties": {
                                            "TaskHistoryRetentionLimit": {
                                                "description": "The number of historic tasks to keep per instance or node. If negative, never remove completed or failed tasks.",
                                                "example": 10,
                                                "format": "int64",
                                                "type": "integer"
                                            }
                                        }
                                    },
                                    "Raft": {
                                        "description": "Raft configuration.",
                                        "type": "object",
                                        "properties": {
                                            "ElectionTick": {
                                                "description": "The number of ticks that a follower will wait for a message from the leader before becoming a candidate and starting an election. `ElectionTick` must be greater than `HeartbeatTick`.\n\nA tick currently defaults to one second, so these translate directly to seconds currently, but this is NOT guaranteed.\n",
                                                "example": 3,
                                                "type": "integer"
                                            },
                                            "HeartbeatTick": {
                                                "description": "The number of ticks between heartbeats. Every HeartbeatTick ticks, the leader will send a heartbeat to the followers.\n\nA tick currently defaults to one second, so these translate directly to seconds currently, but this is NOT guaranteed.\n",
                                                "example": 1,
                                                "type": "integer"
                                            },
                                            "KeepOldSnapshots": {
                                                "description": "The number of snapshots to keep beyond the current snapshot.",
                                                "format": "uint64",
                                                "type": "integer"
                                            },
                                            "LogEntriesForSlowFollowers": {
                                                "description": "The number of log entries to keep around to sync up slow followers after a snapshot is created.",
                                                "example": 500,
                                                "format": "uint64",
                                                "type": "integer"
                                            },
                                            "SnapshotInterval": {
                                                "description": "The number of log entries between snapshots.",
                                                "example": 10000,
                                                "format": "uint64",
                                                "type": "integer"
                                            }
                                        }
                                    },
                                    "TaskDefaults": {
                                        "description": "Defaults for creating tasks in this cluster.",
                                        "type": "object",
                                        "properties": {
                                            "LogDriver": {
                                                "description": "The log driver to use for tasks created in the orchestrator if\nunspecified by a service.\n\nUpdating this value only affects new tasks. Existing tasks continue\nto use their previously configured log driver until recreated.\n",
                                                "type": "object",
                                                "properties": {
                                                    "Name": {
                                                        "description": "The log driver to use as a default for new tasks.\n",
                                                        "example": "json-file",
                                                        "type": "string"
                                                    },
                                                    "Options": {
                                                        "description": "Driver-specific options for the selectd log driver, specified\nas key/value pairs.\n",
                                                        "example": {
                                                            "max-file": "10",
                                                            "max-size": "100m"
                                                        },
                                                        "type": "object",
                                                        "additionalProperties": {
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            }
                                        }
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
                            },
                            "UpdatedAt": {
                                "description": "Date and time at which the swarm was last updated in\n[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.\n",
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
                            },
                            "JoinTokens": {
                                "description": "JoinTokens contains the tokens workers and managers need to join the swarm.\n",
                                "type": "object",
                                "properties": {
                                    "Manager": {
                                        "description": "The token managers can use to join the swarm.\n",
                                        "example": "SWMTKN-1-3pu6hszjas19xyp7ghgosyx9k8atbfcr8p2is99znpy26u2lkl-7p73s1dx5in4tatdymyhg9hu2",
                                        "type": "string"
                                    },
                                    "Worker": {
                                        "description": "The token workers can use to join the swarm.\n",
                                        "example": "SWMTKN-1-3pu6hszjas19xyp7ghgosyx9k8atbfcr8p2is99znpy26u2lkl-1awxwuwd3z9j1z3puu7rcgdbx",
                                        "type": "string"
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