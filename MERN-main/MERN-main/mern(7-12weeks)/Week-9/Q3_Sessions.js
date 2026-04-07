const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({secret:"key"}));

app.get('/', (req,res)=>{
    req.session.count = (req.session.count||0)+1;
    res.send("Count: "+req.session.count);
});

app.listen(3000);
