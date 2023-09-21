/* const fs = require('fs');
const _ = require('underscore'); */

/* // es6 나오기 전 배열 데이터 라이브러리 사용법 ( node 2009 / es6 2015년 )
const array = [1, 2];
_.forEach(array, num => {});

array.forEach; */

/**
 * 제목 : 사진 폴더 정리 Script 생성
 * 요구사항
 * 1. 동영상(mp4), 이미지(png) 파일들이 함께 있는 폴더를
 *    각각 동영상과 이미지를 분리하여 관리
 * 2. 동영상 파일은 video 폴더에 png 파일은 capture 폴더에 각각 이동하여 정리
 * */

const process = require('process');
const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');
const { log } = require('console');

// 현재 경로 리턴해주는 api 적용해보자
// 윈도우 'c://dev/node/code/15.mpm' 이렇게 적으면 안된다 ( 윈도우는 역슬래시이므로 이렇게 픽스해서 주면 실행하는 os마다 경로값 가져올 때 다르다는 메세지 뜰 수 있다 )
// 현재 경로를 workingDir로 설정하여 하위 폴더로 video, capture 폴더 생성
/* const workingDir = process.cwd();
const videoDir = path.join(workingDir, 'video');
const captureDir = path.join(workingDir, 'capture'); */

// 실행하는 명령어의 매개변수를 받아 workingDir로 설정하여
// 하위 폴더로 video, capture 폴더 생성
const folder = process.argv[2];
const workingDir = path.join(process.cwd(), folder);
const videoDir = path.join(workingDir, 'video');
const captureDir = path.join(workingDir, 'capture');

if (!fs.existsSync(workingDir)) fs.mkdirSync(workingDir);
if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir);
if (!fs.existsSync(captureDir)) fs.mkdirSync(captureDir);

// 현재 경로의 모든 파일을 읽는다
fs.promises
  .readdir(workingDir)
  .then(files => {
    // console.log(files);
    fileCheck(files);
  })
  .catch(console.error);

// 파일 체크해서 확장자 확인
// 여기 안에서 if..if.. 계속 체크하면 뎁스 길어진다
// mp4 체크하는 함수 따로 png 체크하는 함수 따로 만들고
// 이 체크하는 함수 안에서 두개를 다 호출!
function fileCheck(files) {
  files.forEach(file => {
    if (isVideoFile(file)) {
      // video 폴더로 파일을 이동
      move(file, videoDir);
      // console.log('video ->> ' + file);
    } else if (isImageFile(file)) {
      // capture 폴더로 이동
      move(file, captureDir);
      // console.log(file);
    }
  });
}

// video 파일 여부를 체크
function isVideoFile(file) {
  const fileObject = path.parse(file);
  if (fileObject.ext == '.mp4') return true;
}

// img 파일 여부 체크
function isImageFile(file) {
  const fileObject = path.parse(file);
  if (fileObject.ext == '.png' || fileObject.ext == '.jpg') return true; // true false는 blooean 값이므로 '' 로 타입을 바꾸면 안됨
}

// 파일 이동
function move(file, targetDir) {
  // 파일이동 경로만들기
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  // 파일 이동 -> promise
  fs.promises
    .rename(oldPath, newPath) // 경로까지 같이 바뀐다
    // 받아서 할게 없다면 then은 적지 않고 에러는 잡아야하니 적어줌
    .catch(console.error);
}
