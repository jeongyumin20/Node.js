// database.js

import mysql from 'mysql2';

const pool = mysql.createPool ({
host : 'localhost',
port : '3306',
user : 'root',
password : 'dovmf1010',
database : 'hrdb2019'
});

/* const db = {
init : function() {
  return mysql.createConnection(dbInfo);
},
connect : function(conn) {
  conn.connect(function(err) {
      if(err) console.error('mysql 연결 에러 : ' + err);
      else console.log('mysql 연결 성공');
    });
  }
}; */

export const db = pool.promise(); // pool 안에 있는 것들을 promise 