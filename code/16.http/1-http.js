const http = require('http');
const fs = require('fs');

// 서버 생성 : createServer()
console.log('server start~');
const server = http.createServer((req, res) => {
  console.log('incomming...');
  // console.log(req.headers);
  // console.log(req.httpVersion);
  // console.log(req.method);
  // console.log(req.url);
  const url = req.url;
  // console.log(`url ---> ${url}`);

  // 응답 생성 - url의 path별로 응답 처리
  // res.write('Welcome!!'); 문자 전송
  res.setHeader('Content-Type', 'text/html'); // 구간마다 반복되니 if문 밖에서 정의
  if (url === '/') {
    fs.createReadStream('./html/index.html').pipe(res);
    // res.end();
  } else if (url === '/courses') {
    fs.createReadStream('./html/courses.html').pipe(res);
    // res.end();
  } else {
    fs.createReadStream('./html/error.html').pipe(res);
    // res.end();
  }
});

server.listen(8080); //http://localhost:8080
