//const functions = require('./functions.js');
const mongoose = require('mongoose');
//const { getNextSequenceValue } = require('./functions.js');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
  
    Email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true 
    },
    
    isVerified: {
    type: Boolean, default: false
    },

    password: {
        type: String,
        required: true,
        trim: true,
    },

    passwordResetToken: {
        type: String
    },

    passwordResetExpires: {
        type: Date ,
        default: Date.now
    } ,

   /*_id: {
        type: Number ,
        //default: getNextSequenceValue("productid")
    }*/

});


const User = mongoose.model("User", userSchema);
module.exports = User;