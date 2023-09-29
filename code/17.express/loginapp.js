const express = require('express');
const process = require('process');
const path = require('path');

const app = express();

let memberList = [];

// path ('/') root이면 welcome 메세지 출력
// index 페이지 출력
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/join', (req, res) => {
  res.sendFile(path.join(__dirname, 'join.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { id, pass } = req.body;
  let result = 0;

  // memberList에서 id, pass 일치하면 로그인 성공 ->  1, 불일치 -> 0
  for (let i = 0; i < memberList.length; i++) {
    let member = memberList[i];
    // if문만 써도 되는 것은 위에 result의 기본값을 0으로 미리 설정해뒀으니까
    // 아래 result = 1이 아니면 else문에서 걸려서 실행되니
    // 여기서 if문만 그냥 조건 체크 추가한 것일뿐

    if (id === member.id && pass === member.pass) {
      result = 1; // 1로 바꾸고 빠져나와야한다
      i = memberList.length; // 여기서 조건 false // break;  권장 x
    }
  }

  if (result == 1) {
    // 로그인 성공하면 index.html 페이지로 이동
    res.redirect('/');
  } else {
    // 로그인 실패 : lgoinFail.html 이동
    res.sendFile(path.join(__dirname, 'loginFail.html'));
    // res.redirect('/error');
  }
});

app.post('/join', (req, res) => {
  const { name, id, pass, address } = req.body;
  memberList.push({ name, id, pass, address });
  res.redirect('/');
});

app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, 'error.html'));
});

app.listen(8080);
