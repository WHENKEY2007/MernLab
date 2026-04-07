const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.post('/add', (req, res) => {
    users.push(req.body);
    res.send("User Added");
});

app.get('/all', (req, res) => {
    res.send(users);
});

app.delete('/delete/:id', (req, res) => {
    users.splice(req.params.id, 1);
    res.send("Deleted");
});

app.listen(3000);
