gsap.from(".page2 .circle",{
    scale:0,
    rotate:720,
    duration:2,
    scrollTrigger:{
        trigger:".page2 .circle",
        scroller:"body",
        // markers:"true",
        start:"top 60%",
        end:"top 20%",
        scrub:2,
    }
})
gsap.from(".page1 .circle",{
    scale:0,
    rotate:720,
    duration:2,
})

gsap.to(".page3 img",{
    width:"100%",
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top 0",
        // markers:true,
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})

gsap.to(".page4 h1",{
    transform:"translateX(-30%)",
    // duration:2,
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"top 0",
        markers:true,
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})