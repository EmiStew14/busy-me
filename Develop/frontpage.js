//document.ready, jQuery method, wrap everything in this so it only loads java when DOM is ready.
var tasks = document.getElementById("toDo");
var current = moment().format('dddd MMMM Do, YYYY');

$("span").append(current);

 $(document).ready(function (){
    moment().calendar({
     sameDay: function (now) {
       if (this.isBefore(now)) {
        
         return ;
       } else {
         return ;
       }
     }
   });
   function hours () {
      if () {
         tasks.setAttribute("style",)
      } else {
              
      }
   };
//     //updater function (theres only 9 slots so it shouldn't be too painful worry about update update)
//         //time checker,time formater or some function for the date using moment.js function to html or hardcore it.
//     //click event for savebutton

//     //textarea in html = click event for text DONT WORRY

//     //time checker,time formater or some function for the date using moment.js function to html or hardcore it. look closely there is a div already created for you can also look 
//     //at jquery for ways to populate.

//     //main key is to select items
//     $(this).//figure out which ids and classes to grab
// // });