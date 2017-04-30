const http = require('http');
const fs = require('fs');

const users = fs.readFileSync('./users.json');

const server = http.createServer((request, response) => {
    console.log(request.url);
    if (request.url === '/users') {
        response.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8080'
        });
        response.end(users);
    } else response.end();
});

server.listen(3000, '127.0.0.1');

console.log('listening on port 3000...');