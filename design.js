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

//function for adding scroll panel
gsap.registerPlugin(ScrollTrigger);

let duration = 10,
		sections = gsap.utils.toArray(".panel"),
		sectionIncrement = duration / (sections.length - 1),
		tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".conscroll",
				pin: true,
				scrub: 1,
        snap: 1 / (sections.length - 1),
				start: "top top",
				end: "+=5000"
			}
		});

tl.to(sections, {
  xPercent: -100 * (sections.length - 1),
  duration: duration,
  ease: "none"
});



// everything below this is just for the fading/scaling up which is NOT scrubbed - it's all dynamic, triggered when each section enters/leaves so that the fading/scaling occurs at a consistent rate no matter how fast you scroll!
sections.forEach((section, index) => {
  let tween = gsap.from(section, {
    opacity: 0, 
    scale: 0.6, 
    duration: 1, 
    force3D: true, 
    paused: true
  });
  addSectionCallbacks(tl, {
    start: sectionIncrement * (index - 0.99),
    end: sectionIncrement * (index + 0.99),
    onEnter: () => tween.play(),
    onLeave: () => tween.reverse(),
    onEnterBack: () => tween.play(),
    onLeaveBack: () => tween.reverse()
  });
  index || tween.progress(1); // the first tween should be at its end (already faded/scaled in)
});





// helper function that lets us define a section in a timeline that spans between two times (start/end) and lets us add onEnter/onLeave/onEnterBack/onLeaveBack callbacks
function addSectionCallbacks(timeline, {start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack}) {
  let trackDirection = animation => { // just adds a "direction" property to the animation that tracks the moment-by-moment playback direction (1 = forward, -1 = backward)
    let onUpdate = animation.eventCallback("onUpdate"), // in case it already has an onUpdate
        prevTime = animation.time();
    animation.direction = animation.reversed() ? -1 : 1;
    animation.eventCallback("onUpdate", () => {
      let time = animation.time();
      if (prevTime !== time) {
        animation.direction = time < prevTime ? -1 : 1;
        prevTime = time;
      }
      onUpdate && onUpdate.call(animation);
    });
  },
      empty = v => v; // in case one of the callbacks isn't defined
  timeline.direction || trackDirection(timeline); // make sure direction tracking is enabled on the timeline
  start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
  end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
}



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}