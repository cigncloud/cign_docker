module.exports = {
    "version": "1.33",
    "operationId": "SwarmInit",
    "path": "/swarm/init",
    "method": "post",
    "security": null,
    "servers": "http://0.0.0.0/v1.33",
    "parameters": null,
    "requestBody": {
        "isRequired": true,
        "description": null,
        "content": {
            "application/json": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "AdvertiseAddr": {
                            "description": "Externally reachable address advertised to other nodes. This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the port number from the listen address is used. If `AdvertiseAddr` is not specified, it will be automatically detected when possible.",
                            "type": "string"
                        },
                        "DataPathAddr": {
                            "description": "Address or interface to use for data path traffic (format: `<ip|interface>`), for example,  `192.168.1.1`,\nor an interface, like `eth0`. If `DataPathAddr` is unspecified, the same address as `AdvertiseAddr`\nis used.\n\nThe `DataPathAddr` specifies the address that global scope network drivers will publish towards other\nnodes in order to reach the containers running on this node. Using this parameter it is possible to\nseparate the container data traffic from the management traffic of the cluster.\n",
                            "type": "string"
                        },
                        "ForceNewCluster": {
                            "description": "Force creation of a new swarm.",
                            "type": "boolean"
                        },
                        "ListenAddr": {
                            "description": "Listen address used for inter-manager communication, as well as determining the networking interface used for the VXLAN Tunnel Endpoint (VTEP). This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the default swarm listening port is used.",
                            "type": "string"
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
                        }
                    }
                },
                "encoding": {
                    ".": {
                        "contentType": "application/json",
                        "format": "text"
                    }
                }
            },
            "text/plain": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "AdvertiseAddr": {
                            "description": "Externally reachable address advertised to other nodes. This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the port number from the listen address is used. If `AdvertiseAddr` is not specified, it will be automatically detected when possible.",
                            "type": "string"
                        },
                        "DataPathAddr": {
                            "description": "Address or interface to use for data path traffic (format: `<ip|interface>`), for example,  `192.168.1.1`,\nor an interface, like `eth0`. If `DataPathAddr` is unspecified, the same address as `AdvertiseAddr`\nis used.\n\nThe `DataPathAddr` specifies the address that global scope network drivers will publish towards other\nnodes in order to reach the containers running on this node. Using this parameter it is possible to\nseparate the container data traffic from the management traffic of the cluster.\n",
                            "type": "string"
                        },
                        "ForceNewCluster": {
                            "description": "Force creation of a new swarm.",
                            "type": "boolean"
                        },
                        "ListenAddr": {
                            "description": "Listen address used for inter-manager communication, as well as determining the networking interface used for the VXLAN Tunnel Endpoint (VTEP). This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the default swarm listening port is used.",
                            "type": "string"
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
                        }
                    }
                },
                "encoding": {
                    ".": {
                        "contentType": "text/plain",
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
                        "description": "The node ID",
                        "type": "string"
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
                        "description": "The node ID",
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
        "400": {
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