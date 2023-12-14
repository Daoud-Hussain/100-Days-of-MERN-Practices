const { mongo } = require("mongoose");
const Student = require("../models/Student");

const getAllStudents  = async (req, res)=>{
    //Displaying all the student records
    // let data = await Student.find({});

    //Displaying all the student records after sorting with names
    let allData = await Student.find({}).sort("name");
    // res.send({allData});

    //Displaying all the student records after sorting with name and selecting name and rollno to display
    let selectedData = await Student.find({}).sort("name").select("name rollno");
    res.send({selectedData});
    // await Student.deleteMany({});
}

const getTestStudents = async (req, res) =>{
    let specificData = await Student.find({name: "Daoud Hussain", rollno: "SP21-BCS-102"});
    res.send({specificData});}

module.exports = {getTestStudents, getAllStudents};