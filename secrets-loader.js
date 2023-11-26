const { secrets } = require('./config/secrets.json')
const { AWSSecretsManager } = require('./aws-secret-manager')

class SecretsLoader {
    constructor(filePath, region) {
        this.filePath = filePath;
        this.region = region;
        const sm = new AWSSecretsManager('us-east-1')

    }
    async load() {
        const { secrets } = require('./config/secrets.json')
        const parsedSecrets = secrets.map(secret => {
            const { key, entry, type } = secret
            return sm.getSecret(key, { type: type || 'raw' })
        })

        const result = Promise.all(parsedSecrets).then(result1 => {
            console.log(result1)
        })
        return result;
    }

}


