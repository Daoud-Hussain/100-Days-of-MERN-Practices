const express = require('express');
const router = express.Router();

router.get("/", function (req, res, next) {
  team
    .find()
    .sort("name")
    .then((team) => {
      res.json(team);
    })
    .catch((err) => {
      throw err;
    });
});

router.delete("/:team", function (req, res, next) {
  team
    .findByIdAndDelete(req.params.team)
    .then((team) => {
      res.json(team);
      console.log("Team Deleted Successfully");
    })
    .catch((err) => {
      throw err;
    });
});
module.exports = router;