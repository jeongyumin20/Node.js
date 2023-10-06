import express from 'express';
import ejs from 'ejs';

const router = express.Router();
let dwitterList = [];

// 자바스크립트에서 넘어오는 값은 객체로 만들어야함
router.use(express.json());
router.use(express.urlencoded());

//  http://localhost:8080/dwitter 전체 리스트가 나오는 경로
// 1. GET : /dwitter  ➡️  All Dwitter List
// 경로 /dwiiter 설정시 8080/dwitter/dwitter
router.get('/', (req, res, next) => {
  const renderList = dwitterList;

  // index.ejs(틀) + 동적 데이터
  ejs.renderFile('./template/index.ejs', { renderList }).then(data => {
    res.end(data);
  });
});

// 2. POST : /dwitter ➡️ tweet create
router.post('/', (req, res, next) => {
  const { id, name, content } = req.body;
  const pid = Math.trunc(Math.random() * 1000);
  let date = new Date(Date.now());
  date = date.toLocaleDateString('ko-KR');
  dwitterList.push({ pid, id, name, date, content });
  res.redirect('/dwitter');
  // res.redirect('/'); http://localhost:8080/
});

// 3. GET : /dwitter/:id : My Dwitter List
//          /dwitter?id=자신의 아이디
router.get('/:id', (req, res, next) => {
  const id = req.params.id; // id 하나만 들어오니까 변수로 받고 많은 것은 {} 오브젝트로 맵핑해서 받는다
  const renderList = dwitterList.filter(dwitter => dwitter.id === id);

  // 랜더링 되어지는 경로
  ejs.renderFile('./template/index.ejs', { renderList }).then(data => res.end(data));
});

// 내가 시도한 방식
/* router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  dwitterList = dwitterList.filter(dwitter => {
    return dwitter.id === id;
  });

  ejs.renderFile('./template/index.ejs', { dwitterList }).then(data => {
    res.end(data);
  });
}); */

// 4. PUT : /dwitter/:id - My Dwitter update
router.put('/', (req, res, next) => {
  const { pid, content } = req.body;
  // console.log({ pid, content });
  dwitterList.filter(dwitter => {
    if (dwitter.pid === parseInt(pid)) {
      // console.log('------------>');
      dwitter.content = content;
    }
  });
  // console.log(dwitterList);
  res.status(204).send('update success!'); // index.ejs fetch에서 호출해서 이 값이 then으로 넘어옴
});

// 5. DELETE : /dwitter/:id - My Dwitter delete
router.delete('/', (req, res, next) => {
  const { pid } = req.body;
  console.log({ pid });
  dwitterList = dwitterList.filter(dwitter => {
    return dwitter.pid !== parseInt(pid);
  });
  console.log(dwitterList);
  res.status(204).send('delete success!'); // send 안해도 된다
});

/* router.delete('/', (req, res, next) => {
  const { pid } = req.body;

  dwitterList.filter(dwitter => {
    if (dwitter.pid === parseInt(pid)) {
      dwitterList.pop(dwitter);
    }
    // console.log(dwitterList);
    res.status(204).send('delete success');
  });
});
 */
export default router;
