const { Schema, Model, model } = require("mongoose");

const employeeSchema = new Schema({
  employeeId: {
    type: Number,
    description: "Unique identifier for the employee",
  },
  firstName: {
    type: String,
    description: "First name of the employee",
  },
  lastName: {
    type: String,
    description: "Last name of the employee",
  },
  email: {
    type: String,
    format: "email",
    description: "Email address of the employee",
  },
  phoneNumber: {
    type: String,
    description: "Phone number of the employee",
  },
  hireDate: {
    type: String,
    format: "date",
    description: "Date of employment",
  },
  jobTitle: {
    type: String,
    description: "Job title or position",
  },
  department: {
    type: String,
    description: "Department or team where the employee works",
  },
  salary: {
    type: Number,
    description: "Salary of the employee",
  },
});

const Employee = new model("Employee", employeeSchema);

module.exports = Employee;
