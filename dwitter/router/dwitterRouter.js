// dwitterRouter.js

import express from 'express';
import * as dwitterController from '../controller/dwitterController.js';
/* import ejs from 'ejs';
import dbConfig from '../db/database.js'; 

const conn = dbConfig.init(); 
dbConfig.connect(conn);  */

const router = express.Router();

// 자바스크립트에서 넘어오는 값은 객체로 만들어야함
router.use(express.json());
router.use(express.urlencoded());

//  http://localhost:8080/dwitter 전체 리스트가 나오는 경로
// 1. GET : /dwitter  ➡️  All Dwitter List
// 경로 /dwiiter 설정시 8080/dwitter/dwitter
router.get('/', dwitterController.getAll);

// 2. POST : /dwitter ➡️ tweet create
router.post('/', dwitterController.create);

// 3. GET : /dwitter/:id : My Dwitter List
//          /dwitter?id=자신의 아이디
router.get('/:id', dwitterController.getDwitter);


// 4. PUT : /dwitter/:id - My Dwitter update
router.put('/', dwitterController.update);

// 5. DELETE : /dwitter/:id - My Dwitter delete
router.delete('/', dwitterController.remove);

export default router;
