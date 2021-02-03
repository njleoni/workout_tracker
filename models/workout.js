const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
    {
      name: {
      type: String,
      trim: true,
      required: "Enter a name for exercise"
    },
      type: {
      type: String,
      trim: true,
      required: "Enter the type of exercise"
    },
      duration: {
      type: Number,
      required: "Enter exercise duration in minutes"
    },
      weight: {
      type: Number,
    },
      sets: {
      type: Number,
    },
      reps: {
      type: Number,
    },
      distance: {
      type: Number,
    }
    }
    ]
},
    {
      toJSON: {
        virtuals: true
      }
    }

);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;