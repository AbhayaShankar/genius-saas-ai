"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

const LandingHero = () => {
  const { isSignedIn } = useAuth();
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
      <div className="text-sm md:text-lg font-semibold text-zinc-500 tracking-wide">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant={"premium"}
            className="p-4 md:p-6 md:text-lg rounded-lg tracking-wide"
          >
            Start Generating for FREE
          </Button>
        </Link>
      </div>
      <div className="text-sm md:text-md font-semibold text-zinc-500 tracking-wide">
        No Credit Card Required. Test for{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-600 to-pink-600 uppercase">
          {" "}
          Free
        </span>
        .
      </div>
    </div>
  );
};

export default LandingHero;
