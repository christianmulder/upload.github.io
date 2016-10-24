$(document).ready(function(){

    

});

function myFunction() {
    	console.log("clicked")
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
    }