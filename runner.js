require('./wrapper').load({
    file: "",
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