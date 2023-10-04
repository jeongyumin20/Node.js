import express from 'express';
const router = express.Router();

router
  .get('/', (req, res, next) => {
    res.send('users GET');
  })
  .post('/', (req, res, next) => {
    res.send('users POST');
  })
  .put('/:id', (req, res, next) => {
    res.send(`users PUT : ${req.params.id}`);
  })
  .delete('/:id', (req, res, next) => {
    res.send(`users DELETE : ${req.params.id} `);
  });

export default router;
