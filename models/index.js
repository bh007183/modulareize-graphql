const {Schema, model} = require("mongoose")
const {isEmail} = require("validator")
const bcrypt = require("bcrypt")




const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate:{
            validator: isEmail,
            message: 'Email address must be valid'

        } ,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    password: {
        type: String,
        trim: true,
        min: [6, 'Password must be longer'],
        max: [12, 'Password must be shorter']
    },
    cats: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

})
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

userSchema.pre('save', function() {
    this.password = bcrypt.hashSync(this.password, 10)
    
  });
const User = model("User", userSchema)



const catSchema = new Schema({
    cat: {
        type: Boolean,
        default: false

    },
    

})

const Cat = model("Cat", catSchema)





module.exports = {User, Cat}

