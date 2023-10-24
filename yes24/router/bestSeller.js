// bestSeller.js
import express from 'express';
import ejs from 'ejs';
import * as list from './data.js'; // export 하는 이 객체의 이름을 list로 가르키겠다
import dbConfig from '../db/database.js';

const conn = dbConfig.init()
dbConfig.connect(conn);

const router = express.Router();

router.get('/', (req, res, next) => {
  ejs
  .renderFile('./template/list.ejs', {})
  .then(data => res.end(data))
});

router.get('/:page', (req, res, next) => {
  // const page = req.params.page;   
  const sql = `select bs_title, bid, bname, bname_comment, author, translator, publisher, pdate, price, dc, url, yb.bs_id
                from yes24_books yb right outer join yes24_bs_category yc 
                on yb.bs_id = yc.bs_id where yc.bs_id = 'BS'`;
  
  // const sql = `select bid, bname, bname_comment, author, translator, publisher, pdate, price, dc, url, bs_id from yes24_books where bs_id = 'BS'`;
  conn.query(sql, (err, rows, fields) => {
    if(err) console.log(err)
    else res.json(rows);
    // else res.json({list:rows});
  })
});

export default router;