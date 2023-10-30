// joinController.js

import ejs from 'ejs';
import * as yesRepository from '../repository/yesRepository.js'
import bcrypt from 'bcryptjs'

// getJoin
export async function getJoinPage(req, res) {
  ejs
  .renderFile('./template/join.ejs')
  .then(data => res.end(data));
}

// post
export async function joinCreate(req, res) {
  const {id, pass, name} = req.body;
  const hashPass = bcrypt.hashSync(pass, 10);
  const params = [id, hashPass, name]
  const result = await yesRepository.joinCreate(params)

  if(result === 'insert success')  res.redirect('/login')
}