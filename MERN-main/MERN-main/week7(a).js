const express = require('express');
const app = express();

// Basic Route
app.get('/', (req, res) => {
    res.send("Home Page");
});

// Route Parameter
app.get('/user/:id', (req, res) => {
    res.send("User ID: " + req.params.id);
});

// Query Parameter
app.get('/search', (req, res) => {
    let name = req.query.name;
    res.send("Search Result for: " + name);
});

// URL Building Example
app.get('/product/:id/details', (req, res) => {
    res.send("Product Details for ID: " + req.params.id);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
