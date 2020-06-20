// show current date at top of page

//get current date and save to variable 
var currentDate = moment().format("dddd, MMMM Do");
console.log(currentDate);
$("#currentDay").text(currentDate);