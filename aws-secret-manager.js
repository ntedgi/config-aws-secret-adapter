const AWS = require('aws-sdk');
const { SecretsManager } = require('aws-sdk');


class AWSSecretsManager {
    secretsManager;
    constructor(region) {
        AWS.config.update({ region });
        this.secretsManager = new SecretsManager();

    }
    async getSecret(secretName, options) {
        options = options || { type: "raw" }
        try {
            const data = await this.secretsManager.getSecretValue({ SecretId: secretName }).promise();
            if ('SecretString' in data) {
                const { SecretString } = data;
                return (options.type === 'json') ? JSON.parse(SecretString) : SecretString
            }
            else {
                throw new Error(`Can't pull ${secretName} from aws-secret (${region})`)
            }
        } catch (err) {
            console.error('Error retrieving secret:', err);
        }
    }
}

module.exports = {
    AWSSecretsManager
}