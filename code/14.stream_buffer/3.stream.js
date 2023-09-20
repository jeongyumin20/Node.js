const fs = require('fs');

// 파일을 읽어오는 방법 --> Stream
const readStream = fs.createReadStream('./file.txt', { highWaterMark: 64 });
const buf = []; // 배열 객체입니다
// 'data' 약속 되어져있는 이벤트 호출하는 키
readStream.on('data', chunk => {
  buf.push(chunk);
  console.count('data');
  // console.log(chunk.toString());
  // readStream.close();
});
/* // 읽는 작업 끝나면 다리 끊는다
readStream.on('close', () => {
  console.log(buf.length);
  console.log(buf);
  console.log(buf.join(' '));
  console.log('-- finished --');
});
 */
