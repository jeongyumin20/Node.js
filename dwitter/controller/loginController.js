// loginController.js

import * as loginRepository from '../repository/loginRepository.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function login(req, res) {
  const { id, pass } = req.body;
  // form에서 넘어온 pass - hash 알고리즘 적용
  // db에 저장 된 pass 가져오기
  const dpass = await loginRepository.login(id);
  
  // compareSync도 가능 : await 사용하지 않아도 됨
  // 단방향은 모듈에서 제공하는 함수를 통해 비교를 한다 
  const result = await bcrypt.compare(pass, dpass.pass);
  
  if(result) {
    // 로그인 성공 -> session 생성, JWT(JSON Web Token)
    const token = createToken(id); // id 이 값이 payload로 가서 생성 
    res.cookie('x_auth', token, {maxAge : 60*60*1000, httpOnly : true} )
    .status(200).redirect('/dwitter');
  } else {
    // 로그인 실패
  }
}

function createToken(id) {
  // jwt.sign(); // 여기서 생성해도 되고 이 결과가 token 리턴되니까 
  return jwt.sign(
    {id: id}, '8MA27nV!8.*d'
  ) // 여기서 바로 값을 줘도 된다 
}