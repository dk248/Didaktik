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

function passWord() {
    var testV = 1;
    var pass1 = prompt('Bitte verifiziere dich um Zugriff auf die Lernumgebung zu bekommen. Wie lautet das Passwort?','Passwort');
    while (testV < 3) {
        if (!pass1) 
        history.go(-0);
        if (pass1.toLowerCase() == "didacta") {
            alert('You Got it Right!');
            window.open('lern.html');
            break;
        } 
        testV+=1;
        var pass1 = 
        prompt('Access Denied - Password Incorrect, Please Try Again.','Passwort');
    }
    if (pass1.toLowerCase()!="password" & testV ==3) 
    history.go(-0);
	alert('Access Denied - Password three times incorrect.');
    return " ";
} 