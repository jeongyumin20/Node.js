// replyController.js

import ejs from 'ejs';
import * as replyRepository from '../repository/replyRepository.js';

export async function replyGetAll(req, res) {
  const nid = req.params.nid;
  const rows = await replyRepository.replyGetAll(nid);

  res.json(rows);
}

export async function replyCreate(req, res) {
  const { nid, content } = req.body;
  const result = await replyRepository.replyCreate(nid, content);

  if(result === 'success') res.status(201).send('create success~'); 
}

export async function replyDelete(req, res) {
  const { rid } = req.body;
  const result = await replyRepository.replyDelete(rid);

  if(result === 'success') res.status(204).send('delete success')
}