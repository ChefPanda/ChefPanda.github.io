// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("food1");
    var y = document.getElementsByClassName("food2");
    var z = document.getElementsByClassName("food3");
    var m = document.getElementsByClassName("food4");
    var n = document.getElementsByClassName("food5");

    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
       y[i].style.display = "none";
       z[i].style.display = "none";
       m[i].style.display = "none";
       n[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    y[myIndex-1].style.display = "block";
    z[myIndex-1].style.display = "block";
    m[myIndex-1].style.display = "block";
    n[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
