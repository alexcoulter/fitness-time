
module.exports = function(app) {
  const db = require("../models");
  const mongoose = require("mongoose");

app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  .populate("Exercise")
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


app.get("/api/workouts/range", (req, res) => {
  console.log(new Date().setDate(new Date().getDate()-7));
  db.Workout.find({ 
    day: {
      // $gte: new Date().setDate(new Date().getDate()-7),
    $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000)
}})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/api/workouts", (req, res) => {
  newWorkout = req.body;
  newWorkout.day = new Date().setDate(new Date().getDate());
  console.log(req.body);
  db.Workout.create(newWorkout)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


app.put("/api/workouts/:id", (req, res) => {
 
  db.Workout.update(
    {_id: mongoose.Types.ObjectId(req.params.id)},
    { $push: {exercises: req.body }},
    (error, data) => {
    if (error) {
      res.send(error);
    } else {
      console.log(data);
      res.json(data);
    }
    });
});

app.get("/api/workouts/:id", (req, res) => {
  db.Workout.findOne({_id: mongoose.Types.ObjectId(req.params.id)})
  .then(dbWorkout =>  {
    res.json(dbWorkout)
  })
  .catch(err => {
    res.json(err);
  });
})
}
