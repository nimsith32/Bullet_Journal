const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema ({
    useremail: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    journaltitle : {type:String, reqired:true, trim:true},
    journaldate : {type:Date, required:true},
    journalentry : {type:String, required:true, trim:true}
});


const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;