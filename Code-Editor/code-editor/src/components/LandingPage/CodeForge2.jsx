// import React from 'react'
import { Container } from "./Container";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const CodeForge2 = () => {
    const textRef = useRef();
    const imgRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 90%", // When the top of the container hits 80% of the viewport
                end: "bottom 30%", // When the bottom of the container hits 20% of the viewport
                toggleActions: "play none none none", // Play and reverse the animations as you scroll in and out
                scrub: true, // Sync animation with scrolling
                markers: false // Set to true if you want to see debugging markers
            }
        });

        // Animate the text coming from the left
        timeline.fromTo(
            textRef.current,
            { x: '-100vw', opacity: 0 },
            {
                x: '0vw',
                opacity: 1,
                duration: 2,
                ease: "power2.inout"
            }
        );

        // Animate the image coming from the right
        timeline.fromTo(
            imgRef.current,
            { x: '100vw', opacity: 0 },
            {
                x: '0vw',
                opacity: 1,
                duration: 2,
                ease: "power2.inOut"
            },
            "<" // Align with the previous animation
        );

        // Animation for exiting the viewport
        // ScrollTrigger.create({
        //     trigger: container,
        //     start: "top 80%",
        //     end: "bottom 20%",
        //     scrub: true,
        //     onUpdate: (self) => {
        //         if (self.progress > 0.8) {
        //             // Slide out upwards when scrolling out of view from the bottom
        //             gsap.to(textRef.current, { x: '-100vw', opacity: 0, duration: 2.5 });
        //             gsap.to(imgRef.current, { x: '100vw', opacity: 0, duration: 2.5 });
        //         } else if (self.progress < 0.2) {
        //             // Slide out downwards when scrolling up and out of view
        //             gsap.to(textRef.current, { x: '-100vw', opacity: 0, duration: 2.5 });
        //             gsap.to(imgRef.current, { x: '100vw', opacity: 0, duration: 2.5 });
        //         } else {
        //             // Bring back the elements when in the viewport
        //             gsap.to(textRef.current, { x: '0vw', opacity: 1, duration: 2.5 });
        //             gsap.to(imgRef.current, { x: '0vw', opacity: 1, duration: 2.5 });
        //         }
        //     }
        // });
    }, []);
    return (
        <Container
            id="code-editor"
            className="text-white relative overflow-hidden"
            ref={containerRef}>
            <div ref={textRef} className="flex justify-center flex-col mt-40 ml-24 w-[30vw] text-[3rem]">
                <h3 className="text-zinc-500 uppercase text-sm">Anywhere and anytime</h3>
                <p>Coding Made Easy Harness the Power of <span className="text-yellow-200">Code-Forge</span> in your browser</p>
            </div>
            <img
                ref={imgRef}
                src="../../../Group 1.png"
                alt="laptop"
                className="h-[35rem] w-[65rem] absolute bottom-[-10rem] right-[-10rem] border-b-2 border-zinc-800" />
        </Container>
    )
}

export default CodeForge2
