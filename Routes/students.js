const express = require('express');
const router = express.Router();
const {getAllStudents, getTestStudents} = require("../Controllers/student");

router.route('/').get(getAllStudents);
router.route('/test').get(getTestStudents);

module.exports = router;