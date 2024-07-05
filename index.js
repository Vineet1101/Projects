// function locoScroll(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();


// locoScroll()


const tl=gsap.timeline()
function cursorEffect(){
var page1Content=document.querySelector("#page1-content")
var cursor=document.querySelector("#cursor")
page1Content.addEventListener("mousemove",(events)=>{
  
    gsap.to(cursor,{
        x:events.x,
        y:events.y

})
})
page1Content.addEventListener("mouseenter",(events)=>{
gsap.to(cursor,{
    scale:1,
    opacity:1
})

})
page1Content.addEventListener("mouseleave",(events)=>{
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

}
cursorEffect()

function page2Animation(){
    gsap.from("#page2-top h3",{
        y:120,
        stagger:0.2,
        duration:1.5,
        scrollTrigger:{
            trigger: ".container",
            pin: true, // Pin the trigger element while active
            start: "top top", // Start when the top of the trigger hits the top of the viewport
            end: "+=500", // End after scrolling 500px beyond the start
            scrub: 1, // Smooth scrubbing (takes 1 second to "catch up" to the scroll)
            snap: {
              snapTo: "labels", // Snap to the closest label in the timeline
              duration: { min: 0.2, max: 3 }, // Snap animation duration limits
              delay: 0.2, // Wait 0.2 seconds from the last scroll event before snapping
              ease: "power1.inOut", // Ease of the snap animation
        },
        // repeat:-1
    }})
    gsap.from("#page2-top h4",{
        y:120,
        stagger:0.2,
        duration:1.5,
        scrollTrigger:{
            trigger: ".container",
            pin: true, // Pin the trigger element while active
            start: "top top", // Start when the top of the trigger hits the top of the viewport
            end: "+=500", // End after scrolling 500px beyond the start
            scrub: 1, // Smooth scrubbing (takes 1 second to "catch up" to the scroll)
            snap: {
              snapTo: "labels", // Snap to the closest label in the timeline
              duration: { min: 0.2, max: 3 }, // Snap animation duration limits
              delay: 0.2, // Wait 0.2 seconds from the last scroll event before snapping
              ease: "power1.inOut", // Ease of the snap animation
        },
        // repeat:-1
    }})
  
    gsap.from(".elem p",{
        y:120,
        stagger:0.2,
        duration:1.5,
        scrollTrigger:{
            trigger: ".container",
            pin: true, // Pin the trigger element while active
            start: "top top", // Start when the top of the trigger hits the top of the viewport
            end: "+=500", // End after scrolling 500px beyond the start
            scrub: 1, // Smooth scrubbing (takes 1 second to "catch up" to the scroll)
            snap: {
              snapTo: "labels", // Snap to the closest label in the timeline
              duration: { min: 0.2, max: 3 }, // Snap animation duration limits
              delay: 0.2, // Wait 0.2 seconds from the last scroll event before snapping
              ease: "power1.inOut", // Ease of the snap animation
        },
        // repeat:-1
    }})

}
page2Animation()
function borderEffect(){
    document.addEventListener("DOMContentLoaded", function() {
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
            } else {
              entry.target.classList.remove("in-view");
            }
          });
        });
      
        var hr = document.querySelector(".scroll-object");
        observer.observe(hr);
      });
      }
  borderEffect()

  