const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
  teamId: {
    type: Number,
    description: "Unique identifier for the team",
  },
  name: {
    type: String,
    description: "Name of the team",
  },
  leader: {
    type: String,
    description: "Leader or manager of the team",
  },
  members: [
    {
      type: String,
      description: "Members of the team",
    },
  ],
  project: {
    type: String,
    description: "Current project the team is working on",
  },
  creationDate: {
    type: Date,
    description: "Date when the team was created",
  },
  description: {
    type: String,
    description: "Description of the team and its responsibilities",
  },
});

const Team = model("Team", teamSchema);

module.exports = Team;
