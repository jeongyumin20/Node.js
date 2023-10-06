// app.js
import express from 'express';
import newsRouter from './router/news.js';
import replyRouter from './router/reply.js';

const app = express();

// '/'도 가능
// http://localhose:800/news : 현재 default 주소
app.use('/news', newsRouter);
app.use('/reply', replyRouter);

app.listen(8080);
