$(function() {
  /* global moment */
var latitude;
var longitude;
var latitude1;
var longitude1;



var count = 0;



// $("#next").on("click",function(){
//   count++;
// });

  $("#search").on("click",function(event){
    event.preventDefault();
     $(".results").show();

    var userData = {
      animal: $('input[name="animaltype_name"]:checked')[0].id,
      gender: $('input[name="gender_name"]:checked')[0].id,
      age: $('input[name="age_name"]:checked')[0].id
    }

     console.log(userData.animal);

    $.get("/search/pets/"+userData.animal+"/"+userData.gender+"/"+userData.age,function(data){
      console.log("User Data Animal");
      console.log(userData.animal);
      console.log(data[0]);
      console.log('data: ' + JSON.stringify(data));

      function display(count){
      $("#result").html(data[count].animal_name);
      $("#bio").html(data[count].bio);
      $("#resultsub").html(" Species: " + data[count].animal_type + " | Age: " + data[count].age);
      $("#photo").attr("src",data[count].photo);
      };

      display(count);

      $("#next").on("click", function(){
        count++;
        display(count);
      });



      $("#match").click(function(){
      $("#matchScreen").show();

      $(".popup-close").click(function(){
      $("#matchScreen").hide();
      $(".results").hide();
    });
  });

    });

  });

    $("#submit").on("click",function(event){
    event.preventDefault();
    console.log('submitted');

    var userData = {
      animalname: $("#petName").val().trim(),
      animal: $('input[name="animaltype_name"]:checked')[0].id,
      gender: $('input[name="gender_name"]:checked')[0].id,
      age: $('input[name="age_name"]:checked')[0].id,
      location: $("#dropdownmenu").val(),
      bio: $("#bioBox").val(),
      photo: $("#photoUpload").val().trim()
    }

    $("#matchScreen").show();
    $(".popup-close").click(function(){
    $("#matchScreen").hide();

    })



  

    // console.log(userData);

    $.post("/new",userData,function(data){

    });

  });


  




// $.get("/search", function(data) {
//   // console.log(data);

//   if (data.length !== 0) {

//     for (var i = 0; i < data.length; i++) {

//       $("#bio").html(data[i].bio);
//       // console.log(data);

 
//       }

//       // var row = $("<div>");
//       // row.addClass("locations");
//       // row.append('<table style="width:100%"><tr><th>Location</th><th>Address</th><th>Distance</th></tr>')

//       // row.append("<tr><td>" + data[i].name + "</td><td>" + data[i].address + "</td><tr>");
//       // latitude = data[i].latitude;
//       // longitude = data[i].longitude;
//       // calcCrow(latitude,longitude,latitude1,longitude1);
  
//       // // row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

//       // $("#locationanswer").prepend(row);

//     }

//   });



// function calcCrow(lat1, lon1, lat2, lon2) 
//     {
//       var R = 6371; // km
//       var dLat = toRad(lat2-lat1);
//       var dLon = toRad(lon2-lon1);
//       var lat1 = toRad(lat1);
//       var lat2 = toRad(lat2);

//       var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
//         Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
//       var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
//       var d = R * c;
//       return d;
//       console.log(d);
//     }

//     // Converts numeric degrees to radians
//     function toRad(Value) 
//     {
//         return Value * Math.PI / 180;
//     }

// When user chirps (clicks addBtn)
// $("#chirp-submit").on("click", function(event) {
//   event.preventDefault();

//   // Make a newChirp object
//   var newChirp = {
//     author: $("#author").val().trim(),
//     body: $("#chirp-box").val().trim(),
//     created_at: moment().format("YYYY-MM-DD HH:mm:ss")
//   };

//   console.log(newChirp);

//   // Send an AJAX POST-request with jQuery
//   $.post("/api/new", newChirp)
//     // On success, run the following code
//     .done(function() {

//       var row = $("<div>");
//       row.addClass("chirp");

//       row.append("<p>" + newChirp.author + " chirped: </p>");
//       row.append("<p>" + newChirp.body + "</p>");
//       row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

//       $("#chirp-area").prepend(row);

//     });

  // Empty each input box by replacing the value with an empty string




// When the page loads, grab and display all of our chirps

});