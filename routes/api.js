const router = require("express").Router();
const { application } = require("express");
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
router.post("/api/workouts", (req,res) => {
    db.Workout.create({})
        .then(data => { 
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

// PUT request for adding
router.put("/api/workouts/:id", (req,res) => {
    db.Workout.findByIdAndUpdate(req.params.id,
        {$push: {exercises: req.body}}
    )
    .then(data => res.json(data))
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;