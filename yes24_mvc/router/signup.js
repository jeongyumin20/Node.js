// signup.js
import express from 'express';
import * as signupController from '../controller/signupController.js'

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded());

router.get('/', signupController.signup);
router.post('/', signupController.signupProc);

export default router;