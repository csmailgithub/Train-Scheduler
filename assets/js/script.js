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

    setInterval(function(){
    $('.current-time').html(moment().format('hh:mm:ss A'))
  }, 1000);


  $('.content').hide();
  
});