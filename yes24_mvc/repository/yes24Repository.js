// yes24Repository.js

// view_yes24 테이블에 대한 CRUD
import {db} from '../db/database.js' // db 연동 전담

export async function getListPage(bsid) {
  return db
    .execute('select * from view_yes24 where bs_id = ?', [bsid])
    .then((rows) => rows[0]);
}

