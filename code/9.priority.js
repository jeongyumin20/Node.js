console.log('code 1');

setTimeout(() => {
  console.log('setTimeout!');
}, 0);

console.log('code 2');
setImmediate(() => {
  // 바로 실행으로 셋타임과 우선순위 큰 차이 없다
  console.log('setImmediate!');
});

console.log('code 3');
process.nextTick(() => {
  // 우선순위 가장 높았는데 여기서는?
  console.log('nextTick!!');
}); // non-blocking
