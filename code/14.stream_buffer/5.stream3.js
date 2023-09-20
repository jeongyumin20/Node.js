// readStream을 이용하여 file.txt 파일의 내용을 16 바이트씩 읽어서
// file-stream.txt 파일 안에 wrtieStream을 이용하여 저장

const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', { highWaterMark: 16 });
const writeStream = fs.createWriteStream('./file-stream.txt');

// 16바이트 읽어서 보내고 반복!
readStream
  .on('data', chunk => {
    writeStream.write(chunk);
    // writeStream.write(console.count('data') + '' + chunk); ???
  })
  .on('close', () => {
    console.log('-- finish --');
  });

// 윤정님 방식!
// 안에 파일을 자꾸 새로 생성을 해버려서 파일이 리셋되는 것
// data 자체가 데이터 close 만나지 않으면 계속 가져올 때까지 반복하는데
// 16씩 가져오면서 파일을 새로 생성해버리니 리셋되어 마지막 구간의 16비트 구간만 가져와 출력 되었다
fs.createReadStream('./file.txt', { highWaterMark: 16 }).on('data', chunk => {
  fs.createWriteStream('./file-stream.txt').on('close', () => {
    console.log('-- finish --');
  });
});
