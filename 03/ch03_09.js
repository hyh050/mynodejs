const fs = require('fs');

const result = fs.readFileSync('test.json', 'utf-8');
// console.log(result);
const data = JSON.parse(result); // 여기서의 핵심 내용입니다. 
console.log(data["data"]);
const posts = data["data"]; // array
posts.forEach(x=> {
    console.log(x['title'], x['content'], x['author']);    
})
;