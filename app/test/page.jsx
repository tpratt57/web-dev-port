// app/test/page.jsx
import React from "react";
import ParticleBackground from "../components/ParticleBackground";

console.log("TestPage is rendering");

export default function TestPage() {
  return (
    <div className="relative h-screen w-screen">
      <div className="relative flex items-center justify-center h-full bg-black text-white text-3xl">
        <ParticleBackground />
        Overlaid Content
      </div>
    </div>
  );
}

