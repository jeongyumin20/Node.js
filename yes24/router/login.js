// login.js

import express  from 'express';
import * as loginController from '../controller/loginController.js';

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.get('/', loginController.getLoginPage);
router.post('/', loginController.login);
router.get('/root/logout', loginController.logout) 

router.get('/root', loginController.getListroot);
router.post('/root', loginController.update);

router.get('/root/:bid', loginController.reupdateModal)
router.put('/root', loginController.reupdate);
router.delete('/root', loginController.remove);

export default router; 