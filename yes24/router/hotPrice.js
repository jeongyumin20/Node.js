// hotPrice.js
import express from 'express';
/* import ejs from 'ejs';
import * as list from './data.js';
import dbConfig from '../db/database.js';

const conn = dbConfig.init()
dbConfig.connect(conn);
 */

import * as hotpriceController from '../controller/hotPriceController.js';

const router = express.Router();

router.get('/:page', hotpriceController.getHotPrice);

export default router;
