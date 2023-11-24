const AWS = require('aws-sdk');
const { SecretsManager } = require('aws-sdk');
const config = require('config');
const db = config.get('db')
AWS.config.update({ region: 'us-east-1' });

const secretsManager = new SecretsManager();

const secretName = 'demand/github-actions/JFROG-USER-AND-PASS';

async function getSecret() {
    try {
        const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
        if ('SecretString' in data) {
            const { SecretString } = data;
            console.log(SecretString)
        }
    } catch (err) {
        console.error('Error retrieving secret:', err);
    }
}

getSecret();


console.log(db)
