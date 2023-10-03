"use client";

import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";

export const ProModal = () => {
  const promodal = useProModal();

  return (
    <div>
      <Dialog open={promodal.isOpen} onOpenChange={promodal.onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center  gap-y-4 pb-2">
              <div className="flex items-center gap-x-[10px] py-1 font-bold ">
                Upgrade to Genius
                <Badge className="text-sm uppercase py-1" variant={"premium"}>
                  Pro
                </Badge>
              </div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
