// import { gsap } from 'gsap';
import { gsap } from 'gsap'

function AnimatePara() {
    var tl = gsap.timeline();

    tl.from(".para", {
        y: -50, // Start 50px below its original position
        opacity: 0,
        duration: 3,
        ease: "Expo.easeOutForward",
    });
}

export default AnimatePara;

