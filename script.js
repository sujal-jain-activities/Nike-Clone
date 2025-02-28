document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    
    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= 3.75) {
            video.pause(); // Pause the video at 3 seconds
        }
    });
});
var tl = gsap.timeline();
tl.from(".nav", {
    duration: 0.5,
    y: -50,
    opacity: 0,
    delay: 3.3,
    stagger: 2,
})

tl.from(".para", {
    duration: 0.5,
     y: 50,
    opacity: 0,
    // delay: 3.3,
    stagger: 2,
    scale: 0.5
});
gsap.registerPlugin(ScrollTrigger)
gsap.from(".age2",{
    scrollTrigger:{
        trigger:".age2",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:1,
        // markers:true,
},
    y:500,
    duration:2,
    opacity:0,
    scale:0.5,
})

document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.page3');
    const leftBtn = document.querySelector('.scroll-left');
    const rightBtn = document.querySelector('.scroll-right');
    
    // Scroll amount (adjust as needed)
    const scrollAmount = 320; // Width of one card
    
    leftBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    rightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});

