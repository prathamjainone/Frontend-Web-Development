let tl=gsap.timeline();

tl.from(".nav h2,.nav h3",{
    y:-50,
    delay:0.3,
    opacity:0,
    stagger:0.4
})

tl.from(".main h1",{
    x:-500,
    opacity:0,
    stagger:0.3,

})

tl.from("img",{
    opacity:0,
    rotate:-45,
    stagger:0.3
})

tl.from(".foot i,.foot h3,.foot2 h3,i",{
    y:-50,
    opacity:0,
    stagger:0.2
})