const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    date: {
        type: String,
        default: new Date().toISOString().slice(0, 10)
    },
    startTime: {
        type: String,
        required: false
    },
    endTime: {
        type: String,
        required: false
    },
    categories: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('task', taskSchema);