// reply.js

import express from 'express';
import ejs from 'ejs';

const router = express.Router();
const replyList = [];

router.use(express.json());
router.use(express.urlencoded());

router.get('/:nid', (req, res, next) => {
  const nid = req.params.nid;
  const rlist = replyList.filter(reply => reply.nid === nid);
  res.json(rlist);
});

/* 댓글 등록 버튼 데이터 처리 : post */
router.post('/', (req, res, next) => {
  const { nid, replyContent } = req.body;
  replyList.unshift({ nid, replyContent });
  res.status(201).send('create success~'); // 성공 메세지 받고 싶으면 이렇게
  // res.json(replyList); // 현재는 replyList를 받고 싶지만 이제 보내지 않아도 됨 get 방식에서 처리
});

export default router;
