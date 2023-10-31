// signupController.js
import ejs from 'ejs';
import bcrypt from 'bcryptjs'
import * as repository from '../repository/yes24MemberRepository.js'

export async function signup(req, res) {
  ejs.renderFile('./template/signup.ejs').then(data => res.end(data));
}

export async function signupProc(req, res) {
  const {id, pass, name} = req.body;
  const hashPass = bcrypt.hashSync(pass, 10);
  const member = [id, hashPass, name];
  
  const result = await repository.signupProc(member);
  if(result === 'insert success') res.status(204).send('insert success')
  // if(result === 'insert success') res.redirect('/')
}