const {gql} = require('apollo-server-express')

const typeDefs = gql`
type User{
    _id: ID!
    email: String!
    cats: [Cat]
}

type Cat{
    _id: ID!
    cat: Boolean!

}

type Query{
    me:User
    cats:[Cat]
}

type Mutation{
    createUser(email: String!, password: String!): User
    createCat(cat: Boolean): Cat
}


`
module.exports = typeDefs