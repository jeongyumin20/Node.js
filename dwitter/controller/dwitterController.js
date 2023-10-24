// dwitterController.js

import * as dwitterRepository from '../repository/dwitterRepository.js'; // 모든 함수들 
import ejs from 'ejs';

/** getAll **/
export async function getAll(req, res) {
  const rows = await dwitterRepository.getAll();
  ejs
    .renderFile('./template/index.ejs', { list:rows })
    .then(data => {
      res.end(data); });
}

/* create */
export async function create(req, res) {
  const { id, name, content } = req.body;
  const result = await dwitterRepository.create(id, name, content);
  if(result === 'success 🤍') res.redirect('/dwitter');
}

/* getDwitter */ 
export async function getDwitter(req, res) {
  const id = req.params.id;
  const rows = await dwitterRepository.getDwitter(id);
  ejs
    .renderFile('./template/index.ejs', { list:rows })
    .then(data => res.end(data)); 
}

/* update */
export async function update(req, res){
  const { id, content } = req.body;
  const result = await dwitterRepository.update(id, content)
  if(result === 'success 📨') res.status(204).send('update success!');
}

/* remove (delete 이름 사용시 자바스크립트 제공함수로 오류 발생) */
export async function remove(req, res) {
  const { id } = req.body;
  const result = await dwitterRepository.remove(id)
  if(result === 'success 📭') res.status(204).send('delete success!');
}