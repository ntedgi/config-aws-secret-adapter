const AWS = require('aws-sdk');
const { SecretsManager } = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const secretsManager = new SecretsManager();

const secretName = 'mobile_data_eng/airflow/connections/soomla_mem_prod';

async function getSecret() {
    try {
        const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
        if ('SecretString' in data) {
            const { SecretString } = data;
            console.log(SecretString)
            console.log(data)
        }
    } catch (err) {
        console.error('Error retrieving secret:', err);
    }
}

getSecret();

