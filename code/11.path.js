const path = require('path');

// 윈도우 : c:\dev\node\code\tete.js
// 맥, 리눅스 : /users/test

// path.dirname + '/image' (x) : 명령어 구현이 되어있으면 리턴받아서 처리를 권장하고 접합연산자로 하는 것은 지양

console.log(__dirname); // global에 있는 디렉토리
console.log(__filename); // global에 있는 파일

console.log(path.sep); // 경로 구분자 : 기억 필요!!
console.log(path.delimiter); // 환경 변수 구분자

// basename
console.log(path.basename(__filename)); // basename: 현재 실행하는 파일 기준
console.log(path.basename(__dirname));

// dirname
console.log(path.dirname(__dirname));

// extension
console.log(path.extname(__filename)); // 확장자

// parse
// 파일이 가지고 있는 현재 정보들을 객체로 리턴 그 안에 있는 확장자만 꺼내 쓸 수 있다
const parsed = path.parse(__filename); // 오브젝트 형태로 출력
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed); // string 형태로 변환 ( 주소 받은 것을 문자로 한 줄 )
console.log(str);

// normalize
console.log(path.normalize('./folder//////sub'));
// 외부에서 입력을 받아서 사용을 할 때 슬래시나 역슬래시 많이 받아서 사용할 때 정상적인 표준화된 패스 형태로 만들어 주는 작업

// join
console.log(__dirname + '/' + 'image'); // 접합연산자 윈도우와 맥 호환 문제로 권장 x
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
console.log(path.join(__dirname, 'image', 'test'));
