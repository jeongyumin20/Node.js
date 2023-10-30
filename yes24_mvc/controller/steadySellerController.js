// steadySellerController.js
import * as repository from '../repository/yes24Repository.js'

export async function getListPage(req, res) {
  const rows = await repository.getListPage('SS')
  res.json(rows);
}