// show current date at top of page
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);

// create event listener for click on task item
$(".task-info").on("click", "p",  function () {
    // once clicked, get current text within p, if nothing make it an empty string
    var text = $(this).text().trim() || "";
    // create <textarea> element
    var textArea = $("<text-area>").addClass("form-control").text(text);
    console.log(textArea.text());
    // replace p w/ text area
    $(this).replaceWith(textArea);
    textArea.trigger("focus");
})
