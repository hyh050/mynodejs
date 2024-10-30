const fs = require('fs');

const dirname = "naver/daum/google/kakao"
fs.mkdirSync(dirname, {recursive: true});

const content = `
안녕하세요 네이버
구글
다음 중 하나에 입사하고 싶어용`;
// naver/daum/google/out.txt <- content 내용을 넣어 주세요
fs.writeFileSync(`${dirname}/out.txt`, content);

