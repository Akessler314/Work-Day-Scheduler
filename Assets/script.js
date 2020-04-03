//Variable to hold the current date 
var day = new Date()
//Variable to get the current time between 0-23
var time = day.getHours()

//Loads the current date into the header when the page loads
$(document).ready(function() {
  var currentDayElement = $('#currentDay');
  currentDayElement.html(day.toDateString());
  console.log(time)

  if (time === 21) {
    $("#hourTen").addClass("future")
  }
  });
  

function addHighlight() {
  //function that will be used to highlight the Divs with past presant and future 
}


  //WHAT NEEDS TO HAPPED 
  // We need to create a variable for time only  DONE 

  // we need to creat a function on load to change the CSS of each hour block to add the correct color 

  // we need to creat an event listener for each save button 

  // that event listener needs a function that will save what is in the textarea to local storage and then add that back to the textarea on load 



  //adds a class to a targeted ID 
// $("#hourNine").addClass("future")
