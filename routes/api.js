const router = require("express").Router();
const db = require("../models/workout.js");

// add exercises to most recent workout plan
// add new exercises to a NEW workout plan
// view combined weight of multiple exercises from past 7 workouts on stats page
// view total duration of each workout from the past 7 workouts on the stats page

// getting all workouts
router.get("/api/workouts", (req, res) => {
    db.find()
        .then((dbData) => {
            res.json(dbData);
        })
        .catch((err) => {
            res.json(err);
        });
});

//
router.get("/api/workouts/range", (req,res) => {
    db.find()
        .then((dbData) => {
            res.json(dbData);
        })  
        .catch((err) => {
            res.json(err);
        });
});

// POST request

module.exports = router;