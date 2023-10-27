// dayBestSeller.js
import express from 'express';
/* import ejs from 'ejs';
import * as list from './data.js';
import dbConfig from '../db/database.js';

const conn = dbConfig.init()
dbConfig.connect(conn); */

import * as daybestController from '../controller/dayBestSellerController.js'


const router = express.Router();

router.get('/:page', daybestController.getDay);

export default router;
