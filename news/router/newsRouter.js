// newsRouter.js

import express from 'express';
import * as newsController from '../controller/newsController.js' 
/* import ejs from 'ejs';
import dbConfig from '../db/database.js'

const conn = dbConfig.init();
dbConfig.connect(conn);
 */
const router = express.Router();

const newsList = []; // {nid, url, title, content, rdate}

router.use(express.json());
router.use(express.urlencoded());

/* 기본 화면 요청 : get  */
router.get('/', newsController.getAll);

/* 뉴스 등록 버튼 데이터 처리 : post */
router.post('/register', newsController.create);

/* 뉴스 제목(a태그) 클릭 화면 처리 : get*/
// 데이터 저장 이름은 통일해서 사용하는 것이 좋다 : db, 서버, 클라이언트 받을 때도 모두 nid 통일
router.get('/:nid', newsController.getNews);

// DELETE 
router.delete('/', newsController.remove);

export default router;