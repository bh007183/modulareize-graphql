const userResolvers = require('./user.js')
const catResolvers = require('./cat.js')

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...catResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...catResolvers.Mutation
    }

}

module.exports = resolvers