{
  // let num; 선언이 되어져서 여기에 들어간 것처럼 function 들어간 변수를 이렇게 된다는 것과 같다
  // var num; 이것과 같다
  // 함수 안에서의 this
  function hello(num) {
    this.num = num;
    console.log(num);
    // console.log(this);
  }

  // hello(); // this : 함수를 호출한 부모를 말한다 : global 객체
  console.log(num); // 여기에서는 아직 실행 전이라 num 결과 나오지 않는다 // ReferenceError: num is not defined
  hello(100);
  console.log(num); // 위에서 num 정의가 되었기 때문에 여기서도 된다 100

  // 객체 안에서의 this
  class Test {
    constructor(name) {
      this.name = name;
      console.log(this);
    }
  }

  const t = new Test('hong'); // this:  Test { name: 'hong' }  객체 자기 자신
}

// 함수 안에서의 this는 호출한 부모 : global 객체
// 객체 안에서의 this는 객체 자기 자신
