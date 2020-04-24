let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4
      }
    ]
  },
  {
    day: new Date(new Date() - 6 * 60 * 60 * 24 * 1000),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date() - 5 * 60 * 60 * 24 * 1000),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 160,
        reps: 20,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date() - 4 * 60 * 60 * 24 * 1000),
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 30,
        weight: 400,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date() - 3 * 60 * 60 * 24 * 1000),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 225,
        reps: 5,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date() - 2 * 60 * 60 * 24 * 1000),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date() - 1 * 60 * 60 * 24 * 1000),
    exercises: [
      {
        type: "cardio",
        name: "Swimming",
        duration: 30,
        distance: 2
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
