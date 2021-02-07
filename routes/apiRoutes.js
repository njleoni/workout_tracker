const Workout = require("../models/workout");

module.exports = function (app) {
  // Gets and retrieves exercises in the Mongo database
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  });

  app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true, runValidators: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });
};

