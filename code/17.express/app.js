const express = require('express');
const server = express();

const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'Node' },
  { name: 'Express' },
];

server.get('/', (req, res) => {
  res.send('hello world~');
});

server.get('/course', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json(courses);
});

server.post('/course', (req, res) => {
  const body = [];
  req
    .on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    })
    .on('end', () => {
      courses.push(JSON.parse(Buffer.concat(body).toString()));
      res.status(201).end();
    });
});

server.listen(3300);
