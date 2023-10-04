import express from 'express';
const router = express.Router();

router
  .post('/', (req, res, next) => {
    const { name, address } = req.body;
    console.log(`name, address ➡️ ${name}, ${address}`);
    res.status(201).send('router finish');
  })
  .use((req, res, next) => {
    res.status(404).send('File not found error');
  });

export default router;
