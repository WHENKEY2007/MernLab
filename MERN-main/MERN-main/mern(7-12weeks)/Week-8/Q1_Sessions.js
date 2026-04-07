const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    req.session.views = (req.session.views || 0) + 1;
    res.send("Views: " + req.session.views);
});

app.listen(3000);
