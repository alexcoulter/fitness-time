const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [
    {
      type: {type: String},
      name: String,
      duration: Number,
      distance: Number,
      weight: Number,
      reps: Number,
      sets: Number
      // type: Schema.Types.ObjectId,
      // ref: "Exercise"
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
