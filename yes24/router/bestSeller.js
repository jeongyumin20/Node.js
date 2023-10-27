// bestSeller.js
import express from 'express';
/* import ejs from 'ejs';
import * as list from './data.js'; // export 하는 이 객체의 이름을 list로 가르키겠다
import dbConfig from '../db/database.js';

const conn = dbConfig.init()
dbConfig.connect(conn); */

import * as bestController from '../controller/bestSellerController.js'

const router = express.Router();

router.get('/', bestController.getList); // getList
router.get('/:page', bestController.getBest); // getListPage

export default router;