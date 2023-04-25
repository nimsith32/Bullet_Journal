const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    useremail: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    eventtitle : {type:String, required:true, trim:true},
    eventstart : {type:Date, required:true, trim:true},
    eventend : {type:Date, required:true, trim:true},
    eventcat : {type:String, required:true, trim:true}
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;