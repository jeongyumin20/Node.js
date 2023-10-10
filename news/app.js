// app.js
import express from 'express';
import newsRouter from './router/news.js';
import replyRouter from './router/reply.js';

const app = express();

// '/'도 가능
// http://localhost:8080/news : 현재 default 주소
app.use('/news', newsRouter);
app.use('/reply', replyRouter);

app.listen(8080);
