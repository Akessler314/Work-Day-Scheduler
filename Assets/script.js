//Variable to hold the current date 
var day = new Date()


//Loads the current date into the header when the page loads
$(document).ready(function() {
  var currentDayElement = $('#currentDay');
  currentDayElement.html(day.toDateString());
  });
  