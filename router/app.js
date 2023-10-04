import express from 'express';
// import route from './route.js';
// import testRouter from './test.js';
// import joinRouter from './join.js';

const app = express();
app.use(express.json()); // body에서 넘어오는 데이터를 받아서 json 객체로 전환

// ✔️ use 사용으로 하위까지 처리 진행 모두 가능해짐
app.use('/', route);
// app.put('/:id', route); // '' 안 이걸로 받으면 route로 가세요
// app.delete('/:id/:name/:address', route);

// test.js에서 /test 패스 처리하도록 진행
app.use('/test', testRouter);
app.use('/join', joinRouter);

app.listen(8080);
