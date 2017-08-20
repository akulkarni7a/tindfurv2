// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Pet = sequelize.define("tindfur", {
  animal_name: {
    type: Sequelize.STRING
  },
  animal_type: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  bio: {
    type: Sequelize.STRING
  },
  photo: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
Pet.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Pet;
