/* import { Container } from "./Container";
import React from 'react'

const CodeForge1 = () => {
    return (

        <Container id="code-editor" className="text-white">
            <img src="../../../public/Group 1.png" alt="laptop" className="m-auto p-14 h-[35rem] w-[65rem] " />
            <div className="flex items-center flex-col justify-center">
                <h3 className="text-sm text-zinc-500 uppercase">Execute Process Support for Your Code</h3>
                <p className="text-center text-[15px] text-[#e7e4e4dd]">Write code so smooth, even your <span className="text-blue-400">bugs</span> take a vacation! <br /> Execute like a pro, save like a boss, and pick up right where you left off every time you <span className="text-green-400">log in!</span></p>
            </div>
        </Container>

    )
}
export default CodeForge1*/

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from "./Container";

gsap.registerPlugin(ScrollTrigger);

const CodeForge1 = () => {
    const containerRef = useRef();
    const imageRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        const container = containerRef.current;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container, // Trigger the animation when this container enters the viewport
                start: "top 80%", // Animation starts when the top of the container hits 80% of the viewport
                end: "top 20%", // Animation ends when the bottom of the container hits 20% of the viewport
                toggleActions: "play reverse play reverse", // Animation will only play once
                scrub: true,
                // markers: true, // Enable markers to visualize the trigger points
            }
        });

        timeline
            .fromTo(
                imageRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                }
            )
            .fromTo(
                textRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    delay: 0.3,
                },
                "<" // Align this animation with the previous one
            );


    }, []);


    return (
        <Container id="code-editor" className="text-white" ref={containerRef}>
            <img
                ref={imageRef}
                src="../../../Group 1.png"
                alt="laptop"
                className="m-auto p-14 h-[35rem] w-[65rem]"
            />
            <div ref={textRef} className="flex items-center flex-col justify-center">
                <h3 className="text-sm text-zinc-500 uppercase">Execute Process Support for Your Code</h3>
                <p className="text-center text-[15px] text-[#e7e4e4dd]">
                    Write code so smooth, even your <span className="text-blue-400">bugs</span> take a vacation! <br />
                    Execute like a pro, save like a boss, and pick up right where you left off every time you <span className="text-green-400">log in!</span>
                </p>
            </div>
        </Container>
    );
};

export default CodeForge1;


