// loginRepository.js

import {db} from '../db/database.js'

export async function login(id) {
  return db
    .execute('select pass from dwitter where id = ?', [id])
    .then((result) => result[0][0])
}

