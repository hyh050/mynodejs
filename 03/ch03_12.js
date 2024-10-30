const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res)=> { // req : HttpRequest, res: HttpReponse
    const path = url.parse(req.url, true).pathname;
    // true : query string parsing 할지 마지 여부, query string 
    // http://localhost:3000/json?name=lee&age=30 

    if(path == '/json') { // http://localhost:4500/json 
        res.setHeader('Content-Type', 'application/json;charset=UTF-8');
        const data = {
            name: 'lee', age: 40, address: '서울시 양천구 신정동'
        }
        const result = JSON.stringify(data); // json string
        res.end(result);
    }else if(path == '/test'){
        // http://localhost:4500/test
        // test2.json 의 내용을 JSON 포멧으로 클라이언트 응답을 보내주세요 
        res.setHeader('Content-Type', 'application/json;charset=UTF-8');
        const data = fs.readFileSync('test2.json', 'utf-8');
        const result = JSON.parse(data);    
        const posts = result['data'];
        // biz logic 

        res.end(JSON.stringify({
            data: posts
        }));
        // res.end(data);
    }
}).listen(4500);
