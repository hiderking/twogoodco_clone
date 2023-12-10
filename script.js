function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


    
};

locomotiveAnimation();

function navAnimation(){


gsap.to("#logo svg",{
   
    transform:"translateY(-100%)"
    ,

    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 0",
        end:"top -5%",
       scrub:true,
        markers:true
    }


})
gsap.to("#nav-part2 #links",{
   
    transform:"translateY(-100%)"
    ,
    opacity:0,

    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 0",
        end:"top -5%",
       scrub:true,
    }


})
}
navAnimation();


function videoContainerAnimation(){
    const videoCon=document.querySelector("#video-container")
const playbtn=document.querySelector("#play")

videoCon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        opacity:1,
        scale:1,

    })
})
videoCon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        opacity:0,
        scale:0,

    })
})
videoCon.addEventListener("mousemove",function(dets){
   gsap.to(playbtn,{
    left:dets.x-50,
    top:dets.y-50

   })
})
}
videoContainerAnimation();
function page1Animation(){
var tl=gsap.timeline();
tl.from("#page1 h1",{
    y:100,
    opacity:0,
    duration:1,
    delay:.1,
    stagger:0.2

})
tl.from("#video-container",{
    scale:0.9,
    opacity:0,
    duration:0.4,
    delay:.1,


})}
page1Animation();

function circleAnimation(){

    document.addEventListener("mousemove",function(dets){
        gsap.to("#circle",{
            left:dets.x,
            top:dets.y,
        })
    })
   
    document.querySelectorAll(".child").forEach(function(elem,index){

        if(index<2){
        elem.addEventListener("mouseenter",function(){
            gsap.to("#circle",{
                backgroundColor:"bisque",
                transform:"translate(-50%,-50%) scale(1)"
            })
    
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to("#circle",{
                transform:"translate(-50%,-50%) scale(0)"
            })
    
        })
    }
    else{
        elem.addEventListener("mouseenter",function(){
            gsap.to("#circle",{
                transform:"translate(-50%,-50%) scale(1)",
                backgroundColor:"#00800054"
            })
    
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to("#circle",{
                transform:"translate(-50%,-50%) scale(0)"
            })
    
        })
        
    }
    })
}
circleAnimation();