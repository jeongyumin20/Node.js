// yesRepository.js

import {db} from '../db/database.js';

// getListPage
export async function getListPage(bsid) {
  return db
    .execute('select * from view_yes24 where bs_id = ?', [bsid])
    .then((result) => result[0]);
}

// joinCreate
export async function joinCreate(params) {
  return db 
    .execute('insert into yes24_member(id, pass, name, date) values(?, ?, ?, curdate())', params)
    .then((result) => 'insert success')
}

// login
export async function login(id) {
  return db 
    .execute('select pass from yes24_member where id =?', [id])
    .then((result) => result[0][0])
}

// update ( addbook )
export async function update(params) {
  return db 
    .execute('insert into yes24_books(bname, bname_comment, author, translator, publisher, pdate, price, dc, url, bs_id) values(?, ?, ?, ?, ?, curdate(), ?, ?, ?, ?)', params)
    .then((result) => 'update success')
}

// reupdateModal
export async function reupdateModal(bid) {
  return db
    .execute('select * from yes24_books where bid =?', [bid])
    .then((result) => result[0][0]);
}

// reupdate 
export async function reupdate(params) {
  return db
    .execute('update yes24_books set bname =?, bname_comment =?, author =?, translator =?, publisher =?, price =?, dc =?, url =?, bs_id =? where bid =? ', params)
    .then((result) => 'success reupdate');
}

// remove 
export async function remove(bid) {
  return db
    .execute('delete from yes24_books where bid=?', [bid])
    .then(result => 'success remove')
}