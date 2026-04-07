const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', { name: "Bheem" });
});

app.listen(3000);
