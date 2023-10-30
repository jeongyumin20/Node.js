// yes24Controller.js
import ejs from 'ejs';
import * as repository from '../repository/yes24Repository.js';


export async function getList(req, res) {
  ejs
  .renderFile('./template/list.ejs', {})
  .then((data) => res.end(data));
};

export async function getListPage (req, res) {
  const page = req.params.page;
  const bsid = req.params.bsid;
  // console.log(page, bsid);

  const rows = await repository.getListPage(bsid)
  res.json(rows);
}