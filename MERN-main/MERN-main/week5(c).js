const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

    const data = {
        name: "Bheemeswari",
        course: "MERN Stack",
        status: "Learning HTTP Module"
    };

    res.end(JSON.stringify(data));
});

server.listen(3000, () => {
    console.log("HTTP Server running at http://localhost:3000");
});
