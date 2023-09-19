console.log('logging...');

// log level
// 개발자 커뮤니케이션 용도의 코드 사용자를 위한 코드는 아니다
// 개발서버와 배포서버는 다르고 개발서버는 하단의 코드들을 넣지만 실제 배포 실행서버에서는 모두 지우거나 삭제해야하는 것을 권장 ( 주석도 안 됨 )
console.log('log'); // 개발 : 출력, 개발 디버깅용
console.info('info'); // 정보, 사용법.. : 파라미터, 명령어를 호출할 때 사용법 ( 순서 틀린 것 알려주거나 하는 인포메이션 )
console.warn('warn'); // 경고 : 에러는 아니지만 파라미터 잘못 주었을 때 잘못 실행할 확률일 때 처리
console.error('error'); // 에러 : 진짜 에러일 때 에러 처리

// console.clear(); // 로그 삭제

// assert
console.assert(2 === 2, '동일함'); // 조건식이 true이면 로그 출력 x
console.assert(2 === 3, '동일하지 않음'); // false인 경우에만 출력 o

// print object
const student = { name: '홍길동', age: 20, color: { default: 'red' } };
console.log(student);
console.table(student);
console.dir(student);
console.dir(student, { showHidden: true, color: false, depth: 0 });

// time
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// trace
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log('function 3!!'); // function 3!!
  console.trace();
}

f1();
// 이 방식은 blocking 방식
