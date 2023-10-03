"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_TRIALS } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";

interface FreeCounterProps {
  apiLimitCount: number;
}

export const FreeCounter = ({ apiLimitCount = 0 }: FreeCounterProps) => {
  const proModal = useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0 rounded-md">
        <CardContent className="py-4">
          <p className="text-center text-sm text-white mb-4 space-y-4">
            {apiLimitCount} / {MAX_FREE_TRIALS} Free Generations
          </p>
          <Progress
            value={(apiLimitCount / MAX_FREE_TRIALS) * 100}
            className="h-[7.5px] text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
          />
          <Button
            onClick={proModal.onOpen}
            variant={"premium"}
            className="w-full mt-3"
          >
            Upgrade to Premium
            <Zap className="h-4 w-4 ml-[10px] fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
