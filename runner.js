require('./wrapper').load({
    file: "",
    region: "us-east-1",
    secrets: [
        {
            key: "demand/github-actions/JFROG-USER-AND-PASS",
            entry: "jfrog_user_and_pass"
        }
    ]
})