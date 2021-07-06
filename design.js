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

          //function for adding scroll panel
          $(function () { // wait for document ready
            // init
            var controller = new ScrollMagic.Controller();

            // define movement of panels
            var wipeAnimation = new TimelineMax()
                // animate to second panel
                .to("#slideCont", 0.5, { z: -150 })		// move back in 3D space
                .to("#slideCont", 1, { x: "-25%" })	// move in to first panel
                .to("#slideCont", 0.5, { z: 0 })				// move back to origin in 3D space
                // animate to third panel
                .to("#slideCont", 0.5, { z: -150, delay: 1 })
                .to("#slideCont", 1, { x: "-50%" })
                .to("#slideCont", 0.5, { z: 0 })
                // animate to forth panel
                .to("#slideCont", 0.5, { z: -150, delay: 1 })
                .to("#slideCont", 1, { x: "-75%" })
                .to("#slideCont", 0.5, { z: 0 });

            // create scene to pin and link animation
            new ScrollMagic.Scene({
                triggerElement: "#pinCont",
                triggerHook: "onLeave",
                duration: "500%"
            })
                .setPin("#pinCont")
                .setTween(wipeAnimation)
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
        });

  

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

// Set the date we're counting down to
var countDownDate = new Date("Sep 30, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}