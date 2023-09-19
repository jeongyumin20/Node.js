const fs = require('fs').promises;
const os = require('os');

// test.txt 파일을 읽어서 console에 출력
fs.readFile('./test.txt', 'utf-8') // utf 대문자 상관 없고 - 8 상관 없다
  .then(data => {
    console.log(data);
  })
  .catch(console.error);

// test.txt 파일에 문자열 덮어쓰기
/* fs.writeFile('./test.txt', 'hello~ javascript coders!!')
  .then(console.log('-- write complete --'))
  .catch(console.error);
 */

// test.txt 파일에 데이터 추가하기
// fs.appendFile('./test.txt', `hello~ javascript coders!!${os.EOL}`)
fs.appendFile('./test.txt', 'hello~ javascript coders!!' + os.EOL)
  .then(console.log('-- append complete --'))
  .catch(console.error);

// test.txt 파일을 복사하기
/* fs.copyFile('./test.txt', './test-copy.txt') // 없으면 파일 만들어준다
  // .then() 리턴하는 값이 정의되지 않아 출력하지 않을 거라 생략
  .catch(console.error); */

// 'sub-folder' 생성
// fs.mkdir('sub-folder').then(console.log).catch(console.error);
