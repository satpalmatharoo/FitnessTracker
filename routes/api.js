//define all routes and implent them
//take from  api.js end routes all apis

const router = require("express").Router();
const Workout = require("../models/workout.js");


//Add exercises to the most recent workout plan.
router.get (`/api/workouts`, (req, res) => {
  Workout.aggregate([
    {
      $addFields:{
        totalDuration:{
          $sum:"$exercises.duration"
        }
      }
    }
  ])
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
    }),

  router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration"},
        },
      }
    ]).sort({
      _id:-1
    }).limit(7).then(data => {res.json(data)} ).catch(err => {res.json(err)})
  });

  router.post(`/api/workouts`, (req, res) =>{
    Workout.create(req.body)
    .then(dbExcerise => {
      res.json(dbExcerise);
  }).catch(err => {
    res.status(400).json(err);
  });
})


router.put ("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, {$push: {"exercises":req.body}}).then(dbExcerise => {
    res.json(dbExcerise);
  }).catch(err => {
    res.status(400).json(err);
  })
}),


module.exports = router;