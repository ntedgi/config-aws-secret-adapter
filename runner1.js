const {AWSSecretsManager} = require('./aws-secret-manager')
const secretName = 'mobile_data_eng/airflow/connections/soomla_mem_prod';
const sm = new AWSSecretsManager('us-east-1')
sm.getSecret(secretName)

