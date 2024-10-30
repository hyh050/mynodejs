const { graphqlHTTP } = require('express-graphql');
const {buildSchema} = require('graphql')
const express = require('express')

const schema = buildSchema(`
    type Query {
        hello : String!
        welcome(name: String!): String
    
    }    
`);
// resolver
const root = {
    hello: ()=>{
        return "Hello GraqhGl";
    },
    welcome: ({name}) =>{
        return `Welcome ${name}`;
    }
}

const app = express();
app.use("/graphql", 
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
)

//  http://localhost:4000/graphql
// http://localhost:4000

app.listen(4000);


