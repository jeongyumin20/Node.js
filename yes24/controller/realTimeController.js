// realtimeController.js

import ejs from 'ejs';
import * as yesRepository from '../repository/yesRepository.js';

// realTime
export async function getRealTime(req, res) {
  const rows = await yesRepository.getListPage('RTBS');
  res.json(rows);
}