const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const progressGroupSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Progress'
        }
    ],
    owner:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('ProgressGroup', progressGroupSchema);
