

// pulls array of stored tasks or creates empty list
var savedTasks = JSON.parse(localStorage.getItem('savedTasks')) || [];

// // display saved tasks to page 
// var renderTasks = function () {
//     // iterates over saved tasks list
//     for (var i=0; i < savedTasks.length; i++ ) {
//         // need to check if tasks are for current date
//         if 
    
//         // if they are, update p w/ text from array
//     }
// }

// show current date at top of page
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);

// save task on save button click
$(".saveBtn").on("click", function() {
    // creating saved tasks array
    var savedTasksArr = [];

    // when clicking on save btn, it saves all tasks to array
    $(".container").children().each(function() {
        // saves values in array
        savedTasksArr.push({
          text: $(this)
            .find(".task-text")
            .val()
            .trim(),
          hour: $(this)
            .find(".get-hour")
            .text()
            .trim()
        })
    // checks if array has already been saved for current date
    if (!(localStorage.getItem(currentDate))) {
        localStorage.setItem(currentDate, JSON.stringify(savedTasksArr));
    }
    else {
        localStorage.removeItem(currentDate);
        localStorage.setItem(currentDate, JSON.stringify(savedTasksArr));
    }
});


    // // save task to local storage
    // localStorage.setItem("savedTasks", savedTasks)





})