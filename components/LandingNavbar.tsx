"use client";

import { Montserrat } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const font = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

// We are using useAuth here instead of using auth from @clerk/nextjs -- because useAuth is a client side hook unlike auth which is server side. So that's why we used useAuth here.

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-white text-2xl ", font.className)}>Genius</h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant={"outline"} className="rounded-md font-semibold">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
