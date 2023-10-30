// join.js

import express  from 'express';
import * as joinController from '../controller/joinController.js';

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());


router.get('/', joinController.getJoinPage) 
router.post('/', joinController.joinCreate)

export default router;