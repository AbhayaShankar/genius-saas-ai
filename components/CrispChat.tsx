"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a727c88a-0ce8-4d1c-acd5-90f5d4b69ba6");
  }, []);

  return null;
};

export default CrispChat;
