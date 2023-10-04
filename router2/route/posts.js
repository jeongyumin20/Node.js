import express from 'express';
const router = express.Router();

router
  .get('/', (req, res, next) => {
    res.send(`posts GET`);
  })
  .post('/', (req, res, next) => {
    res.send(`posts POST`);
  })
  .put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(`put : ${id}`);
  })
  .delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(`delete : ${id} `);
  });

export default router;

// 선생님 풀이

/* router.get('/', (req, res, next) => {
  res.send(`GET : posts`);
});

router.post('/', (req, res, next) => {
  res.send(`POST : /posts`);
});

router.put('/:id', (req, res, next) => {
  res.send(`PUT : /posts/:id ${req.params.id}`);
});

router.delete('/:id', (req, res, next) => {
  res.send(`DELETE : /posts/:id  ${req.params.id}`);

}); */
