// monthWeek.js
import express from 'express';
import ejs from 'ejs';
import * as list from './data.js';
import dbConfig from '../db/database.js';

const conn = dbConfig.init()
dbConfig.connect(conn);


const router = express.Router();

router.get('/:page', (req, res, next) => {
  const sql = `select bs_title, bid, bname, bname_comment, author, translator, publisher, pdate, price, dc, url, yb.bs_id
                from yes24_books yb right outer join yes24_bs_category yc 
                on yb.bs_id = yc.bs_id where yc.bs_id = 'MBS'`;

  conn.query(sql, (err, rows, fields) => {
  if(err) console.log(err)
  else res.json(rows);
  })
});

export default router;
