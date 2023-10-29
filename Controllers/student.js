const { mongo } = require("mongoose");
const Student = require("../models/Student");

const getAllStudents  = async (req, res)=>{
    //Displaying all the student records
    // let data = await Student.find({});

    //Displaying all the student records after sorting with names
    // let data = await Student.find({}).sort("name");

    //Displaying all the student records after sorting with name and selecting name and rollno to display
    let data = await Student.find({}).sort("name").select("name rollno");
    res.send({data});
    // await Student.deleteMany({});
}

const getTestStudents = async (req, res) =>{
    let specificData = await Student.find({name: "Daoud Hussain"});
    res.send({specificData});}

module.exports = {getTestStudents, getAllStudents};