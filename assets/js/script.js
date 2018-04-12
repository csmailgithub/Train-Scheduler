$(document).ready(function(){


var config = {
    apiKey: "AIzaSyDz5nqWcWSnKPtAKMxiETxdkmMgbNpitAY",
    authDomain: "trainschedule-4fe05.firebaseapp.com",
    databaseURL: "https://trainschedule-4fe05.firebaseio.com",
    projectId: "trainschedule-4fe05",
    storageBucket: "trainschedule-4fe05.appspot.com",
    messagingSenderId: "799313740898"
};

firebase.initializeApp(config);

var database = firebase.database();

setInterval(function(){
$('.current-time').html(moment().format('hh:mm:ss A'))
}, 1000);


// $('.content').hide();

//   // Declare variables
// var database = firebase.database();
// var editTrainKey = '';
// var fbTime = moment();
// var newTime;


// Button for adding New Trains
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#employee-name-input").val().trim();
    var trainDestination = $("#role-input").val().trim();
    var firstTrain = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
    var trainFreq = $("#rate-input").val().trim();
  
    // Creates local "temporary" object for holding train data 
    var newTrain = {
      name: trainName,
      role: trainDestination,
      start: firstTrain,
      rate: trainFreq
    };
  
    // Uploads employee data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.role);
    console.log(newTrain.start);
    console.log(newTrain.rate);
  
    // Alert
    alert("Train added to the schedule!");
  
    // Clears all of the text-boxes
    $("#employee-name-input").val("");
    $("#role-input").val("");
    $("#start-input").val("");
    $("#rate-input").val("");
  });

  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().role;
    var firstTrain = childSnapshot.val().start;
    var trainFreq = childSnapshot.val().rate;
  
    // Employee Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(firstTrain);
    console.log(trainFreq);
  
    // Prettify the employee start
    var firstTrainPretty = moment.unix(firstTrain).format("MM/DD/YY");
  
    // Calculate the months worked using hardcore math
    // To calculate the months worked
    var empMonths = moment().diff(moment.unix(firstTrain, "X"), "months");
    console.log(empMonths);
  
    // Calculate the total billed rate
    // var empBilled = empMonths * trainFreq;
    // console.log(empBilled);
  
    // Add each train's data into the table
    $("#employee-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
    firstTrainPretty + "</td><td>" + empMonths + "</td><td>" + trainFreq + "</td><td>" + empBilled + "</td></tr>");
  });
});