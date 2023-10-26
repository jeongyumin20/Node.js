// signupRouter.js

import express from 'express';
import * as signupController from '../controller/signupController.js'

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.post('/', signupController.signup)

export default router;