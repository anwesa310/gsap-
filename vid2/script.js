gsap.from("#page1 #box",{
    scale:0,
    duration:2,
    rotation:360
})
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotation:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
})
gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }})
gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }})
gsap.from("#page4 #box",{
    scale:0,
    opacity:0,
    duration:1,
    rotation:720,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        markers:true,
        start:"top 10%",
        end:"top 50%",
        scrub:2,
        pin:true
    }})
