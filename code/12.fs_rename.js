const fs = require('fs'); // 프로미스만 쓸거라면 fs.promises

// fs에서는 3가지 방식으로 제공

// synchoronous : renameSync(old, new) : 권장 x
/* try {
  fs.renameSync('./test.txt', './test-new.txt');
  console.log('-- rename complete --');
} catch (error) {
  console.log('-- error --');
  console.log(error);
}
console.log('--- test!! ---'); */

// callback : rename(old, new, callback)
/* fs.rename('./test.txt', './test-new.txt', error => {
  console.log(error);
}); */

// promise : rename(old, new)
fs.promises
  .rename('./test.txt', './test-new.txt')
  .then(() => console.log('-- rename complete --'))
  .catch(console.error) // console에 error이 있으니까
  .finally(() => console.log('-- terminate --'));
