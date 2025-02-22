"use client";

import initFirebase from "@/lib/firebase";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

export const FirebaseContext = createContext(
  {} as Partial<ReturnType<typeof initFirebase>>,
);

export default function Firebase({ children }: PropsWithChildren) {
  const [state, setState] = useState({});

  useEffect(() => {
    setState(initFirebase());
  }, []);

  return (
    <FirebaseContext.Provider value={state}>
      {children}
    </FirebaseContext.Provider>
  );
}
