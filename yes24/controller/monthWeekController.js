// monthWeekController.js

import ejs from 'ejs';
import * as yesRepository from '../repository/yesRepository.js';

// getMonth
export async function getMonth (req, res) {
  const rows = await yesRepository.getListPage('MBS');
  res.json(rows);
}
