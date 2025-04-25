let tl = gsap.timeline();
tl.from(".line h1,  .line h2", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
});
tl.from("#line1_counter", {
    opacity: 0,
    onStart: function () {
        let page1Timer = document.querySelector("#line1_counter h5");
        let count = 0;
        let timer = setInterval(() =>{
            count++;
            page1Timer.innerHTML = Math.min(count, 100);
            if (Math.min(count) >= 100) {
                clearInterval(timer);
            }
            
        } , 33);

    }
})

tl.to(".line h2", {
    // animationName: anime,
    // immediateRender: false,
    opacity: 1,
})

tl.to("#loader", {
    delay: 4,
    duration: 0.5,
    opacity: 0,
    // onComplete: () => {
    //     document.querySelector("#loader").style.display = "none";
    // }
    ease: "power2",
    display: "none",
    
})

tl.from("#page1", {
    immediateRender: false,
    delay: 0.2,
    y: "100vh",
    duration: 1,
    opacity: 0,
})


