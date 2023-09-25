const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const name = 'Hong';
let courses = [{ name: 'HTML' }, { name: 'Node.js' }, { name: 'CSS' }, { name: 'JavaScript' }];
let scoreList = [
  { name: 'HTML', grade: 'A' },
  { name: 'Node.js', grade: 'A' },
  { name: 'CSS', grade: 'A' },
  { name: 'JavaScript', grade: 'A' },
];

// 서버 생성 : port=3000
console.log('-- server start --');
const server = http.createServer((request, response) => {
  console.log('incomming...');
  // console.log(request.headers);

  // 1. 클라이언트 요청 URL 받아옴
  const url = request.url;

  // 2. 클라이언트 전송 타입
  response.setHeader('Content-type', 'text/html'); // json이라면 json타입으로 바꿔 적어준다

  // 3. path 체크 : / = index.ejs
  if (url === '/') {
    // 4. ejs.renderFile(매개변수) <= 프로미스 타입 처리
    ejs
      .renderFile('./template/index.ejs', { name }) // 추후에 더 들어갈 수 있어서 {} 객체 타입으로 넣어준 것이고
      .then(data => {
        console.log(data);
        response.end(data); // () 안 비우면 바로 종료 넣으면 해당 데이터 보내주고 종료
      })
      .catch(console.error);
  } else if (url === '/courses') {
    ejs
      .renderFile('./template/courses.ejs', { courses })
      .then(data => {
        response.end(data);
      })
      .catch(console.error);
  } else if (url === '/score') {
    ejs
      .renderFile('./template/score.ejs', { scoreList })
      .then(data => response.end(data))
      .catch(console.error);
  } else {
    // 패스가 다르면 File Not Found~ Hong!
    ejs
      .renderFile('./template/error.ejs', { name })
      .then(data => {
        response.end(data);
      })
      .catch(console.error);
  }

  // response.write('Welcome~');
  // response.end();
});

server.listen(3000);
