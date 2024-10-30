const http = require('http'); // commonjs import 

// req => HttpRequest, res => HttpResponse
const server = http.createServer((req, res)=>{
    res.statusCode = 200; // OK 
    res.setHeader("Content-Type", "text/plain"); // client 제공해줄 컨텐트 데이터 타입은 text
    res.write("Hello World");
    res.end();
});

server.listen(4500);