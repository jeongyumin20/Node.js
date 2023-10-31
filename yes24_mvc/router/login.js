// login.js
import express from 'express';
import * as controller from '../controller/loginController.js'

const router = express.Router()
router.use(express.json());
router.use(express.urlencoded());

router.get('/', controller.loginPage)
router.post('/', controller.login)


export default router;