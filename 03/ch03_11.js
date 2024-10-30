const http = require('http');
const url  = require('url');

// http://localhost:3000/user
http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname; // /user
    if(path == "/hello") { // http://localhost:3000/hello 
        res.end("<h1>World</h1>");
    }else if(path == "/world"){  // http://localhost:3000/world 
        res.end("<h1>Hello</h1>");
    }else if(path == "/") { // http://localhost:3000/
        res.end("<h1>Home</h1>")
    }
}).listen(4500);
