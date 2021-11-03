//define all routes and implent them
//take from  api.js end routes all apis

const router = require("express").Router();
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
    })

    
//});

//Add new exercises to a new workout plan


//View the combined weight of multiple exercises from the past seven workouts on the `stats` page.


//View the total duration of each workout from the past seven workouts on the `stats` page.