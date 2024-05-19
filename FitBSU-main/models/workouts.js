const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestampes: true });

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;