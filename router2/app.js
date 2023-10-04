import express from 'express';
import postRouter from './route/posts.js';
import userRouter from './route/users.js';
// import errorRouter from './route/error.js';

const app = express();
app.use(express.json());

// app.all('/posts/*', postRouter);
app.use('/posts', postRouter);
app.use('/users', userRouter);
// app.use('/', errorRouter);

app.listen(8080);
