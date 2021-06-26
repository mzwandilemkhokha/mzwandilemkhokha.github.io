/*Toggle between showing and hiding the navigation menu
function myFunction() {
    var x = document.getElementById("mylinks");
    if (x.style.display === "block") {
        x.style.display = "none"
    }
    else {
        x.style.display ="block"
    }

}*/

function myFunction() {
    var x = document.getElementById("Topnav");
    if (x.className === "container topnav") {
      x.className += " container responsive";
    } else {
      x.className = "container topnav";
    }
  }

