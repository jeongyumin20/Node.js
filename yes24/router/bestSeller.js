// bestSeller.js
import express from 'express';
import ejs from 'ejs';
import * as list from './data.js'; // export 하는 이 객체의 이름을 list로 가르키겠다

const router = express.Router();

router.get('/', (req, res, next) => {
  ejs.renderFile('./template/list.ejs', {}).then(data => res.end(data));
});

router.get('/:page', (req, res, next) => {
  res.json(list.bestSellerList);
  // res.json(['베스트 셀러', list.bestSellerList]);
});

export default router;
