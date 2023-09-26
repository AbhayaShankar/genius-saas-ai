import { Menu } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <Button variant={"ghost"} size={"icon"} className="md:hidden">
        <Menu />
      </Button>
      <div className="w-full flex justify-end ">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
