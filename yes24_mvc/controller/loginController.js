// loginContorller.js
import ejs from 'ejs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as repository from '../repository/yes24MemberRepository.js';

export async function loginPage(req, res) {
  ejs.renderFile('./template/login.ejs').then(data => res.end(data))
}


export async function login(req, res) {
  const {id, pass} = req.body;

  // id, pass를 받아서 id를 보내서 테이블에 저장된 pass 받아옴
  // 받아온 pass를 디코딩하여 받은 pass와 비교 진행시 맞으면 로그인 화면 

  const dpass = await repository.login(id);
  const result =  await bcrypt.compare(pass, dpass.pass);

  if(result) {
    const token = createToken(id);
    res.cookie('x_auth', token, {maxAge: 60*60*1000, httpOnly: true})
    .status(204).redirect('/BestSeller');
  } else {
  }
}


function createToken(id) {
  return jwt.sign(
    {id:id}, '8MA27nV!8.*d'
  )
}