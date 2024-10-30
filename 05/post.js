const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/list", (req, res)=> {
    let data = {data:[]};
    try{
        data = JSON.parse(fs.readFileSync("test.json", "utf-8"));
    }catch(e){
        data = {data:[]}
    }
    res.render("list", {posts: data.data});
});

app.get("/create", (req,res) => {
    res.render("create");
})

// POST 요청으로부터 데이터를 받기 위해서 설정 
app.use(express.urlencoded({extended: true}));

let maxId = 0; // sequence 
const initId = () => {
    try{
        const result = fs.readFileSync("test.json", "utf-8");
        const data = JSON.parse(result)
        const posts = data["data"]; // 게시글 목록 
        const idList = posts.map(x=>parseInt(x.id));
        // [1,2,3,4,8, 5,6,7]
        maxId = Math.max(...idList);
        // Math.max(1,2,3,4,5,7,8,9)
    }catch(e){
        maxId = 0;
    }
}

initId();

const getNextId = () => {
    return ++maxId;
}

app.post("/create", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    let readed;
    try{
        readed = JSON.parse(fs.readFileSync("test.json", "utf-8"));
    }catch(e){
        readed = {
            data: []
        }
    }
    const newPost = {
        id: getNextId(),
        title: title,
        content: content,
        author: author,
        createdAt: new Date(),
        count: 0
    }
    readed['data'].push(newPost);
    fs.writeFileSync("test.json", JSON.stringify(readed), "utf-8");
    
    res.redirect("/list");
});

app.get("/view/:id", (req, res) => {
    const id = req.params.id;
    let data = {data:[]};
    try{
        data = JSON.parse(fs.readFileSync("test.json", "utf-8"));        
    }catch(e){
        data = {data:[]};
    }
    let post = {};
    data.data.forEach(item=>{
        if(item.id == id) {
            post = item;
            item.count = item.count + 1;
        }
    });
    fs.writeFileSync("test.json", JSON.stringify(data), "utf-8");
    res.render("view", {post: post});
});

app.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    let data = {data:[]};
    try{
        data = JSON.parse(fs.readFileSync("test.json", "utf-8"));        
    }catch(e){
        data = {data:[]};
    }
    let post = {};
    data.data.forEach(item=>{
        if(item.id == id) {
            post = item;            
        }
    });    
    res.render("edit", {post: post});
});

app.post("/edit/:id", (req, res)=>{
    const id = req.params.id;
    const { title, content, author } = req.body;
    const data = JSON.parse(fs.readFileSync("test.json", "utf-8"));
    data.data.forEach(item=> {
        if(item.id == id){
            item.title = title;
            item.content = content;
            item.author = author;
        }
    });
    fs.writeFileSync("test.json", JSON.stringify(data), "utf-8");
    res.redirect(`/view/${id}`);
});

app.get("/delete/:id", (req, res)=>{
    
});

app.listen(PORT);