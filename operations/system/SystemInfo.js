module.exports = {
    "version": "1.33",
    "operationId": "SystemInfo",
    "path": "/info",
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
                        "properties": {
                            "Architecture": {
                                "description": "Hardware architecture of the host, as returned by the Go runtime\n(`GOARCH`).\n\nA full list of possible values can be found in the [Go documentation](https://golang.org/doc/install/source#environment).\n",
                                "example": "x86_64",
                                "type": "string"
                            },
                            "BridgeNfIp6tables": {
                                "description": "Indicates if `bridge-nf-call-ip6tables` is available on the host.",
                                "example": true,
                                "type": "boolean"
                            },
                            "BridgeNfIptables": {
                                "description": "Indicates if `bridge-nf-call-iptables` is available on the host.",
                                "example": true,
                                "type": "boolean"
                            },
                            "CPUSet": {
                                "description": "Indicates if CPUsets (cpuset.cpus, cpuset.mems) are supported by the host.\n\nSee [cpuset(7)](https://www.kernel.org/doc/Documentation/cgroup-v1/cpusets.txt)\n",
                                "example": true,
                                "type": "boolean"
                            },
                            "CPUShares": {
                                "description": "Indicates if CPU Shares limiting is supported by the host.",
                                "example": true,
                                "type": "boolean"
                            },
                            "CgroupDriver": {
                                "default": "cgroupfs",
                                "description": "The driver to use for managing cgroups.\n",
                                "enum": [
                                    "cgroupfs",
                                    "systemd"
                                ],
                                "example": "cgroupfs",
                                "type": "string"
                            },
                            "ClusterAdvertise": {
                                "description": "The network endpoint that the Engine advertises for the purpose of\nnode discovery. ClusterAdvertise is a `host:port` combination on which\nthe daemon is reachable by other hosts.\n\n<p><br /></p>\n\n> **Note**: This field is only propagated when using standalone Swarm\n> mode, and overlay networking using an external k/v store. Overlay\n> networks with Swarm mode enabled use the built-in raft store, and\n> this field will be empty.\n",
                                "example": "node5.corp.example.com:8000",
                                "type": "string"
                            },
                            "ClusterStore": {
                                "description": "URL of the distributed storage backend.\n\n\nThe storage backend is used for multihost networking (to store\nnetwork and endpoint information) and by the node discovery mechanism.\n\n<p><br /></p>\n\n> **Note**: This field is only propagated when using standalone Swarm\n> mode, and overlay networking using an external k/v store. Overlay\n> networks with Swarm mode enabled use the built-in raft store, and\n> this field will be empty.\n",
                                "example": "consul://consul.corp.example.com:8600/some/path",
                                "type": "string"
                            },
                            "ContainerdCommit": {
                                "description": "Commit holds the Git-commit (SHA1) that a binary was built from, as\nreported in the version-string of external tools, such as `containerd`,\nor `runC`.\n",
                                "type": "object",
                                "properties": {
                                    "Expected": {
                                        "description": "Commit ID of external tool expected by dockerd as set at build time.\n",
                                        "example": "2d41c047c83e09a6d61d464906feb2a2f3c52aa4",
                                        "type": "string"
                                    },
                                    "ID": {
                                        "description": "Actual commit ID of external tool.",
                                        "example": "cfb82a876ecc11b5ca0977d1733adbe58599088a",
                                        "type": "string"
                                    }
                                }
                            },
                            "Containers": {
                                "description": "Total number of containers on the host.",
                                "example": 14,
                                "type": "integer"
                            },
                            "ContainersPaused": {
                                "description": "Number of containers with status `\"paused\"`.\n",
                                "example": 1,
                                "type": "integer"
                            },
                            "ContainersRunning": {
                                "description": "Number of containers with status `\"running\"`.\n",
                                "example": 3,
                                "type": "integer"
                            },
                            "ContainersStopped": {
                                "description": "Number of containers with status `\"stopped\"`.\n",
                                "example": 10,
                                "type": "integer"
                            },
                            "CpuCfsPeriod": {
                                "description": "Indicates if CPU CFS(Completely Fair Scheduler) period is supported by the host.",
                                "example": true,
                                "type": "boolean"
                            },
                            "CpuCfsQuota": {
                                "description": "Indicates if CPU CFS(Completely Fair Scheduler) quota is supported by the host.",
                                "example": true,
                                "type": "boolean"
                            },
                            "Debug": {
                                "description": "Indicates if the daemon is running in debug-mode / with debug-level logging enabled.",
                                "example": true,
                                "type": "boolean"
                            },
                            "DefaultRuntime": {
                                "default": "runc",
                                "description": "Name of the default OCI runtime that is used when starting containers.\n\nThe default can be overridden per-container at create time.\n",
                                "example": "runc",
                                "type": "string"
                            },
                            "DockerRootDir": {
                                "description": "Root directory of persistent Docker state.\n\nDefaults to `/var/lib/docker` on Linux, and `C:\\ProgramData\\docker`\non Windows.\n",
                                "example": "/var/lib/docker",
                                "type": "string"
                            },
                            "Driver": {
                                "description": "Name of the storage driver in use.",
                                "example": "overlay2",
                                "type": "string"
                            },
                            "DriverStatus": {
                                "description": "Information specific to the storage driver, provided as\n\"label\" / \"value\" pairs.\n\nThis information is provided by the storage driver, and formatted\nin a way consistent with the output of `docker info` on the command\nline.\n\n<p><br /></p>\n\n> **Note**: The information returned in this field, including the\n> formatting of values and labels, should not be considered stable,\n> and may change without notice.\n",
                                "example": [
                                    [
                                        "Backing Filesystem",
                                        "extfs"
                                    ],
                                    [
                                        "Supports d_type",
                                        "true"
                                    ],
                                    [
                                        "Native Overlay Diff",
                                        "true"
                                    ]
                                ],
                                "type": "array",
                                "items": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            },
                            "ExperimentalBuild": {
                                "description": "Indicates if experimental features are enabled on the daemon.\n",
                                "example": true,
                                "type": "boolean"
                            },
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
                            "HttpProxy": {
                                "description": "HTTP-proxy configured for the daemon. This value is obtained from the\n[`HTTP_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.\n\nContainers do not automatically inherit this configuration.\n",
                                "example": "http://user:pass@proxy.corp.example.com:8080",
                                "type": "string"
                            },
                            "HttpsProxy": {
                                "description": "HTTPS-proxy configured for the daemon. This value is obtained from the\n[`HTTPS_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.\n\nContainers do not automatically inherit this configuration.\n",
                                "example": "https://user:pass@proxy.corp.example.com:4443",
                                "type": "string"
                            },
                            "ID": {
                                "description": "Unique identifier of the daemon.\n\n<p><br /></p>\n\n> **Note**: The format of the ID itself is not part of the API, and\n> should not be considered stable.\n",
                                "example": "7TRN:IPZB:QYBB:VPBQ:UMPP:KARE:6ZNR:XE6T:7EWV:PKF4:ZOJD:TPYS",
                                "type": "string"
                            },
                            "IPv4Forwarding": {
                                "description": "Indicates IPv4 forwarding is enabled.",
                                "example": true,
                                "type": "boolean"
                            },
                            "Images": {
                                "description": "Total number of images on the host.\n\nBoth _tagged_ and _untagged_ (dangling) images are counted.\n",
                                "example": 508,
                                "type": "integer"
                            },
                            "IndexServerAddress": {
                                "default": "https://index.docker.io/v1/",
                                "description": "Address / URL of the index server that is used for image search,\nand as a default for user authentication for Docker Hub and Docker Cloud.\n",
                                "example": "https://index.docker.io/v1/",
                                "type": "string"
                            },
                            "InitBinary": {
                                "description": "Name and, optional, path of the the `docker-init` binary.\n\nIf the path is omitted, the daemon searches the host's `$PATH` for the\nbinary and uses the first result.\n",
                                "example": "docker-init",
                                "type": "string"
                            },
                            "InitCommit": {
                                "description": "Commit holds the Git-commit (SHA1) that a binary was built from, as\nreported in the version-string of external tools, such as `containerd`,\nor `runC`.\n",
                                "type": "object",
                                "properties": {
                                    "Expected": {
                                        "description": "Commit ID of external tool expected by dockerd as set at build time.\n",
                                        "example": "2d41c047c83e09a6d61d464906feb2a2f3c52aa4",
                                        "type": "string"
                                    },
                                    "ID": {
                                        "description": "Actual commit ID of external tool.",
                                        "example": "cfb82a876ecc11b5ca0977d1733adbe58599088a",
                                        "type": "string"
                                    }
                                }
                            },
                            "Isolation": {
                                "default": "default",
                                "description": "Represents the isolation technology to use as a default for containers.\nThe supported values are platform-specific.\n\nIf no isolation value is specified on daemon start, on Windows client,\nthe default is `hyperv`, and on Windows server, the default is `process`.\n\nThis option is currently not used on other platforms.\n",
                                "enum": [
                                    "default",
                                    "hyperv",
                                    "process"
                                ],
                                "type": "string"
                            },
                            "KernelMemory": {
                                "description": "Indicates if the host has kernel memory limit support enabled.",
                                "example": true,
                                "type": "boolean"
                            },
                            "KernelVersion": {
                                "description": "Kernel version of the host.\n\nOn Linux, this information obtained from `uname`. On Windows this\ninformation is queried from the <kbd>HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Microsoft\\\\Windows NT\\\\CurrentVersion\\\\</kbd>\nregistry value, for example _\"10.0 14393 (14393.1198.amd64fre.rs1_release_sec.170427-1353)\"_.\n",
                                "example": "4.9.38-moby",
                                "type": "string"
                            },
                            "Labels": {
                                "description": "User-defined labels (key/value metadata) as set on the daemon.\n\n<p><br /></p>\n\n> **Note**: When part of a Swarm, nodes can both have _daemon_ labels,\n> set through the daemon configuration, and _node_ labels, set from a\n> manager node in the Swarm. Node labels are not included in this\n> field. Node labels can be retrieved using the `/nodes/(id)` endpoint\n> on a manager node in the Swarm.\n",
                                "example": [
                                    "storage=ssd",
                                    "production"
                                ],
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "LiveRestoreEnabled": {
                                "default": false,
                                "description": "Indicates if live restore is enabled.\n\nIf enabled, containers are kept running when the daemon is shutdown\nor upon daemon start if running containers are detected.\n",
                                "example": false,
                                "type": "boolean"
                            },
                            "LoggingDriver": {
                                "description": "The logging driver to use as a default for new containers.\n",
                                "type": "string"
                            },
                            "MemTotal": {
                                "description": "Total amount of physical memory available on the host, in kilobytes (kB).\n",
                                "example": 2095882240,
                                "format": "int64",
                                "type": "integer"
                            },
                            "MemoryLimit": {
                                "description": "Indicates if the host has memory limit support enabled.",
                                "example": true,
                                "type": "boolean"
                            },
                            "NCPU": {
                                "description": "The number of logical CPUs usable by the daemon.\n\nThe number of available CPUs is checked by querying the operating\nsystem when the daemon starts. Changes to operating system CPU\nallocation after the daemon is started are not reflected.\n",
                                "example": 4,
                                "type": "integer"
                            },
                            "NEventsListener": {
                                "description": "Number of event listeners subscribed.",
                                "example": 30,
                                "type": "integer"
                            },
                            "NFd": {
                                "description": "The total number of file Descriptors in use by the daemon process.\n\nThis information is only returned if debug-mode is enabled.\n",
                                "example": 64,
                                "type": "integer"
                            },
                            "NGoroutines": {
                                "description": "The  number of goroutines that currently exist.\n\nThis information is only returned if debug-mode is enabled.\n",
                                "example": 174,
                                "type": "integer"
                            },
                            "Name": {
                                "description": "Hostname of the host.",
                                "example": "node5.corp.example.com",
                                "type": "string"
                            },
                            "NoProxy": {
                                "description": "Comma-separated list of domain extensions for which no proxy should be\nused. This value is obtained from the [`NO_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html)\nenvironment variable.\n\nContainers do not automatically inherit this configuration.\n",
                                "example": "*.local, 169.254/16",
                                "type": "string"
                            },
                            "OSType": {
                                "description": "Generic type of the operating system of the host, as returned by the\nGo runtime (`GOOS`).\n\nCurrently returned values are \"linux\" and \"windows\". A full list of\npossible values can be found in the [Go documentation](https://golang.org/doc/install/source#environment).\n",
                                "example": "linux",
                                "type": "string"
                            },
                            "OomKillDisable": {
                                "description": "Indicates if OOM killer disable is supported on the host.",
                                "type": "boolean"
                            },
                            "OperatingSystem": {
                                "description": "Name of the host's operating system, for example: \"Ubuntu 16.04.2 LTS\"\nor \"Windows Server 2016 Datacenter\"\n",
                                "example": "Alpine Linux v3.5",
                                "type": "string"
                            },
                            "Plugins": {
                                "description": "Available plugins per type.\n\n<p><br /></p>\n\n> **Note**: Only unmanaged (V1) plugins are included in this list.\n> V1 plugins are \"lazily\" loaded, and are not returned in this list\n> if there is no resource using the plugin.\n",
                                "type": "object",
                                "properties": {
                                    "Authorization": {
                                        "description": "Names of available authorization plugins.",
                                        "example": [
                                            "img-authz-plugin",
                                            "hbm"
                                        ],
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "Log": {
                                        "description": "Names of available logging-drivers, and logging-driver plugins.",
                                        "example": [
                                            "awslogs",
                                            "fluentd",
                                            "gcplogs",
                                            "gelf",
                                            "journald",
                                            "json-file",
                                            "logentries",
                                            "splunk",
                                            "syslog"
                                        ],
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "Network": {
                                        "description": "Names of available network-drivers, and network-driver plugins.",
                                        "example": [
                                            "bridge",
                                            "host",
                                            "ipvlan",
                                            "macvlan",
                                            "null",
                                            "overlay"
                                        ],
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "Volume": {
                                        "description": "Names of available volume-drivers, and network-driver plugins.",
                                        "example": [
                                            "local"
                                        ],
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "RegistryConfig": {
                                "description": "RegistryServiceConfig stores daemon registry services configuration.\n",
                                "nullable": true,
                                "type": "object",
                                "properties": {
                                    "AllowNondistributableArtifactsCIDRs": {
                                        "description": "List of IP ranges to which nondistributable artifacts can be pushed,\nusing the CIDR syntax [RFC 4632](https://tools.ietf.org/html/4632).\n\nSome images (for example, Windows base images) contain artifacts\nwhose distribution is restricted by license. When these images are\npushed to a registry, restricted artifacts are not included.\n\nThis configuration override this behavior, and enables the daemon to\npush nondistributable artifacts to all registries whose resolved IP\naddress is within the subnet described by the CIDR syntax.\n\nThis option is useful when pushing images containing\nnondistributable artifacts to a registry on an air-gapped network so\nhosts on that network can pull the images without connecting to\nanother server.\n\n> **Warning**: Nondistributable artifacts typically have restrictions\n> on how and where they can be distributed and shared. Only use this\n> feature to push artifacts to private registries and ensure that you\n> are in compliance with any terms that cover redistributing\n> nondistributable artifacts.\n",
                                        "example": [
                                            "::1/128",
                                            "127.0.0.0/8"
                                        ],
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "AllowNondistributableArtifactsHostnames": {
                                        "description": "List of registry hostnames to which nondistributable artifacts can be\npushed, using the format `<hostname>[:<port>]` or `<IP address>[:<port>]`.\n\nSome images (for example, Windows base images) contain artifacts\nwhose distribution is restricted by license. When these images are\npushed to a registry, restricted artifacts are not included.\n\nThis configuration override this behavior for the specified\nregistries.\n\nThis option is useful when pushing images containing\nnondistributable artifacts to a registry on an air-gapped network so\nhosts on that network can pull the images without connecting to\nanother server.\n\n> **Warning**: Nondistributable artifacts typically have restrictions\n> on how and where they can be distributed and shared. Only use this\n> feature to push artifacts to private registries and ensure that you\n> are in compliance with any terms that cover redistributing\n> nondistributable artifacts.\n",
                                        "example": [
                                            "registry.internal.corp.example.com:3000",
                                            "[2001:db8:a0b:12f0::1]:443"
                                        ],
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "IndexConfigs": {
                                        "example": {
                                            "127.0.0.1:5000": {
                                                "Mirrors": [],
                                                "Name": "127.0.0.1:5000",
                                                "Official": false,
                                                "Secure": false
                                            },
                                            "[2001:db8:a0b:12f0::1]:80": {
                                                "Mirrors": [],
                                                "Name": "[2001:db8:a0b:12f0::1]:80",
                                                "Official": false,
                                                "Secure": false
                                            },
                                            "docker.io": {
                                                "Mirrors": [
                                                    "https://hub-mirror.corp.example.com:5000/"
                                                ],
                                                "Name": "docker.io",
                                                "Official": true,
                                                "Secure": true
                                            },
                                            "registry.internal.corp.example.com:3000": {
                                                "Mirrors": [],
                                                "Name": "registry.internal.corp.example.com:3000",
                                                "Official": false,
                                                "Secure": false
                                            }
                                        },
                                        "type": "object",
                                        "additionalProperties": {
                                            "description": "IndexInfo contains information about a registry.",
                                            "nullable": true,
                                            "type": "object",
                                            "properties": {
                                                "Mirrors": {
                                                    "description": "List of mirrors, expressed as URIs.\n",
                                                    "example": [
                                                        "https://hub-mirror.corp.example.com:5000/",
                                                        "https://registry-2.docker.io/",
                                                        "https://registry-3.docker.io/"
                                                    ],
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "Name": {
                                                    "description": "Name of the registry, such as \"docker.io\".\n",
                                                    "example": "docker.io",
                                                    "type": "string"
                                                },
                                                "Official": {
                                                    "description": "Indicates whether this is an official registry (i.e., Docker Hub / docker.io)\n",
                                                    "example": true,
                                                    "type": "boolean"
                                                },
                                                "Secure": {
                                                    "description": "Indicates if the the registry is part of the list of insecure\nregistries.\n\nIf `false`, the registry is insecure. Insecure registries accept\nun-encrypted (HTTP) and/or untrusted (HTTPS with certificates from\nunknown CAs) communication.\n\n> **Warning**: Insecure registries can be useful when running a local\n> registry. However, because its use creates security vulnerabilities\n> it should ONLY be enabled for testing purposes. For increased\n> security, users should add their CA to their system's list of\n> trusted CAs instead of enabling this option.\n",
                                                    "example": true,
                                                    "type": "boolean"
                                                }
                                            }
                                        }
                                    },
                                    "InsecureRegistryCIDRs": {
                                        "description": "List of IP ranges of insecure registries, using the CIDR syntax\n([RFC 4632](https://tools.ietf.org/html/4632)). Insecure registries\naccept un-encrypted (HTTP) and/or untrusted (HTTPS with certificates\nfrom unknown CAs) communication.\n\nBy default, local registries (`127.0.0.0/8`) are configured as\ninsecure. All other registries are secure. Communicating with an\ninsecure registry is not possible if the daemon assumes that registry\nis secure.\n\nThis configuration override this behavior, insecure communication with\nregistries whose resolved IP address is within the subnet described by\nthe CIDR syntax.\n\nRegistries can also be marked insecure by hostname. Those registries\nare listed under `IndexConfigs` and have their `Secure` field set to\n`false`.\n\n> **Warning**: Using this option can be useful when running a local\n> registry, but introduces security vulnerabilities. This option\n> should therefore ONLY be used for testing purposes. For increased\n> security, users should add their CA to their system's list of trusted\n> CAs instead of enabling this option.\n",
                                        "example": [
                                            "::1/128",
                                            "127.0.0.0/8"
                                        ],
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "Mirrors": {
                                        "description": "List of registry URLs that act as a mirror for the official\n(`docker.io`) registry.\n",
                                        "example": [
                                            "https://hub-mirror.corp.example.com:5000/",
                                            "https://[2001:db8:a0b:12f0::1]/"
                                        ],
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "RuncCommit": {
                                "description": "Commit holds the Git-commit (SHA1) that a binary was built from, as\nreported in the version-string of external tools, such as `containerd`,\nor `runC`.\n",
                                "type": "object",
                                "properties": {
                                    "Expected": {
                                        "description": "Commit ID of external tool expected by dockerd as set at build time.\n",
                                        "example": "2d41c047c83e09a6d61d464906feb2a2f3c52aa4",
                                        "type": "string"
                                    },
                                    "ID": {
                                        "description": "Actual commit ID of external tool.",
                                        "example": "cfb82a876ecc11b5ca0977d1733adbe58599088a",
                                        "type": "string"
                                    }
                                }
                            },
                            "Runtimes": {
                                "default": {
                                    "runc": {
                                        "path": "docker-runc"
                                    }
                                },
                                "description": "List of [OCI compliant](https://github.com/opencontainers/runtime-spec)\nruntimes configured on the daemon. Keys hold the \"name\" used to\nreference the runtime.\n\nThe Docker daemon relies on an OCI compliant runtime (invoked via the\n`containerd` daemon) as its interface to the Linux kernel namespaces,\ncgroups, and SELinux.\n\nThe default runtime is `runc`, and automatically configured. Additional\nruntimes can be configured by the user and will be listed here.\n",
                                "example": {
                                    "custom": {
                                        "path": "/usr/local/bin/my-oci-runtime",
                                        "runtimeArgs": [
                                            "--debug",
                                            "--systemd-cgroup=false"
                                        ]
                                    },
                                    "runc": {
                                        "path": "docker-runc"
                                    },
                                    "runc-master": {
                                        "path": "/go/bin/runc"
                                    }
                                },
                                "type": "object",
                                "additionalProperties": {
                                    "description": "Runtime describes an [OCI compliant](https://github.com/opencontainers/runtime-spec)\nruntime.\n\nThe runtime is invoked by the daemon via the `containerd` daemon. OCI\nruntimes act as an interface to the Linux kernel namespaces, cgroups,\nand SELinux.\n",
                                    "type": "object",
                                    "properties": {
                                        "path": {
                                            "description": "Name and, optional, path, of the OCI executable binary.\n\nIf the path is omitted, the daemon searches the host's `$PATH` for the\nbinary and uses the first result.\n",
                                            "example": "/usr/local/bin/my-oci-runtime",
                                            "type": "string"
                                        },
                                        "runtimeArgs": {
                                            "description": "List of command-line arguments to pass to the runtime when invoked.\n",
                                            "example": [
                                                "--debug",
                                                "--systemd-cgroup=false"
                                            ],
                                            "nullable": true,
                                            "type": "array",
                                            "items": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            },
                            "SecurityOptions": {
                                "description": "List of security features that are enabled on the daemon, such as\napparmor, seccomp, SELinux, and user-namespaces (userns).\n\nAdditional configuration options for each security feature may\nbe present, and are included as a comma-separated list of key/value\npairs.\n",
                                "example": [
                                    "name=apparmor",
                                    "name=seccomp,profile=default",
                                    "name=selinux",
                                    "name=userns"
                                ],
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "ServerVersion": {
                                "description": "Version string of the daemon.\n\n> **Note**: the [standalone Swarm API](https://docs.docker.com/swarm/swarm-api/)\n> returns the Swarm version instead of the daemon  version, for example\n> `swarm/1.2.8`.\n",
                                "example": "17.06.0-ce",
                                "type": "string"
                            },
                            "SwapLimit": {
                                "description": "Indicates if the host has memory swap limit support enabled.",
                                "example": true,
                                "type": "boolean"
                            },
                            "Swarm": {
                                "description": "Represents generic information about swarm.\n",
                                "type": "object",
                                "properties": {
                                    "Cluster": {
                                        "description": "ClusterInfo represents information about the swarm as is returned by the\n\"/info\" endpoint. Join-tokens are not included.\n",
                                        "nullable": true,
                                        "type": "object",
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
                                            }
                                        }
                                    },
                                    "ControlAvailable": {
                                        "default": false,
                                        "example": true,
                                        "type": "boolean"
                                    },
                                    "Error": {
                                        "default": "",
                                        "type": "string"
                                    },
                                    "LocalNodeState": {
                                        "default": "",
                                        "description": "Current local status of this node.",
                                        "enum": [
                                            "",
                                            "inactive",
                                            "pending",
                                            "active",
                                            "error",
                                            "locked"
                                        ],
                                        "example": "active",
                                        "type": "string"
                                    },
                                    "Managers": {
                                        "description": "Total number of managers in the swarm.",
                                        "example": 3,
                                        "nullable": true,
                                        "type": "integer"
                                    },
                                    "NodeAddr": {
                                        "default": "",
                                        "description": "IP address at which this node can be reached by other nodes in the\nswarm.\n",
                                        "example": "10.0.0.46",
                                        "type": "string"
                                    },
                                    "NodeID": {
                                        "default": "",
                                        "description": "Unique identifier of for this node in the swarm.",
                                        "example": "k67qz4598weg5unwwffg6z1m1",
                                        "type": "string"
                                    },
                                    "Nodes": {
                                        "description": "Total number of nodes in the swarm.",
                                        "example": 4,
                                        "nullable": true,
                                        "type": "integer"
                                    },
                                    "RemoteManagers": {
                                        "default": null,
                                        "description": "List of ID's and addresses of other managers in the swarm.\n",
                                        "example": [
                                            {
                                                "Addr": "10.0.0.158:2377",
                                                "NodeID": "71izy0goik036k48jg985xnds"
                                            },
                                            {
                                                "Addr": "10.0.0.159:2377",
                                                "NodeID": "79y6h1o4gv8n120drcprv5nmc"
                                            },
                                            {
                                                "Addr": "10.0.0.46:2377",
                                                "NodeID": "k67qz4598weg5unwwffg6z1m1"
                                            }
                                        ],
                                        "nullable": true,
                                        "type": "array",
                                        "items": {
                                            "description": "Represents a peer-node in the swarm",
                                            "properties": {
                                                "Addr": {
                                                    "description": "IP address and ports at which this node can be reached.\n",
                                                    "type": "string"
                                                },
                                                "NodeID": {
                                                    "description": "Unique identifier of for this node in the swarm.",
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "SystemStatus": {
                                "description": "Status information about this node (standalone Swarm API).\n\n<p><br /></p>\n\n> **Note**: The information returned in this field is only propagated\n> by the Swarm standalone API, and is empty (`null`) when using\n> built-in swarm mode.\n",
                                "example": [
                                    [
                                        "Role",
                                        "primary"
                                    ],
                                    [
                                        "State",
                                        "Healthy"
                                    ],
                                    [
                                        "Strategy",
                                        "spread"
                                    ],
                                    [
                                        "Filters",
                                        "health, port, containerslots, dependency, affinity, constraint, whitelist"
                                    ],
                                    [
                                        "Nodes",
                                        "2"
                                    ],
                                    [
                                        " swarm-agent-00",
                                        "192.168.99.102:2376"
                                    ],
                                    [
                                        "  └ ID",
                                        "5CT6:FBGO:RVGO:CZL4:PB2K:WCYN:2JSV:KSHH:GGFW:QOPG:6J5Q:IOZ2|192.168.99.102:2376"
                                    ],
                                    [
                                        "  └ Status",
                                        "Healthy"
                                    ],
                                    [
                                        "  └ Containers",
                                        "1 (1 Running, 0 Paused, 0 Stopped)"
                                    ],
                                    [
                                        "  └ Reserved CPUs",
                                        "0 / 1"
                                    ],
                                    [
                                        "  └ Reserved Memory",
                                        "0 B / 1.021 GiB"
                                    ],
                                    [
                                        "  └ Labels",
                                        "kernelversion=4.4.74-boot2docker, operatingsystem=Boot2Docker 17.06.0-ce (TCL 7.2); HEAD : 0672754 - Thu Jun 29 00:06:31 UTC 2017, ostype=linux, provider=virtualbox, storagedriver=aufs"
                                    ],
                                    [
                                        "  └ UpdatedAt",
                                        "2017-08-09T10:03:46Z"
                                    ],
                                    [
                                        "  └ ServerVersion",
                                        "17.06.0-ce"
                                    ],
                                    [
                                        " swarm-manager",
                                        "192.168.99.101:2376"
                                    ],
                                    [
                                        "  └ ID",
                                        "TAMD:7LL3:SEF7:LW2W:4Q2X:WVFH:RTXX:JSYS:XY2P:JEHL:ZMJK:JGIW|192.168.99.101:2376"
                                    ],
                                    [
                                        "  └ Status",
                                        "Healthy"
                                    ],
                                    [
                                        "  └ Containers",
                                        "2 (2 Running, 0 Paused, 0 Stopped)"
                                    ],
                                    [
                                        "  └ Reserved CPUs",
                                        "0 / 1"
                                    ],
                                    [
                                        "  └ Reserved Memory",
                                        "0 B / 1.021 GiB"
                                    ],
                                    [
                                        "  └ Labels",
                                        "kernelversion=4.4.74-boot2docker, operatingsystem=Boot2Docker 17.06.0-ce (TCL 7.2); HEAD : 0672754 - Thu Jun 29 00:06:31 UTC 2017, ostype=linux, provider=virtualbox, storagedriver=aufs"
                                    ],
                                    [
                                        "  └ UpdatedAt",
                                        "2017-08-09T10:04:11Z"
                                    ],
                                    [
                                        "  └ ServerVersion",
                                        "17.06.0-ce"
                                    ]
                                ],
                                "type": "array",
                                "items": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            },
                            "SystemTime": {
                                "description": "Current system-time in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)\nformat with nano-seconds.\n",
                                "example": "2017-08-08T20:28:29.06202363Z",
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