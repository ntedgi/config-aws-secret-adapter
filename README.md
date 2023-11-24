# config-aws-secret-adapter

```js

require('config-aws-secret-adapter').load({
    file: "production.json",
    region: "us-east-1",
    secrets: [
        {
            key: "secret1",
            entry: "service1_password"
        },
        {
            key: "secret2",
            entry: "service2_password"
        }
    ]
})

```

==> production.json
```json

{
    "service1_password": "123",
    "service2_password": "234"
}
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