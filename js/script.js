// show current date at top of page
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);

// pulls array of stored tasks for current date only or creates empty list
var savedTasks = JSON.parse(localStorage.getItem(currentDate)) || [];
// display saved tasks to page 
var renderTasks = function () {

    // iterates over saved tasks list
    for (var i=0; i < savedTasks.length; i++) {
        // for each child of the container div 
        $(".container").children().each(function() {
            // if get-hour text is equal to the saved tasks hour 
            if ($(this).find(".get-hour").text() === savedTasks[i].hour) {
                // then add the text from the array into the task-text text area on the page
                $(this).find(".task-text").val(savedTasks[i].text)
            }
        }
    )}
};

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
})

renderTasks();