//document.ready, jQuery method, wrap everything in this so it only loads java when DOM is ready.
// var save = document.getElementsByClassName("saveBtn");
var current = moment().format('dddd MMMM Do, YYYY');
var time = moment().format('H');
// var selectTime = document.getElementsByClassName("hour").innerHTML;
var tasks = document.getElementsByClassName("time-block");

$("span").append(current);

//   $(document).ready(function (){
    function hours() {
    //  moment().calendar({
    //   sameDay: function (now) {
        // currentTime = parseInt(selectTime);
        // console.log(selectTime);

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
    //     for (let i = 9; i < 18; i++) {
    //     let currentTime = $(`#${i}`).attr("id");
    //     console.log(currentTime);
        
    //     if (this.isAfter(now)) {
    //      past < now;
    //      $(`#${i}`).addClass("past");
    //       return ;
    //   } if (this.isBefore(now)) {
    //       future > now;
    //       $(`#${i}`).addClass("future");
    //       return
    //   }if (this.isNow()) {
    //       present == now;
    //       $(`#${i}`).addClass("present");
    //        return
    //   };
    //    }
    };
    hours();
//     });
// };
// for (let i = 9; i < 17; i++) {
//     let selectTime = $(`#${i}`).attr("id");
//     console.log(selectTime);
// };

// function saveMe() {
//     var userInput = document.getElementById("toDo").value;
//     // userInput.push();
//     localStorage.setItem(selectTime,userInput);
//     console.log(userInput);
// };
function loadIt() {

    // if (!tasks) {
    //     tasks = {
    //       toDo: [],
    //       inProgress: [],
    //       inReview: [],
    //       done: []
    //     };
    //   }
     var output = localStorage.getItem(selectTime, userInput);
     var values = [],
        keys = Object.keys(localStorage),
         i = keys.length;
    
     while ( i-- ) {
        values.push( localStorage.getItem(keys[i],("textarea").val) );
        }
    $("textarea").append(values);
     return values;
};

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
//     $(document).ready(function (){
//     $(".saveBtn").on("click",(){
//         var butn = $(this).attr("id");
//         // $(".hour").val(butn);
//         console.log(butn);
//         saveMe();
//         console.log(saveMe);
//         loadIt();
//         console.log(loadIt);
//     });
// });

//     //updater function (theres only 9 slots so it shouldn't be too painful worry about update update)
//         //time checker,time formater or some function for the date using moment.js function to html or hardcore it.
//     //click event for savebutton

//     //textarea in html = click event for text DONT WORRY

//     //time checker,time formater or some function for the date using moment.js function to html or hardcore it. look closely there is a div already created for you can also look 
//     //at jquery for ways to populate.

//     //main key is to select items
//     $(this).//figure out which ids and classes to grab
// // });