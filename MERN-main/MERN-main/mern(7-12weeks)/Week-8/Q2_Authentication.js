const express = require('express');
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
    let {username, password} = req.body;

    if(username === "admin" && password === "123"){
        res.send("Login Success");
    } else {
        res.send("Invalid Credentials");
    }
});

app.listen(3000);
