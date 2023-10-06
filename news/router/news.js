// news.js

import express from 'express';
import ejs from 'ejs';

const router = express.Router();

const newsList = []; // {nid, url, title, content, rdate}

router.use(express.json());
router.use(express.urlencoded());

/* 기본 화면 get  */
router.get('/', (req, res, next) => {
  ejs.renderFile('./template/list.ejs', { newsList }).then(data => res.end(data));
});

/* post 뉴스 등록 처리 */
router.post('/register', (req, res, next) => {
  const { url, title, content } = req.body;

  const nid = Math.trunc(Math.random() * 1000);
  let rdate = new Date(Date.now());
  rdate = rdate.toLocaleDateString('ko-KR');

  newsList.push({ nid, url, title, content, rdate });
  res.redirect('/news');
  // res.status(201).send();
});

/* get 제목 클릭시 주소 클릭 처리 */
// 데이터 저장 이름은 통일해서 사용하는 것이 좋다 : db, 서버, 클라이언트 받을 때도 모두 nid 통일
router.get('/:nid', (req, res, next) => {
  const nid = req.params.nid;

  // 같은 아이 하나만 찾아서 return 하므로 if문과 {} 생략, json 타입 들어간다
  const newsContent = newsList.filter(news => news.nid === parseInt(nid))[0];
  ejs.renderFile('./template/content.ejs', { newsContent }).then(data => res.end(data));
});

export default router;
