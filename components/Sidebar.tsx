"use client";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col py-4 space-y-4 bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="h-8 w-8 mr-4 relative">
            <Image fill src={"/logo.png"} alt="logo" />
          </div>
          <h1 className={cn("text-2xl font-semibold", montserrat.className)}>
            Genius
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
