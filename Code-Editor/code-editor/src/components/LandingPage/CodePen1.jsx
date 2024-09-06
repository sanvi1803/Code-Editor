import { Container } from "./Container";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '../../../node_modules/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const CodePen1 = () => {
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
                    duration: 2,
                    ease: "power2.out",
                }
            )
            .fromTo(
                textRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    ease: "power2.out",
                    delay: 5,
                },
                "<" // Align this animation with the previous one
            );


    }, []);
    return (
        <Container className="bg-zinc-500 border-t-[1px] border-dashed border-zinc-800" id="codepen" ref={containerRef}>
            <img
                ref={imageRef}
                src="../../../MacBook Pro 16-inch Space Black Front.png"
                alt="laptop"
                className="m-auto p-14 h-[35rem] w-[65rem] " />
            <div ref={textRef} className="flex items-center flex-col justify-center">
                <h3 className="text-sm text-zinc-500 uppercase">Easy visualizations for your Code</h3>
                <p className="text-center text-[15px] text-[#e7e4e4dd]">Turn your wildest HTML, CSS, and JavaScript dreams into reality—instantly, without <span className="text-blue-400">breaking the internet (probably)!</span>
                </p>
            </div>
        </Container>
    )
}

export default CodePen1
