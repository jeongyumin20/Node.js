import { increase, getCount } from './5.e_counter.js';
// 여기서는 레퍼런스할 객체 필요 없다
// 실제 내 것처럼 사용이 가능 ( 여기서 정의한 것처럼 )
// ( 노드는 counter로 빌려 와서 쓴다 )

increase();
increase();
increase();
console.log(getCount());
