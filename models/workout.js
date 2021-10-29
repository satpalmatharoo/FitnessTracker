const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
    },
    excercise: {
        type: String,
    },
        name: {
            typ
        }

})

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;