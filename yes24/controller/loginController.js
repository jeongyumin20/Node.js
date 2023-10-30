// loginController.js

import ejs from 'ejs';
import * as yesRepository from '../repository/yesRepository.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// getLoginPage 로그인 페이지
export async function getLoginPage(req, res) {
  const token = req.cookies.x_auth;
  if(token) res.redirect('/root')
  else {
    ejs
    .renderFile('./template/login.ejs')
    .then(data => res.end(data)); 
  }
} 

// getListroot 관리자 페이지 
export async function getListroot(req, res) {
  const token = req.cookies.x_auth;
  if(token) {
    const rows = await yesRepository.getListPage('BS');
    
    ejs.renderFile('./template/listLogin.ejs', {list:rows})
    .then(data => res.end(data))
  } else {
    res.redirect('/') 
  }
}

// login 처리
export async function login(req, res) {
  const {id, pass} = req.body;
  const dpass  = await yesRepository.login(id)

  const result = await bcrypt.compare(pass, dpass.pass);
  // console.log(result);
  
  if(result) {
    const token = creatToken(id);
    res.cookie('x_auth', token, {maxAge: 60*60*1000, httpOnly : true})
      .status(200).redirect('/root')
  } else {
    res.send(403).end()
  }
}

// logout 처리
export async function logout(req, res) {
  const token = req.cookies.x_auth

  if(token) {
    res.cookie('x_auth', token, {maxAge : 1, httpOnly : true})
      .status(200).end()
  }
}

function creatToken(id) {
  return jwt.sign({id : id}, 'LjTr6T7!25}U')
}

// book update ( 도서 추가 )
export async function update(req, res) {
  const { bname, bname_comment, author, translator, publisher, price, dc, url, bs_id } = req.body;
  const params = [bname, bname_comment, author, translator, publisher, price, dc, url, bs_id];

  const result = await yesRepository.update(params);
  if (result === 'update success') res.redirect('/root');
}

// reupdateModal
export async function reupdateModal(req, res) {
  const bid  = req.params.bid;
  const row = await yesRepository.reupdateModal(bid);
  res.json(row);
}

// book reupdate ( 도서 수정 )
export async function reupdate(req, res) {
  const { bid, bname, bname_comment, author, translator, publisher, price, dc, url, bs_id } = req.body;
  const params = [ bname, bname_comment, author, translator, publisher, price, dc, url, bs_id, bid ]
  
  const result = await yesRepository.reupdate(params);
  if(result === 'success reupdate') res.status(204).send('success reupdate')
}

// book remove
export async function remove(req, res) {
  const {bid} = req.body;
  const result = await yesRepository.remove(bid);

  if(result === 'success remove') res.status(204).send('success remove');
}