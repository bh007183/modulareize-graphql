

const {User} = require("../../models")
const resolvers = {
    Query: {
        me: async(parent, args) => {
            


        }
    },
    Mutation: {
        createUser: async(parent, args) => {
            try{
                let data = await User.create(args)
                console.log(data)
            }catch(err){
                console.log(err)
                throw new Error(err)
            }
           
        }
    }
};
module.exports = resolvers