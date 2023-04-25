const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    useremail: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    todotitle : {type:String, required:true, trim:true}
});


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;