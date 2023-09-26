const http = require('http');

const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'Node' },
  { name: 'Express' },
];

// 서버생성
const server = http.createServer((req, res) => {
  // 해당하는 scope에 작성해서 메모리 효율성 생각
  const url = req.url; // url 우리가 변경할 일이 없으니 const
  const method = req.method;

  // 지금 json 파일 요청한 것
  if (url === '/courses') {
    if (method === 'GET') {
      const strCourses = JSON.stringify(courses);
      res
        .writeHead(200, {
          'Content-Length': Buffer.byteLength(strCourses),
          'Content-Type': 'application/json',
        })
        .end(strCourses);
    } else if (method === 'POST') {
      // post 방식으로 요청이 들어오면 -> JSON 데이터 받기
      const body = []; // 저장하기 위한 공간 필요
      // 데이터 받아서 처리
      req.on('data', chunk => {
        console.log(chunk.toString());
        body.push(chunk);
      });

      // 더이상 보내는 것이 없다
      req.on('end', () => {
        // body의 데이터를 string 타입으로 변경
        const bodyStr = Buffer.concat(body).toString(); // console.log(`bodyStr -> ${bodyStr}`);
        // string 문자열을 JSON 객체로 파싱
        const newCourses = JSON.parse(bodyStr);
        // courses 배열에 추가
        courses.push(newCourses);
        // console.log(courses);

        // response 결과 완료 전송
        res.writeHead(201);
        res.end();
      });
    }
  } else {
    res.write('File not Found');
    res.end();
  }
});

// 서버 리스닝
server.listen(8080);
