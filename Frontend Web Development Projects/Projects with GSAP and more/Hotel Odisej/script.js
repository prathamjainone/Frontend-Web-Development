// for one elem onli 

// let h1text=document.querySelector("#first").textContent;

// let split=h1text.split("");

// let clutter="";
// split.forEach(e=>{
//     clutter+=`<span>${e}</span>`
// })

// document.querySelector("#first").innerHTML=clutter;


gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#wrapper"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#wrapper" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#wrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




function select(){
    let h1s=document.querySelectorAll("section h1")
h1s.forEach((e)=>{
    let clutter=""
    let h1text=e.textContent
    let split= h1text.split("")
    split.forEach((elem)=>{
        clutter+=`<span>${elem}</span>`
    })
    e.innerHTML=clutter
})
}

function animate(){
    gsap.to("section h1 span",{
        color:"#E3E3C4",
        stagger:0.1,
        scrollTrigger:{
            scroller:"#wrapper",
            trigger:"section h1 span",
            scrub:1,
            markers:true,
            start:"top 50%",
            end:"top -20%"
        }
    })
}


select();
animate();