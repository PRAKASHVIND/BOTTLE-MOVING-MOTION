function codes() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true,
    smoothMobile: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("body", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
// codes()

    
gsap.to("#img",{
      scrollTrigger: {
      trigger:"#img",
      start:"top 15.5%",
      end:"top -312%",
      pin:true,
      scrub:2,
 },
  rotate:"-15%",
})
gsap.to("#img",{
  scrollTrigger: {
  trigger:"#img",
  start:"top 10%",
  end:"top -80%",
  pin:true,
  // scroller:"body",
  scrub:2
},
scale:0.6,
x:120,
duration:8,
})
gsap.to("#img",{
  scrollTrigger:{
    trigger:"#img",
   start:"top 9.2%",
   end:"top 1%",
   pin:true,
   scrub:2
  },
  // opacity:0,
  duration:3
})

// gsap.to("part2-left-side-text h3",{
//   scrollTrigger:{
//   trigger:"part2-left-side-text h3",
//   start:"top 50%",
//   end:"top 300%",
//   pin:true,
//   scroller:"body",
//   markers:true,
// //  scrub:true
//   },
//      x:90,
//      duration:3
// })
var clutter=""
document.querySelector("#part9-center-part h1").textContent.split(" ").forEach(function(dets){
  clutter+=`<span>${dets}</span>`
})
