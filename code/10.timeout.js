// callback 함수 동작하는데 걸리는 시간
console.log('timeout check!');
console.time('timeout 0'); // 기능에만 적용해서 알고싶다면 레이블을 같이 줘야한다
setTimeout(() => {
  console.timeEnd('timeout 0'); // 콜스택 들어오는 시간까지 확인
  console.log('setTimeout~!!');
}, 1000); // 1초?
