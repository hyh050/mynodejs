const express = require('express');
const moment = require('moment');
const path = require('path');
const Database = require('better-sqlite3');

// db setting
const db_name = path.join(__dirname, 'post.db');
const db = new Database(db_name);
const create_sql = `
    create table if not exists posts(
        id integer primary key autoincrement,
        title varchar(255),
        content text,
        author varchar(100), 
        createdAt datetime default current_timestamp,
        count integer default 0
    );
    create table if not exists comments (
        id integer primary key autoincrement,
        content text not null,
        postId integer,
        foreign key(postId) references posts(id)
    );
`;

db.exec(create_sql);

const app = express();
const PORT = 3000;
app.use(express.json());

// GET localhost:3000/posts?page=2 -> list 
app.get("/posts", (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = 5;
    const offset = (page-1)*limit;
    const sql = `
        select id, title, author, createdAt, count from posts
        order by createdAt desc limit ? offset ? 
    `;
    const stmt = db.prepare(sql);
    const rows = stmt.all(limit, offset);

    const total_sql = `select count(*) as count from posts`;
    const row = db.prepare(total_sql).get();
    const totalPages = Math.ceil(row.count / limit);

    res.json({items: rows, currentPage: page, totalPages:totalPages});
});

// GET localhost:3000/posts/1
app.get("/posts/:id", (req, res) => {
    const id = req.params.id;

    const sql = `select * from posts where id = ?`; // ? <= id replace
    const count_sql = `update posts set count = count + 1 where id = ?`;
    db.prepare(count_sql).run(id); // const stmt = db.prepare(count_sql); stmt.run(id) 
    const post = db.prepare(sql).get(id) // const stmt = db.prepare(sql); const post = stmt.get(id) 
    res.status(200).json({item: post});
});

app.post("/posts", (req, res)=> {
    const {title, content, author} = req.body;
    const sql = `insert into posts(title, content, author) 
        values(?,?,?)`;
    const result = db.prepare(sql).run(title, content, author);
    console.log(`result is ${JSON.stringify(result)}`);
    res.status(201).json({id: result.lastInsertRowid, 
        title: title, content:content});
});

app.put("./posts/:id", (req, res)=>{
    const id = req.params.id;
    const {title, content } = req.body;
    const sql = 'uqdate posts set title = ?, content = ? where id = ?';
    try{
        const result = db.prepare(sql).run(title, content, id);
        console.log(` update result : ${JSON.stringify(result)}`);
        if(result.changes){
            res.status(200).json({error: `post not found`});
        }else{
            res.status(404).json({error: 'post not found'})
        }
    }catch(e){
        res.status(500).json({error:e})
    }
});

app.listen(PORT);