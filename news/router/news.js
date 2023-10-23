// news.js

import express from 'express';
import ejs from 'ejs';
import dbConfig from '../db/database.js'

const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express.Router();

const newsList = []; // {nid, url, title, content, rdate}

router.use(express.json());
router.use(express.urlencoded());

/* 기본 화면 요청 : get  */
router.get('/', (req, res, next) => {
  const sql = 'select nid, url, title, content, left(rdate, 10) as rdate from news';
  conn.query(sql, (err, rows, fields) => {
    if(err) console.log(err)
    else {
      ejs.renderFile('./template/list.ejs', { list : rows }).then(data => res.end(data));
    }
  })
});

/* 뉴스 등록 버튼 데이터 처리 : post */
router.post('/register', (req, res, next) => {
  const { url, title, content } = req.body;
  const sql = 'insert into news(url, title, content, rdate) values(?, ?, ?, curdate())';
  const params = [url, title, content];
  conn.query(sql, params, (err) => {
    if(err) console.log(err)
    else res.redirect('/news');
  });
});

/* 뉴스 제목(a태그) 클릭 화면 처리 : get*/
// 데이터 저장 이름은 통일해서 사용하는 것이 좋다 : db, 서버, 클라이언트 받을 때도 모두 nid 통일
router.get('/:nid', (req, res, next) => {
  const nid = req.params.nid;
  const sql = 'select nid, url, title, content, left(rdate, 10) as rdate from news where nid = ?';
  conn.query(sql, nid, (err, rows, fields) => {
    if(err) console.log(err)
    else {
      // console.log(rows[0]);
      ejs.renderFile('./template/content.ejs', { newsContent : rows[0] }).then(data => res.end(data)); 
    }
  });
});

// DELETE 
router.delete('/', (req, res, next) => {
  const { nid } = req.body;
  const sql = 'delete from news where nid=?';
  conn.query(sql, nid, (err) => {
    if(err) console.log(err)
    else {
      res.status(204).send('delete success!');
      // res.redirect('/news');
    }
  });
});

export default router;