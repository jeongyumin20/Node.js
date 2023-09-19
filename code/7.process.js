// 이미 만들어진 것으로 let이 아닌 const 사용
const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid); // 프로세스 아이디
console.log(process.ppid); // 프로세스 부모의 아이디
console.log(process.platform);
console.log(process.env); // 모든 환경변수 {} 로 출력
console.log(process.uptime);
console.log(process.cwd()); // 현재 경로 출력 ( 파일 경로 알아야할 때 좋음 )
console.log(process.cpuUsage());

// setTimeout(콜백함수, 3000); -> non-blocking
// 3초후에 setTimtout 출력

// process에서는 지원 불가능 process.setTimeout() x
// global.setTimeout() 생략 가능
setTimeout(() => {
  console.log('setTimeout!!');
}, 3000);

// nextTick(콜백함수); -> non-blocking
// 비동기식 처리 중 가장 우선순위가 높다
process.nextTick(() => {
  console.log('nextTick!!');
});
