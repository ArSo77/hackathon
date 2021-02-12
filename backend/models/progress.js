const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const progressSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    unit: {
        type: String,
        require: true
    },
    owner:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    values: [{
        type: Object,
        require: true
    }],
});

module.exports = mongoose.model('Progress', progressSchema);
