import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  const { keyword, name } = req.query;
  res.send(`GET: /test ➡️ ${keyword}, ${name} `);
});

export default router;

/*
/test 경로 설정시 추가되어버린다! 

router.get('/test', (req, res, next) => {
  const { keyword, name } = req.query;
  res.send(`GET: /test ➡️ ${keyword}, ${name} `);
});
*/

// http://localhost:8080/test/test/?keyword=fall&name=yoom
