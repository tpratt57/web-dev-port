"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Typewriter } from "react-simple-typewriter";
import ParticleBackground from "./ParticleBackground";

export default function InteractiveLoadingScreen({ onFinish }) {
  const [started, setStarted] = useState(false);
  const progressBarRef = useRef(null);
  const containerRef = useRef(null);

  // Listen for any key press to trigger the loading sequence
  useEffect(() => {
    const handleKeyDown = () => {
      if (!started) {
        console.log("Key pressed, starting loading animation.");
        setStarted(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [started]);

  // Animate progress bar and then fade out the container
  useEffect(() => {
    if (started && progressBarRef.current && containerRef.current) {
      console.log("Starting progress bar animation...");
      gsap.to(progressBarRef.current, {
        width: "100%",
        duration: 3,
        ease: "power1.inOut",
        onComplete: () => {
          console.log("Progress bar complete. Starting fade-out.");
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power1.out",
            onComplete: () => {
              containerRef.current.style.display = "none";
              onFinish();
            },
          });
        },
      });
    }
  }, [started, onFinish]);

  return (
    <div
      ref={containerRef}
      className="interactive-loading fixed inset-0 flex flex-col justify-center items-center z-50 animate-gradient"
    >
      <ParticleBackground />
      {!started ? (
        <div className="text-white text-3xl font-bold drop-shadow-lg">

          <Typewriter
            words={["Press any key to start"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={3500}
          />
        </div>
      ) : (
        <div className="w-3/4 max-w-lg">
          <div className="w-full h-4 bg-gray-700 rounded overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-blue-500 rounded"
              style={{ width: 0 }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}