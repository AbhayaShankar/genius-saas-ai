"use client";

import React from "react";
import TypewriterComponent from "typewriter-effect";

const LandingHero = () => {
  return (
    <div className="text-white font-bold py-12 md:py-28 text-center space-y-5">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold space-y-5">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "ChatBot.",
                "Photo Generation.",
                "Music Generation.",
                "Video Generation.",
                "Code Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
