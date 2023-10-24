// reply.js

import express from 'express';
import ejs from 'ejs';
import dbConfig from '../db/database.js'

const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express.Router();
const replyList = [];

router.use(express.json());
router.use(express.urlencoded());

router.get('/:nid', (req, res, next) => {
  const nid = req.params.nid;
  const sql = 'select rid, content, nid, redate from news_reply where nid = ?';
  conn.query(sql, nid, (err, rows, fields) => {
    if(err) console.log(err)
    else res.json(rows);
  });
});

/* 댓글 등록 버튼 데이터 처리 : post */
router.post('/', (req, res, next) => {
  const { nid, content } = req.body;
  const sql = 'insert into news_reply(content, nid, redate) values(?, ?, sysdate())';
  const params = [content, nid];
  conn.query(sql, params, (err) => {
    if(err) console.log(err)
    else res.status(201).send('create success~'); 
  })
});

router.delete('/', (req, res, next) => {
  const { rid } = req.body;
  const sql = 'delete from news_reply where rid =?';
  conn.query(sql, rid, (err) => {
    if(err) console.log(err)   
    else {
      res.status(204).send('success')
    }
  }); 
});

export default router;
