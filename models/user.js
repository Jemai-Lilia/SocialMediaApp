const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    password: String,
    bio : String,
    picture : String,
    birthdate : Date,
    role : {
        type : String,
        enum:['admin' , 'user'],
        default : 'user'
    }
})

module.exports=mongoose.model('users', userSchema)