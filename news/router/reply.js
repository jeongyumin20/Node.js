import express from 'express';

const router = express.Router();
const replyList = [];

router.use(express.json());
router.use(express.urlencoded());

/* 
    댓글을 등록하는 기능 => POST 메소드, /reply
    댓글등록을 누르면 여기서 받아야한다
*/
router.post('/', (req, res, next) => {
  const { nid, replyContent } = req.body;

  // console.log({ nid, replyContent });

  replyList.push({ nid, replyContent });

  console.log(replyList);
  res.status(201).send('success~');
});

export default router;
