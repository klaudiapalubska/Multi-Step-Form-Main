const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok.');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
});

server.listen(8080, '127.0.0.1', () => {
  console.log('8080 port');
});
