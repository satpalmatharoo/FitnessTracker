//define all routes and implent them
//take from  api.js end routes all apis

const router = require("express").Router();
const { Router } = require("express");
const workout = require("../models/workout.js");

//Add exercises to the most recent workout plan.
router.get (`/`, async (req, res) => 
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

router.put ("/:id", (req, res) => {
  workout.findOneAndUpdate (
    {"_id": req.params.id},
    {$push: {"excerise":req.body}},
    {new:true},
    
  ).then(dbExcerise => {
    res.json(dbExcerise);

  }).catch(err => {
    res.status(400).json(err);
  })
}),

router.post(`/`, (req, res) =>{
  workout.create(req.body)
  .then(dbExcerise => {
    res.json(dbExcerise);
}).catch(err => {
  res.status(400).json(err);
});
}));

router.get("/range", (req, res) => {
  workout.aggregrate([
    {
      $addFields: {
        totalDuration: { $sum: "exercise.duration"},
        totalWeight: {$sum: "$exercise.weight"},
      },
    }
  ])
});
router.get('/health', (req, res) => {
  const data = {
      uptime: process.uptime(),
      message: 'Ok',
      date: new Date()
  }

  res.status(200).send(data);
});

module.exports = router;