// newsController.js

import ejs from 'ejs';
import * as newsRepository from '../repository/newsRepository.js';

// getAll
export async function getAll(req, res) {
  const rows = await newsRepository.getAll();
  ejs
    .renderFile('./template/list.ejs', { list : rows })
    .then(data => res.end(data));
}

// create
export async function create(req, res) {
  const { url, title, content } = req.body;
  const result = await newsRepository.create(url, title, content);
  if(result === 'success') res.redirect('/news');
}

// getNews
export async function getNews(req, res) {
  const nid = req.params.nid;
  const rows = await newsRepository.getNews(nid);
  // console.log(rows[0])

  ejs
    .renderFile('./template/content.ejs', { newsContent : rows[0] })
    .then(data => res.end(data)); 
}

// remove
export async function remove(req, res) {
  const { nid } = req.body;
  const result = await newsRepository.remove(nid);

  if(result === 'sucess') res.status(204).send('delete success!');
}