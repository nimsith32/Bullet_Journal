const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true, trim: true },   
    useremail: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    userpassword: {
        type: String,
        required:true,
        trim: true,
        minlength: 5
    }  
});

const User = mongoose.model('User', userSchema);

module.exports = User;