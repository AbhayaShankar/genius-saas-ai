"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-700",
    bgColor: "bg-emerald-700/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
];

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foregrounnd font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:md-32 space-y-4">
        {tools.map((tool) => {
          const { label, color, icon, bgColor, href } = tool;
          return (
            <Card
              onClick={() => router.push(href)}
              key={href}
              className="p-[10px] border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", bgColor)}>
                  <tool.icon className={cn("h-6 w-6", color)} />
                </div>
                <div className="font-semibold text-zinc-700">{label}</div>
              </div>
              <MoveRight className="w-6 h-6 text-gray-500  " />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
