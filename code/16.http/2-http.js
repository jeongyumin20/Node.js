const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;

  res.setHeader('content-Type', 'text/html');
  if (url === '/') {
    fs.createReadStream('./test/main.html').pipe(res);
  } else if (url === '/courses') {
    fs.createReadStream('./test/courses/courses.html').pipe(res);
  } else if (url === '/login') {
    fs.createReadStream('./test/login/login.html').pipe(res);
  } else {
    fs.createReadStream('./test/error.html').pipe(res);
  }
});

const host = '192.168.10.29';
const port = 9000;
server.listen(9000, '192.168.10.29');
// server.listen(port, host);
// server.listen(9000);
