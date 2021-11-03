//define all routes and implent them
//take from  api.js end routes all apis

const router = require("express").Router();
const { Router } = require("express");
const workout = require("../models/workout.js");

//Add exercises to the most recent workout plan.
router.get ("/workout", (req, res) => 
   workout.aggregrate ([
        {
          $addFields: {
            totalDuration: { $sum: "$excerises.duration" } ,
            totalWeight: { $sum: "$excerises.weight" },
          }
        }
    ]).then(dbExcerise => {
        res.json(dbExcerise);
    }).catch(err => {
        res.status(400).json(err);
    }),

router.put ("/workout + id", (req, res) => {
  workout.findOneAndUpdate (
    {"_id": req.params.id},
    {$push: {"excerise":excerise}},
    {new:true},
    
  ]).then(dbExcerise => {
    res.json(dbExcerise);

  }).catch(err => {
    res.status(400).json(err);
  })
}),

router.post("/workout", (req, res) =>{
  workout.create(req.body)
  .then(dbExcerise => {
    res.json(dbExcerise);
  })
}).catch(err => {
  res.status(400).json(err);
}),

router.get("/workout/range", (req, res) => {
  workout.aggregrate([
    {
      $addFields: {
        totalDuration: { $sum: "exercises.duration"},
        totalWeight: {$sum: "$excercise.weight"},
      },
    }
  ])



//View the combined weight of multiple exercises from the past seven workouts on the `stats` page.


//View the total duration of each workout from the past seven workouts on the `stats` page

module.exports = router;