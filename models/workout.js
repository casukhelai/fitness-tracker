const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    // date
    day: {
        type: Date,
        default: Date.now,
    },

    // exercises
    exercises: [
        {
            exerciseType: {
                type: String,
                required: true
            },
            exerciseName: {
                type: String,
                required:true
            },
            duration: {
                type: Number,
                required: true
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }


        }
    ]
}, { toJSON: { virtuals: true }});

workoutSchema.virtual("totalDuration")