// yesRepository.js

import {db} from '../db/database.js';

// getBest
export async function getListPage(bsid) {
  return db
    .execute('select * from view_yes24 where bs_id = ?', [bsid])
    .then((result) => result[0]);
}