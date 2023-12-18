$(document).ready(function () {
  
  function displayCurrentDay() {
    var currentDate = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDate);
  }

 
  function createTimeBlocks() {
    var container = $(".container");
    var currentHour = dayjs().hour();

    for (var hour = 9; hour <= 17; hour++) {
      var timeBlock = $("<div>").addClass("row time-block");
      var hourCol = $("<div>").addClass("col-1 hour").text(formatHour(hour));
      var textAreaCol = $("<textarea>").addClass("col-10 description").attr("data-hour", hour);
      var saveBtnCol = $("<button>").addClass("col-1 saveBtn").html('<i class="fas fa-save"></i>');

      if (hour < currentHour) {
        timeBlock.addClass("past");
      } else if (hour === currentHour) {
        timeBlock.addClass("present");
      } else {
        timeBlock.addClass("future");
      }

      
      var storedEvent = localStorage.getItem("event_" + hour);
      if (storedEvent) {
        textAreaCol.val(storedEvent);
      }

      
