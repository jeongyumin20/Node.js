// yes24MemberRepository.js

// view_yes24 테이블에 대한 CRUD
import {db} from '../db/database.js' // db 연동 전담

export async function signupProc(member) {
  return db
    .execute('insert into yes24_member2(id, pass, name, mdate) values(?, ?, ?, curdate())', member)
    .then((result) => 'insert success');
}

export async function login(id) {
  return db 
    .execute('select pass from yes24_member2 where id =?', [id])
    .then((rows) => rows[0][0])
}