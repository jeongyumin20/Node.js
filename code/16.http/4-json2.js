// 1. 주소록(address) 배열 객체 생성 ( 안 데이터 없다 )
// 2. post 방식으로 이름, 주소를 입력받아 address에 추가
// 3. get 방식으로 주소록 (address) 확인
// postman 이용해서 테스트 진행

const http = require('http');

// 1. 주소록 생성
const address = [];

// 2. 서버 생성
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/address') {
    if (method === 'GET') {
      if (address.length != 0) {
        res
          .writeHead(200, {
            'Content-Type': 'application/json',
          })
          .end(JSON.stringify(address));
      } else {
        res.end('-- No data --');
      }
    } else if (method === 'POST') {
      const body = []; // chunk 다른 곳에 사용하기 위해서
      // 영훈이 방식으로 하면 글자가 쪼개지는게 맞지 않을 수 있다 버퍼 단위가 홍길동이라면 홍길이 될수도
      // 그래서 chunk 하나를 배열에 담아서 한번에 처리해야하는 것으로 유추
      req
        .on('data', chunk => {
          console.log(chunk);
          body.push(chunk);
        })
        .on('end', () => {
          // const bodyStr = Buffer.concat(body).toString(); // 버퍼 하나 쪼개서 바디스트링으로 만들고
          //  const jsonStr = JSON.parse(bodyStr); // 다시 파싱해서 객체로 만들고
          address.push(JSON.parse(Buffer.concat(body).toString())); // 넣어준다
          res.writeHead(201).end();
        });
    }
  } else {
    res.write('File not Found').end();
  }
});

// 3. 9000 포트로 리스닝
server.listen(9000);
