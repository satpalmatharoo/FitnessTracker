const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    
    day: {
        type: Date,
        default: Date.now
    },

    excercises: [
        {
        type: {String,
    },
    
    name: {
        type: String,
    },
    duration: {
        type: Number,
    },

    reps: {
        type: Number,
    },

    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    },
}
],
totalDuration: {
    type: Number
}

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = {Workout};