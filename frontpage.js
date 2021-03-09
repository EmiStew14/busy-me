// universal variables
var current = moment().format('dddd MMMM Do, YYYY');
var time = moment().format('H');
var tasks = document.getElementsByClassName("time-block");

// keep date up top and refreshes each day to next date
$("span").append(current);

// color function for time/tasks
    function hours() {

        $(".hour").each(function(){
            var isPm = $(this).text().includes("p");
            console.log(isPm);
            var selectTime = parseInt($(this).text().split(" ")[0]);
            if (isPm && selectTime!==12) {
                selectTime+=12;
            }
            console.log(selectTime, time);
             if (selectTime < time) {
                 $(this).siblings("textarea").addClass("past");
            };
             if (selectTime > time) {
                 $(this).siblings("textarea").addClass("future");
             };
             if (selectTime == time) {
                $(this).siblings("textarea").addClass("present");
             };
        });
    };
    hours();

// loading storage to stay on refresh
function loadIt() {

     var values = [],
        keys = Object.keys(localStorage),
         i = keys.length;
    
     while ( i-- ) {
        values.push( localStorage.getItem(keys[i],("textarea").val) );
        }
    $("textarea").append(values);
     return values;
};

// save button saves,calls and displays tasks
$(".saveBtn").on("click", function(){
    const schedAct = $(this).siblings("textarea").val();
    const btnID = $(this).attr("id");
    localStorage.setItem(btnID, schedAct);
  })
  $("#9-toDo").val(localStorage.getItem("9"));
  $("#10-toDo").val(localStorage.getItem("10"));
  $("#11-toDo").val(localStorage.getItem("11"));
  $("#12-toDo").val(localStorage.getItem("12"));
  $("#1-toDo").val(localStorage.getItem("1"));
  $("#2-toDo").val(localStorage.getItem("2"));
  $("#3-toDo").val(localStorage.getItem("3"));
  $("#4-toDo").val(localStorage.getItem("4"));
  $("#5-toDo").val(localStorage.getItem("5"));
