// signupController.js

import * as signupRepository from '../repository/signupRepository.js'
import bcrypt from 'bcryptjs';

// salt  : 암호화할 때 해킹을 방지하기 위해 랜덤으로 부여하는 문자열로 8 - 10자리가 가장 안정적
export async function signup(req, res) {
  const { id, pass, name, content } = req.body;  
  const hashPass = bcrypt.hashSync(pass, 10);
  const params = [id, hashPass, name, content];
  const result = await signupRepository.signup(params);
  if((result) === 'success') res.redirect('/dwitter')
}
