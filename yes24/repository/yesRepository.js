// yesRepository.js

import {db} from '../db/database.js';


// getBest
export async function getBest() {
  return db
    .execute(`select bs_title, bid, bname, bname_comment, author, translator, publisher, pdate, price, dc, url, yb.bs_id
              from yes24_books yb right outer join yes24_bs_category yc 
              on yb.bs_id = yc.bs_id where yc.bs_id = 'BS'`)
    .then((result) => result);
}

// getRealTime
export async function getRealTime() {
  return db 
    .execute(`select bs_title, bid, bname, bname_comment, author, translator, publisher, pdate, price, dc, url, yb.bs_id
              from yes24_books yb right outer join yes24_bs_category yc 
              on yb.bs_id = yc.bs_id where yc.bs_id = 'RTBS'`)
    .then((result) => result);
}

// getDay
export async function geyDay() {
  return db
    .execute(`select bs_title, bid, bname, bname_comment, author, translator, publisher, pdate, price, dc, url, yb.bs_id
              from yes24_books yb right outer join yes24_bs_category yc 
              on yb.bs_id = yc.bs_id where yc.bs_id = 'DBS'`)
    .then((result) => result);

}

// getMonth
export async function getMonth() {
  return db
    .execute(`select bs_title, bid, bname, bname_comment, author, translator, publisher, pdate, price, dc, url, yb.bs_id
              from yes24_books yb right outer join yes24_bs_category yc 
              on yb.bs_id = yc.bs_id where yc.bs_id = 'MBS'`)
    .then((result) => result);
}

// gethotPrice
export async function getHotPrice() {
  return db
    .execute(`select bs_title, bid, bname, bname_comment, author, translator, publisher, pdate, price, dc, url, yb.bs_id
              from yes24_books yb right outer join yes24_bs_category yc 
              on yb.bs_id = yc.bs_id where yc.bs_id = 'HPBS'`)
    .then((result) => result);
}

// getSteady
export async function getSteady() {
    return db
      .execute(`select bs_title, bid, bname, bname_comment, author, translator, publisher, pdate, price, dc, url, yb.bs_id
                from yes24_books yb right outer join yes24_bs_category yc 
                on yb.bs_id = yc.bs_id where yc.bs_id = 'SS'`)
      .then((result) => result);
}