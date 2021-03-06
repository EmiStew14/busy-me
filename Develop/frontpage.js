//document.ready, jQuery method, wrap everything in this so it only loads java when DOM is ready.
var tasks = document.getElementById("toDo");
var current = moment().format('dddd MMMM Do, YYYY');
var present = moment().format('h');
console.log(present);
var past = moment ().format('h');
console.log(past);
var future = moment ().format('h');
console.log(future);

$("span").append(current);

//   $(document).ready(function (){
    function hours() {
     moment().calendar({
      sameDay: function (now) {
        if (this.isAfter(now)) {
         past === $("toDo").addClass("past");
          return ;
      };
      if (this.isBefore(now)) {
          future === $("toDo").addClass("future");
          return
      };
      if (this.isNow()) {
          present === $("toDo").addClass("present");
      };
       }
    });
};
    function saveMe() {
        var userInput = document.getElementById("toDo").nodeValue;
        localStorage.setItem("userInput",userInput);
        console.log(userInput);
    };
    
    function loadIt() {
        var userInput = localStorage.getItem("userInput");
        document.getElementById("toDo").value = userInput;
        console.log(userInput);
    };
    $(".saveBtn").click(saveMe());
    console.log("bacon");
//     //updater function (theres only 9 slots so it shouldn't be too painful worry about update update)
//         //time checker,time formater or some function for the date using moment.js function to html or hardcore it.
//     //click event for savebutton

//     //textarea in html = click event for text DONT WORRY

//     //time checker,time formater or some function for the date using moment.js function to html or hardcore it. look closely there is a div already created for you can also look 
//     //at jquery for ways to populate.

//     //main key is to select items
//     $(this).//figure out which ids and classes to grab
// // });