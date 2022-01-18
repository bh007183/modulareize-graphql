
const {Cat} = require("../../models")
const resolvers = {
    Query: {
        cats: async(parent, args) => {
            


        }
    },
    Mutation: {
        createCat: async(parent, args) => {
            console.log(args)
        }
    }
};
module.exports = resolvers