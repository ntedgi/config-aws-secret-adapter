const { AWSSecretsManager } = require('./aws-secret-manager')

class SecretsLoader {
    constructor(filePath, region) {
        this.filePath = filePath;
        this.region = region;
        this.sm = new AWSSecretsManager(region)

    }
    async load() {
        const { secrets } = require(this.filePath);
        const parsedSecrets = secrets.map(secret => {
            const { key, type } = secret;
            return this.sm.getSecret(key, { type: type || 'raw' });
        })
        const awsSecrets = await Promise.all(parsedSecrets);
        const result = {}
        awsSecrets.forEach((secret, index) => {
            const { entry } = secrets[index]
            result[entry] = secret;
        })
        return result;
    }

}


module.exports = {
    SecretsLoader
}