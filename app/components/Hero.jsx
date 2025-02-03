"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    gsap.to(heroElement, {
      scrollTrigger: {
        trigger: heroElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      scale: 1.1,
      ease: "none",
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 relative"
    >
      <div className="text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Trevor</h1>
        <p className="text-xl md:text-2xl">Full Stack Web Developer & Designer</p>
      </div>
    </section>
  );
}
