const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    useremail: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    transactiontitle : {type:String, required:true, trim:true },
    transactionamount : {type:Number, required:true, trim:true},
    transactionmonth : {type:String, required:true, trim:true},
    transactiontype : {type:String, required:true, trim:true}
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;