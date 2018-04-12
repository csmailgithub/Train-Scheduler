$(document).ready(function() {
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

var database = firebase.database();

// 2. Button for adding New Trains
$("#add-employee-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var empName = $("#employee-name-input").val().trim();
  var empRole = $("#role-input").val().trim();
  var empStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
  var empRate = $("#rate-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newEmp = {
    name: empName,
    role: empRole,
    start: empStart,
    rate: empRate
  };

  // Uploads employee data to the database
  database.ref().push(newEmp);

  // Logs everything to console
  console.log(newEmp.name);
  console.log(newEmp.role);
  console.log(newEmp.start);
  console.log(newEmp.rate);
  
});