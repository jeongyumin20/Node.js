// hotPriceController.js

import ejs from 'ejs';
import * as yesRepository from '../repository/yesRepository.js';

// getHotPrice
export async function getHotPrice (req, res) {
  const rows = await yesRepository.getListPage('HPBS');
  res.json(rows);
}
