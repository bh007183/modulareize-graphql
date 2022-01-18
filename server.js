const express = require('express');
const {ApolloServer} = require("apollo-server-express")
const db = require("./connection/config")
const app = express()
const {resolvers, typeDefs} = require("./schema")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 8080

const server = new ApolloServer({
    resolvers,
    typeDefs
})

const serverStart = async function(){
    await server.start()
    server.applyMiddleware({ app });

}


serverStart()


db.once("open", function(){
    app.listen(PORT, function(){
        console.log(`http://localhost:${PORT}`)
        console.log(`http://localhost:${PORT}/graphql`)
    })
})




