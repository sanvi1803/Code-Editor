import { Container } from "./Container";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
const CodePen2 = () => {
    const textRef = useRef();
    const imgRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 70%", // When the top of the container hits 80% of the viewport
                end: "bottom 30%", // When the bottom of the container hits 20% of the viewport
                toggleActions: "play reverse play rveerse", // Play and reverse the animations as you scroll in and out
                scrub: true, // Sync animation with scrolling
                markers: false // Set to true if you want to see debugging markers
            }
        });

        // Animate the text coming from the left
        timeline.fromTo(
            textRef.current,
            { x: '100vw', opacity: 0 },
            {
                x: '0vw',
                opacity: 1,
                duration: 2.5,
                ease: "power2.inout"
            }
        );

        // Animate the image coming from the right
        timeline.fromTo(
            imgRef.current,
            { x: '-100vw', opacity: 0 },
            {
                x: '0vw',
                opacity: 1,
                duration: 2.5,
                ease: "power2.inOut"
            },
            "<" // Align with the previous animation
        );

    }, []);
    return (
        <Container
            ref={containerRef}
            id="code-editor"
            className="text-white relative overflow-hidden flex items-center justify-end h-[100vh]">
            <img
                ref={imgRef}
                src="../../../MacBook Pro 16-inch Space Black Front.png"
                alt="laptop"
                className="h-[35rem] w-[65rem] absolute bottom-[-10rem] left-[-10rem] border-b-2 border-zinc-800"
            />
            <div
                className="flex flex-col text-[2.5rem] w-[40vw] mr-14"
                ref={textRef}>
                <h3 className="text-zinc-500 uppercase text-sm">Anywhere and anytime</h3>
                <p>
                    Create and experiment with HTML, CSS, and JavaScript effortlessly, and see your results in real-time with  <span className="text-red-300">CodePen!</span></p>
            </div>
        </Container>
    );
}
export default CodePen2
