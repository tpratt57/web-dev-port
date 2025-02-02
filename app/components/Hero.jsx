"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-16"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Trevor</h1>
      <p className="text-xl md:text-2xl mb-8">Full Stack Web Developer & Designer</p>
      <a
        href="#projects"
        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
      >
        See My Work
      </a>
    </section>
  );
}
