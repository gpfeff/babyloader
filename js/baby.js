// "Dad, where do child elements come from?"
// "Well, when two parent elements love each other very much..."
// (I'm really sorry for that)

// Enter estimated date of conception in Year, Month, Date format
// Keep in mind it counts from 0, so January is 0 and December is 11. It counts from 1 for the days. Weird? Yes.
var conceptionDate = new Date(2014,0,1);

// Baby ETA in Year, Month, and Date format
// Keep in mind it counts from 0 for the month so January is 0 and December is 11. It counts from 1 for the days. Weird? Yes.
var dueDate = new Date(2014,9,1);

// Today's date
var today = Date.today()

// Days until due date
var daysToGo = Math.round(((dueDate - Date.today())/1000)/(24*60*60))

// Add daysToGo to page
$(document).ready(function() {      
    $('#days-to-go').text(daysToGo + " ");
});

// Progress Bar
// Length of progress bar
var progressBarLength = Math.round(((dueDate - conceptionDate)/1000)/(24*60*60))

var progressAsOfToday = Math.round(((dueDate - today)/1000)/(24*60*60)) 

var progressAmount = 100 - ((progressAsOfToday / progressBarLength)*100)
$(document).ready(function() {      
    $( "#progressbar" ).val(progressAmount);
});