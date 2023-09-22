/**
 * 제목 : 사진 폴더 정리 Script 생성
 * 요구사항
 * 1. 동영상(mp4), 이미지(png) 파일들이 함께 있는 폴더를
 *    각각 동영상과 이미지를 분리하여 관리
 * 2. 동영상 파일은 video 폴더에 png 파일은 capture 폴더에 각각 이동하여 정리
 * */

const fs = require('fs');
const path = require('path');
const process = require('process');

const folder = process.argv[2];
const workingDir = path.join(process.cwd(), folder);
const videoDir = path.join(workingDir, 'video');
const captureDir = path.join(workingDir, 'capture');

if (!fs.existsSync(workingDir)) fs.mkdirSync(workingDir);
if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir);
if (!fs.existsSync(captureDir)) fs.mkdirSync(captureDir);

// 분리될 video 파일과 capture 파일 생성 : mkdir
// 생성시 파일이 있다면? 생성하지 않는다! : if 조건문으로

// 경로 설정 필요 현재 내 디렉토리 경로와 비디오 캡쳐파일 각 경로 설정

// 해당 작업 경로에 있는 파일 모두 읽기
fs.promises
  .readdir(workingDir)
  .then(files => {
    fileCheck(files);
  })
  .catch(console.error);

// 파일 체크함수 : 전체 파일을 하나씩 돌면서 맞는 확장자 폴더에 넣기
function fileCheck(files) {
  files.forEach(file => {
    if (checkVideo(file)) {
      moveFile(file, videoDir);
    } else if (checkPng(file)) {
      moveFile(file, captureDir);
    }
  });
}

// 비디오인지 png인지 체크
function checkVideo(file) {
  const fileExt = path.extname(file);
  if (fileExt == '.mp4') return true;
  // return fileExt == '.mp4' ? true : false;
  // 삼항연산자 사용시 return을 붙여야 호출한 곳으로 값이 넘어간다. 변수로 받지 않아도 되는 것은 앞에 const fileExt가 존재해서
  // 추후 다시 복습시 물어본대로 실행해서 되는지 보기
}

function checkPng(file) {
  const fileExt = path.extname(file);
  if (fileExt == '.png' || fileExt == '.jpg') return true;
  // fileExt == '.png' ? true : false;
}

/* function checkVideo(files) {
  files.forEach(file => {
    // 매개변수로 받는게 배열이 아니다! 하나씩 배열을 돌면서 돌고 있는 인덱스 하나씩을 보내주니까
    path.extname(file) == '.video' ? true : false;
  });
}

function checkPng(files) {
  files.forEach(file => {
    path.extname(file) == '.png' ? true : false;
  });
} */

// 파일 이동!
function moveFile(file, targetDir) {
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);

  fs.promises.rename(oldPath, newPath).catch(console.error);
}
