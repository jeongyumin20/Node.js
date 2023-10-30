// steadySellerController.js

import ejs from 'ejs';
import * as yesRepository from '../repository/yesRepository.js';

// getSteady
export async function getSteady (req, res) {
  const rows = await yesRepository.getListPage('SS');
  res.json(rows);
}