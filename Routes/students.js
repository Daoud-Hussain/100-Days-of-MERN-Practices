const express = require('express');
const router = express.Router();
const {getAllStudents, getTestStudents} = require("../Controllers/student");

router.get('/', getAllStudents);
router.get('/test', getTestStudents);

module.exports = router;