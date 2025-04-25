function loadingAnimation(){
    let tl = gsap.timeline();
tl.from(".line h1, .line h2, #loader_bottom h3", {
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
    opacity: 1,
})

tl.to("#loader", {
    delay: 3.5,
    duration: 0.5,
    opacity: 0,
    ease: "power2",
    display: "none",
    
})

tl.from("#page1", {
    // immediateRender: false,
    delay: 0.2,
    y: "100vh",
    duration: 1,
    opacity: 0,
})
}

function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
    // console.log('dets.clientX', dets);
    gsap.to("#crsr",{
        x: dets.x,
        y: dets.y,
    })
    
})

Shery.makeMagnet("#nav h4" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}


loadingAnimation();
cursorAnimation();



