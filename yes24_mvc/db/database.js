// database.js
// mysql - 콜백함수 (리턴 불가능)﹒mysql2 콜백함수 & 프로미스 

import mysql from 'mysql2';

const pool = mysql.createPool ({
  host : 'localhost',
  port : '3306',
  user : 'root',
  password : 'dovmf1010',
  database : 'hrdb2019'
  });

  export const db = pool.promise();