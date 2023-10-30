// bestSellerController.js

import ejs from 'ejs';
import * as yesRepository from '../repository/yesRepository.js';


// bestseller
export async function getList(req, res) {
  const rows = await yesRepository.getListPage('BS');
  ejs
  .renderFile('./template/list.ejs', {list:rows})
  .then(data => res.end(data))
}

export async function getListPage(req, res) {
  const rows = await yesRepository.getListPage('BS');
  res.json(rows);
}