const { mongo } = require("mongoose");
const Student = require("../models/Student");

const getAllStudents  = async (req, res)=>{
    let data = await Student.find({}).sort("name");
    res.send({data});
    // await Student.deleteMany({});
}

const getTestStudents = async (req, res) =>{
    let specificData = await Student.find({name: "Daoud Hussain"});
    res.send({specificData});}

module.exports = {getTestStudents, getAllStudents};