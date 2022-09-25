import http from 'node:http';
import {URL} from 'node:url';

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://test.com/');
    const pathname = url.pathname;
    console.log(pathname);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let s = '<h1>Hello World</h1>'
    if (pathname === '/about') {
        s ='<h1>About</h1>'
    }
    res.end(s);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
