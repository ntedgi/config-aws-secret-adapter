const { secrets } = require('./config/secrets.json')
const { AWSSecretsManager } = require('./aws-secret-manager')
const sm = new AWSSecretsManager('us-east-1')

const secrets1 = secrets.map(secret => {
    const { key, entry, type } = secret
    return sm.getSecret(key, { type: type || 'raw' })
})

const result  = Promise.all(secrets1).then(result1=>{
    console.log(result1)
})


