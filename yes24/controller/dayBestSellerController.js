// dayBestController.js

import ejs from 'ejs';
import * as yesRepository from '../repository/yesRepository.js';

 // daybestseller
export async function getDay(req, res) {
  const rows = await yesRepository.getListPage('DBS');
  res.json(rows);
}