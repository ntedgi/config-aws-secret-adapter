# config-aws-secret-adapter

```secrets.json
{
    "secrets": [
        {
            "key": "bla/connections/airflow",
            "entry": "airflow",
            "type": "json"
        },
        {
            "key": "bla/connections/service1",
            "entry": "service1"
        }
    ]
}
```

==> production.json
```json

{
    "service1": "123",
    "service2": "234"
}
```

```js
const config = require('config)
console.log(config.get('service1')) // 123
const sl = new SecretsLoader('./config/secrets.json', 'us-east-1')
sl.load().then(result => {
    console.log(result)
    config.extend(result)
    console.log(config.get('service1')) // something from aws-secrets

})



```


then use config [File Load Order](https://github.com/node-config/node-config/wiki/Configuration-Files#file-load-order)
```

default.EXT
default-{instance}.EXT
{deployment}.EXT
{deployment}-{instance}.EXT
{short_hostname}.EXT
{short_hostname}-{instance}.EXT
{short_hostname}-{deployment}.EXT
{short_hostname}-{deployment}-{instance}.EXT
{full_hostname}.EXT
{full_hostname}-{instance}.EXT
{full_hostname}-{deployment}.EXT
{full_hostname}-{deployment}-{instance}.EXT
local.EXT
local-{instance}.EXT
local-{deployment}.EXT
local-{deployment}-{instance}.EXT
(Finally, custom environment variables can override all files)
```