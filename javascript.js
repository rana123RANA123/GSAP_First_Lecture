gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
})
gsap.from("#page2 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        // markers: true,
        start: 'top 60%',
        end: 'top 30%',
        scrub: 3
    }
})


gsap.to("#page3 #text", {
    transform: "translateX(-70%)",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})
gsap.to("#page4 #text2", {
    scale: 0,
    delay: 1,
    duration: 4,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        // start: "top 0%",
        // end: "top -100%",
        // markers: true,
    }
})
gsap.from("#page4 #text2", {
    scale: 0,
    delay: 1,
    duration: 4,
    rotate: 360,
    color: 'red',
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        // start: "top 0%",
        // end: "top -100%",
        // markers: true,
    }
})