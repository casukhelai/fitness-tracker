const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // date
    day: {
        type: Date,
        default: Date.now,
    },

    // exercises
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required:true
            },
            duration: {
                type: Number,
                required: true
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

// workoutSchema.virtual("totalDuration").get(function() {
//     return this.exercises.reduce((total, exerciseName) => {
//         return total + exercise.duration
//     }, 0);
// })

const Workout = mongoose.model("Workout", WorkoutSchema);
module.export = Workout;