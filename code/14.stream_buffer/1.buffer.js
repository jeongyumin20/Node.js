const fs = require('fs');

const buf = Buffer.from('Hi~');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);
console.log(buf.toString()); // 문자열 출력

// 저장소든 어디든 상수화 되어진 값들을 가져오면 좋다
const buf2 = Buffer.alloc(buf.length); // buf 사이즈 변동에 맞춰서 같이 변경이 된다 : 픽스된 값은 효율성 떨어짐
console.log(buf2.length);
console.log(buf2);
buf.copy(buf2); // buf의 내용을 복사하여 buf2에 저장
console.log(buf2);

const newBuf = Buffer.concat([buf, buf2]);
console.log(newBuf.toString());
