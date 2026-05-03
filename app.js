const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url.includes("/student")) {

        const userId = req.url.split("=")[1];

        // РИЗИК
        const query = "SELECT * FROM students WHERE id = " + userId;

        res.end("Query executed: " + query);
        return;
    }

    res.end("OK");
});

server.listen(3001);