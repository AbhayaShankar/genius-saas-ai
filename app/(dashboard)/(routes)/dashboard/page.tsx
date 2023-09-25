import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <>
    <p className="text-2xl text-slate-500 font-bold">Dashboard Page (Protected)</p>
    <Button className="mt-1" variant={"default"} >Hello Abhaya</Button>
    </>
  )
}