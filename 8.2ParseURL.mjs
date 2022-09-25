import http from 'node:http';
import {URL} from 'node:url';

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    const url = new URL(req.url, 'http://test.com/');
    console.log(url.searchParams.entries())
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Hello World ${url.searchParams.get('name')}</h1>`);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
