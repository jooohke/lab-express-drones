const express = require("express");
const droneModel = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  droneModel
    .find()
    .then((dronesDocuments) => {
      res.render("drones/list.hbs", { drones: dronesDocuments });
    })
    .catch((error) => console.log(error));
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs")
  // ... your code here
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  droneModel.create(req.body).then((droneDocument) => {
    res.redirect("/drones")})
    .catch((error) => {
      console.log(error)
    })
});


router.get("/drones/:id/edit", (req,res,next) => {
  droneModel.findById(req.params.id)
  .then((droneDocument) => {res.render("drones/update-form.hbs", {
      drone: droneDocument
    });
  })
  .catch((error) => {
    console.log(error)
  })
})

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  droneModel.findByIdAndUpdate(req.params.id, req.body)
  .then((drone) => {res.redirect("/drones/"+ drone._id)})
  .catch((error) => console.log(error))
});






router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
