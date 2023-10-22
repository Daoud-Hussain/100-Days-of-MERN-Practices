const Product = require("../models/Product");
const Team = require("../models/Team");

const getAllProducts  = (req, res)=>{
    res.send("This is products from controllers");
}

const getTestProduct = async (req, res) =>{
    // const product = new Product({
    //         name: "Daoud Hussain",
    //         rollno: "SP21-BCS-102"
    // });
    // await product.save();
    res.send("This is a product test ");
}

const team =  async (req, res)=>{
    const newTeam = new Team({
        teamId: 1,
        name: "Engineering Team",
        leader: "John Doe",
        members: ["Alice", "Bob", "Charlie"],
        project: "Project X",
        creationDate: new Date(),
        description: "Responsible for Project X development",
      });
      await newTeam.save();
    // res.send(employee);
}


const employee = (req, res)=>{
    res.send(team);
}

module.exports = {employee, team};
// module.exports = {getTestProduct, getAllProducts};