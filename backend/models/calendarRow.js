const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarRowSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    properties: {
        type: Object,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

module.exports = mongoose.model('CalendarRow', calendarRowSchema);
