import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Fragment } from "react";

export default function LandingPage() {
  return (
    <Fragment>
        <p className="text-2xl text-slate-500 font-bold">Landing Page (Unprotected)</p>
        <div>
            <Link href={"/sign-in"}> 
                <Button>
                    Login
                </Button>
            </Link>
            <Link href={"/sign-up"}> 
                <Button>
                    Register
                </Button>
            </Link>
        </div>
    </Fragment>
  )
}
