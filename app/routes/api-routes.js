// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
var Pet = require("../models/petconnection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/search/pets/:animal_type?/:gender?/:age?", function(req, res) {
    console.log('search 2')
    // var dbQuery = "SELECT * FROM pets WHERE animal_type = ? AND gender = ? AND age = ?";
   
    if(req.params.animal_type){
      Pet.findAll({
        where: {
          animal_type: req.params.animal_type,
          gender: req.params.gender,
          age: req.params.age
        }
      }).then(function(result){
        // return res.json(result);
        console.log("XXXXXX");
        console.log("animal_type: "+req.params.animal_type);
        // console.log("gender: "+req.params.gender);
        // console.log("age: "+req.params.age);
        console.log(result);
        //res.render('test', {result: result.dataValues});



        res.json(result);
      })
    }
    else{
      Pet.findAll({})
        .then(function(result){
          return res.json(result);

        });
   
    }

    // connection.query(dbQuery,[req.query.animal,req.query.gender,req.query.age], function(err, result) {
    //   if(err){
    //     // console.log(err);
    //   } else{

       

    //   var newresult = result[0];
    //   console.log(newresult);
    //   newresult.stringify = JSON.stringify(newresult);
    //   // $("#Flavor").html(newresult.)
    //   // console.log("newresult: "+newresult);
    //   // move to html routes
    //   

    // }
    // });


    });

  app.get("/search", function(req, res) {
    console.log('search')
  // 


  //   var dbQuery = "SELECT * FROM pets WHERE animal_type = ? AND gender = ? AND age = ?";

  //   connection.query(dbQuery,[req.query.animal,req.query.gender,req.query.age],function(err, result) {
  //     if (err){
  //       console.log(err)
  //     } else {
  //       console.log(result);
  //     var newresult = result[0];
  //     // move to html routes
    // Pet.findOne({
    //   where: {
        
    //   }
    // })
      
      res.render('search');

  //     // console.log(newresult);
  //   }
    });

  app.post("/new", function(req,res){
    console.log("Chirp Data:");
    console.log(req.body);

    Pet.create({
      animal_name: req.body.animalname,
      animal_type: req.body.animal,
      gender: req.body.gender,
      age: req.body.age,
      location: req.body.location,
      bio: req.body.bio,
      photo: req.body.photo
    }).then(function(results){
      res.end();
    });

    });


  




  
};
  // Add a chirp
  // app.post("/api/new", function(req, res) {

  //   console.log("Chirp Data:");
  //   console.log(req.body);

  //   var dbQuery = "INSERT INTO chirps (author, body, created_at) VALUES (?,?,?)";

  //   connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
  //     console.log("Chirp Successfully Saved!");
  //     res.end();
  //   });

  // });


