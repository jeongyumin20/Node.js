// dwitterRepository.js

import {db} from '../db/database.js' // 여러개 더 추가 될 수도 있어서 {} 사용 

// 컨트롤러에서 getAll 이름 그대로 사용하는 것을 권장
export async function getAll(){
  return db
    .execute('select id, name, left(date,10) as date, content from dwitter')
    .then((result) => result[0])
}

export async function create(id, name, content){
  return db
    .execute('insert into dwitter(id, name, date, content) values(?,?,curdate(),?)', [id, name, content])
    .then((result) => 'success 🤍' );
}

export async function getDwitter(id){
  return db
    .execute('select id, name, date, left(date, 10) as date, content from dwitter where id = ?', [id])
    .then((result) => result[0]); // result[0]result[0]
}

export async function update(id, content){
  return db
    .execute('update dwitter set content = ? where id=?', [content, id])
    .then((result) => 'success 📨');
}

export async function remove(id){
  return db
    .execute('delete from dwitter where id=?', [id])
    .then(result => 'success 📭');
}