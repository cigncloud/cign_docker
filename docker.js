const { Agent, ProviderBase, SecurityBase, commandExists } = require('cign-core');

const securityOpIds = ['RegistryImageList', 'RegistryImageTagList'];
const securitySchema = {
    type: 'object',
    required: ['username', 'password'],
    properties: {
        username: {
            type: 'string'
        },
        password: {
            type: 'string',
            format: 'password'
        },
        respository: {
            type: 'string',
            hide: true
        }
    }
};
const fetchOpts = {
    dataFormats: {}, // for validation
    security: undefined,
    agent: undefined,
    baseUrl: "http://0.0.0.0",
    fetchTimeout: 1000 * 60 * 10,
    fetcherConfig: {
        method: null,
        signal: null,
        size: 0,
        follow: 0,
        compress: false,
        insecureHTTPParser: true
    },
    retryOpts: {
        retries: 2,
        factor: 2, // exponential
        minTimeout: 1000 + 1000,
        randomize: false // timeout * random 1 ~ 2
    },
    delayInterval: 0
};

class Security extends SecurityBase {
    constructor(core, provider) {
        super(core, provider, securitySchema, securityOpIds, 10);
        this.endpoint = 'https://hub.docker.com/v2/users/login';
        this.AUTH_SCOPE = this.expiresOffset = 10;
    };

    async isSecurityRequiredOpId(opId) {
        return securityOpIds.includes(opId);
    };

    async securityIsValid(account) {
        let d = await this.core.seCtr.get(arg.provider, arg.account);
        return d.valid ? true : false;
    };

    async handle(arg) {
        let d = await this.core.seCtr.get(arg.provider, arg.account);
        if (d == undefined) throw new Error('Couldnt find security data');
        if (arg.opId == 'ImageCreate') {
            arg.headers = Object.assign((arg.headers ? arg.headers : {}), {
                'X-Registry-Auth':  Buffer.from(JSON.stringify(
                    {
                        username: d.username,
                        password: d.password
                    }
                )).toString('base64'),
            });
        } else if (arg.opId == 'RegistryImageTagList') {
            d.registryToken = await this.authrorizeRegistry(arg.account, d, arg);
            arg.headers = Object.assign((arg.headers ? arg.headers : {}), {
                'Authorization': 'Bearer ' + d.registryToken,
            });
        } else {
            if (!d.token) d.token = await this.authorize(arg.account, d);
            arg.headers = Object.assign((arg.headers ? arg.headers : {}), {
                'Authorization': 'JWT ' + d.token,
            });
        };
        return arg;
    };
    async authorize(account, data, save=true) {
        let headers = {
            'Content-Type': 'application/json'
        };
        let config = {
            method: 'post',
            headers: headers,
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        };
        try {
            let response = await this.fetch(this.endpoint, config);
            let text = await response.text();
            let _d = JSON.parse(text);
            data.token = _d.token;
            data.valid = true;
            if (save) await this.core.seCtr.put(this.provider, account, data)
        } catch (err) {
            data.valid = false;
            if (save) await this.core.seCtr.put(this.provider, account, data)
            throw err;
        };
        return data.token;
    };
    async authrorizeRegistry(account, d, arg) {
        let headers = {
            'Authorization': 'Basic ' + Buffer.from(`${d.username}:${d.password}`, 'binary').toString('base64'),
        };
        let url = this.makeTagEndpoint(d, arg)
        let config = {
            method: 'get',
            headers: headers,
        };
        try {
            let response = await this.fetch(url, config);
            let text = await response.text();
            let _d = JSON.parse(text);
            d.registryToken = _d.token;
            d.valid = true;
            await this.core.seCtr.put(this.provider, account, d)
        } catch (err) {
            d.valid = false;
            await this.core.seCtr.put(this.provider, account, d)
            throw err;
        };
        return d.registryToken;
    };
    makeTagEndpoint(d, arg) {
        let repo = arg.path.split('/')[2];
        return "https://auth.docker.io/token?" + this.serializeQuery({
            service: 'registry.docker.io',
            scope: 'repository:' + d.username + '/' + repo + ':pull'
        })
    };
    serializeQuery(params, encoding = {}) {
        return Object.keys(params).reduce((acc, key) => {
            if (params[key] != undefined) {
                acc.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
            } else {
                acc.push(encodeURIComponent(key));
            };
            return acc;
        }, []).join('&');
    };
};


class Docker extends ProviderBase {
    #socketPath;
    constructor(core) {
        fetchOpts.security = new Security(core, 'docker', fetchOpts);
        super(core, 'docker', undefined, fetchOpts);
        this.#socketPath = "/var/run/docker.sock";
        if (process.platform === "win32") this.#socketPath = "//./pipe/docker_engine";
        this.#initAgent();
    };
    #initAgent = () => {
        this.agent = new Agent({
            socketPath: this.#socketPath,
            keepAlive: false
        });
    };
    #disposeAgent = () => {
        this.agent = undefined;
    };
    async canSync() {
        return await commandExists('docker');
    };
    async fetch(arg, responseHandler, abortController) {
        if (arg.url.startsWith('https://')) {
            this.#disposeAgent();
        } else {
            if (!this.agent) this.#initAgent();
        };
        return await this.core.fetcher.fetch(this, arg, responseHandler, abortController);
    }
};

module.exports = Docker;
