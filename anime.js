gsap.registerPlugin(ScrollTrigger);
const tl =gsap.timeline();
t1.to(".anim",5,{x:-window.innerWidth})
.from(".two h1",5,{opacity:0,scale:3})
.to(".anim",5,{x:-window.innerWidth*2})
.from(".three h1",5,{opacity:0,scale:3})
.to(".anim",5,{x:-window.innerWidth*3})
.from(".four h1",5,{opacity:0,scale:3})
ScrollTrigger.create({
    animation: tl,
    trigger:".anim",
    start:"center center",
    end: "+=4000",
    scrub: true,
    pin:true
})
/*old code*/ 
