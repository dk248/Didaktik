$(function() {
	// Enable accordion
	var acc = document.getElementsByClassName("accordion");

	for (var i = 0; i < acc.length; i++) {
		acc[i].onclick = function() {
		  this.classList.toggle("active");
		  var panel = this.nextElementSibling;
		  if (panel.style.maxHeight){
		    panel.style.maxHeight = null;
		  } else {
		    panel.style.maxHeight = panel.scrollHeight + "px";
		  } 
		}
	}

});

function header() {
      var x = document.getElementById("header");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  }