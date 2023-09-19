let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.increase = increase; // 앞 이름은 외부에서 사용할 이름으로 진짜 함수의 이름을 숨길 수 있다
module.exports.getCount = getCount; // = 뒤는 export 하려는 함수 이름 ( 모듈 내부의 이름 )
