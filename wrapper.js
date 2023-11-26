const config = require('config')
const x = config.get('service1_password')
console.log(x)
const { SecretsLoader } = require('./secrets-loader');
const sl = new SecretsLoader('./config/secrets.json', 'us-east-1')
sl.load().then(result => {
    console.log(result)
    config.extend(result)
})

