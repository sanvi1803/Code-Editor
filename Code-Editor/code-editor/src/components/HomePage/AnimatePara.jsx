// import { gsap } from 'gsap'

// function AnimatePara() {
//     var tl = gsap.timeline();

//     tl.from(".para", {
//         y: -50, // Start 50px below its original position
//         opacity: 0,
//         duration: 3,
//         ease: "Expo.easeOutForward",
//     });
// }
// export default AnimatePara;

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from '../../../node_modules/gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
// console.log(gsap.plugins);
function AnimatePara() {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".para", // Trigger the animation when the .para element enters the viewport
            start: "top 80%", // When the top of the .para element hits 80% of the viewport
            end: "bottom 20%", // When the bottom of the .para element hits 20% of the viewport
            toggleActions: "play reverse play reverse", // Play the animation once
            // markers: true, // Enable markers for debugging
        },
    });

    tl.from(".para", {
        y: 50, // Start 50px below its original position
        opacity: 0,
        duration: 3,
        ease: "Expo.easeOut",
    });
}

export default AnimatePara;
