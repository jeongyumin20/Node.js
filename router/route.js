import express from 'express';
const router = express.Router();
// const app = express();

router
  .get(
    '/',
    (req, res, next) => {
      // console.log('first');
      // next();
      res.send('[route] GET: /');
    },
    (req, res, next) => {
      console.log('second');
    }
  )
  .post('/', (req, res, next) => {
    res.send('POST: /');
  })
  .put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(`[route] PUT: /:id ➡️ ${id}`);
  })
  .delete('/:id/:name/:address', (req, res, next) => {
    const { id, name, address } = req.params;
    res.send(`[route] DELETE: /:id ➡️ ${id}, ${name}, ${address}`);
  });

export default router;
