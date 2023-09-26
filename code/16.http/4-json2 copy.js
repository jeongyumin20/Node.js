// 1. 주소록(address) 배열 객체 생성 ( 안 데이터 없다 )
// 2. post 방식으로 이름, 주소를 입력받아 address에 추가
// 3. get 방식으로 주소록 (address) 확인
// postman 이용해서 테스트 진행

const http = require('http');

const address = [];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/address') {
    if (method === 'GET') {
      const strAddress = JSON.stringify(address);
      res
        .writeHead(200, {
          'Content-Length': Buffer.byteLength(strAddress),
          'Content-Type': 'application/json',
        })
        .end(strAddress);
    } else if (method === 'POST') {
      const body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });

      // 영훈이가 생각한 방식! 4-json2.js에서 왜 배열로 받았는지 확인하기
      req.on('end', () => {
        let parsedBody = body.map(v => JSON.parse(v.toString()));
        parsedBody.forEach(v => {
          address.push(v);
        });
        res.writeHead(201);
        res.end();
      });
    }
  } else {
    res.write('File not Found');
    res.end();
  }
});

// server.listen(9000);
