"use client";

import initFirebase from "@/lib/firebase";
import { useEffect } from "react";

export default function Firebase() {
  useEffect(() => {
    initFirebase();
  }, []);

  return null;
}
