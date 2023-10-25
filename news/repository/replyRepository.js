// replyRepository.js

import {db} from '../db/database.js';

export async function replyGetAll(nid) {
  return db
    .execute('select rid, content, nid, redate from news_reply where nid = ?', [nid])
    .then((result) => result[0])
}

export async function replyCreate(nid, content) {
  return db 
    .execute('insert into news_reply(content, nid, redate) values(?, ?, sysdate())', [content, nid])
    .then((result) => 'success')
}

export async function replyDelete(rid) {
  return db 
    .execute('delete from news_reply where rid =?', [rid])
    .then((result) => 'success')
}