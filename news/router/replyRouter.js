// replyRouter.js

import express from 'express';
import * as replyController from '../controller/replyController.js'

/* import ejs from 'ejs';
import dbConfig from '../db/database.js'

const conn = dbConfig.init();
dbConfig.connect(conn); */

const router = express.Router();
const replyList = [];

router.use(express.json());
router.use(express.urlencoded());

router.get('/:nid', replyController.replyGetAll);

/* 댓글 등록 버튼 데이터 처리 : post */
router.post('/', replyController.replyCreate);

router.delete('/', replyController.replyDelete);

export default router;
