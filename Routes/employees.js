const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  employee
    .find()
    .sort("-lastName")
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      throw err;
    });
});

router.get("/:employee", function (req, res, next) {
  employee
    .findById(req.params.employee)
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      throw err;
    });
});

router.put("/:employee", function (req, res, next) {
  employee
    .findByIdAndUpdate(req.params.employee, { $set: req.body }, { new: true })
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      throw err;
    });
});
module.exports = router;
