// Import HTTP module
const http = require('http');

// Create Server
const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write("<h1>Node.js Server Running</h1>");
    res.write("<p>This shows JavaScript executed on server</p>");

    res.end();
});

// Listen on port 3000
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
