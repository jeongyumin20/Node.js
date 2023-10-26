// loginController.js

import * as loginRepository from '../repository/loginRepository.js';
import bcrypt from 'bcryptjs';

export async function login(req, res) {
  const { id, pass } = req.body;
  // form에서 넘어온 pass - hash 알고리즘 적용
  // db에 저장 된 pass 가져오기
  const dpass = await loginRepository.login(id);
  
  // compareSync도 가능 : await 사용하지 않아도 됨
  // 단방향은 모듈에서 제공하는 함수를 통해 비교를 한다 
  const result = await bcrypt.compare(pass, dpass.pass);
  console.log(result);
}