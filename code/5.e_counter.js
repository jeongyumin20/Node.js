let count = 0;

// 자바스크립트의 exprot 방식
// 안의 진행이 비동기 방식이였다면 async 붙인다
export function increase() {
  count++;
}

export function getCount() {
  return count;
}
