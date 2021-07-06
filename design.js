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
          gsap.registerPlugin(ScrollTrigger);
          gsap.defaults({ease: "none", duration: 2});
          
          // create a sequence that moves 3 of the panels in from different directions 
          const tl = gsap.timeline();
          tl.from(".orange", {xPercent: -100})
            .from(".purple", {xPercent: 100})
            .from(".green", {yPercent: -100});
          
          // pin the container and link the animation to the scrollbar (scrub: true). We could easily embed this in the gsap.timeline() to shorten things a bit, but this is to show that you can create the ScrollTrigger separately if you prefer. 
          ScrollTrigger.create({
            animation: tl,
            trigger: "#container",
            start: "top top",
            end: "+=4000", 
            scrub: true,
            pin: true,
            anticipatePin: 1
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