gsap.registerPlugin(ScrollTrigger);
const t1 =gsap.timeline();
t1.to(".anim",5,{x:-window.innerWidth})

t1.to(".two",5,{x:-window.innerWidth*2})
t1.to(".three",5,{x:-window.innerWidth*3})
t1.to(".four",5,{x:-window.innerWidth*4})
ScrollTrigger.create({
    animation: t1,
    trigger:".anim",
    start:"center center",
    end: "+=4000",
    scrub: true,
    pin:true
})
/*old code*/ 
