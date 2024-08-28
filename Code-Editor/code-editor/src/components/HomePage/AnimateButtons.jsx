import { gsap } from 'gsap';

function AnimateButtons() {
    var tl = gsap.timeline();

    tl.from(".button-container", {
        y: 50, // Start 50px below its original position
        opacity: 0,
        duration: 3,
        ease: "Expo.easeInOut",
    })
        .from(".laptop-image", {
            y: -50, // Start 50px above its original position
            opacity: 0,
            duration: 3,
            ease: "Expo.easeInOut",
            delay: -1.5, // Start immediately after the buttons animation
        });
}

export default AnimateButtons;
