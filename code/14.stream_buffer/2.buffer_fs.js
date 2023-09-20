const fs = require('fs');
const fsp = require('fs').promises;
const process = require('process'); // cpu의 무언가를 확인하고 싶다

// 콜백함수 형태
// 파일 읽기 전﹒후 메모리 사용량 체크
console.log(process.memoryUsage.rss());
// 읽다가 에러뜨면 에러 출력하고 싶으면 받아와야하니 적고 아무것도 안받을거면 () 비워둔다
// 첫번째 error, 두번째 버퍼에 저장 된 것 받아온다
// data가 버퍼에 들어있는 것이다 : file.txt는 지금 c 드라이브에 하드디스트에 있다
// 자비스크립트 엔진 밖에 있는 것으로 자바스크립트로 처리하려고 하면 내부에 있어야 하니까 외부에 있는 파일을 읽어서 내부로 가지고 와서 저장을 시키는데
// 이건 영구히 저장이 아니고 임시저장을 해야하는데 양이 많으니 배열형태로 쓰고  버퍼가 생겨났고 버퍼에 저장된다 ( 내부적으로 자바스크립트 엔진이 버퍼를 만들어서 저장한다 )

fs.readFile('./file.txt', (_, data) => {
  // 읽은 데이터를  file2.txt 파일에 저장
  fs.writeFile('./file2.txt', data, () => {
    // 읽은 다음 바로라서 버퍼가 같은 버퍼라 내부적으로 tostring으로 메서드가 적용?
    console.log(process.memoryUsage.rss());
  });
  // console.log(data.toString());
});

// 프로미스 형태
console.log(process.memoryUsage.rss());
fs.promises
  .readFile('./file.txt') // 읽은 다음 버퍼에 저장되고
  .then(data => {
    //  data도 블럭 안이니까 콜백함수의 데이터 콜백 안에서만 사용 가능 블럭 끝나면 사라짐
    // 파일 저장 -> file3.tst
    fs.promises // writeFile이 promise 꺼라서 이렇게 적어서 경로를 간거고 이걸 적지 않고 fs였다면 콜백함수로 구현했어야함
      .writeFile('./file3.txt', data)
      .then(console.log(process.memoryUsage.rss()))
      .catch(console.error);
  })
  .catch(console.error);
