"use client";

import { appDescription, appName, appUrl } from "@/lib/common";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "./firebase";
import { logEvent } from "firebase/analytics";

const shareData: ShareData = {
  title: appName,
  text: appDescription,
  url: appUrl.toString(),
};

export default function ShareFooter() {
  const { analytics } = useContext(FirebaseContext);

  const [shareAvailable, setShareAvailable] = useState(false);

  useEffect(() => {
    setShareAvailable(navigator.canShare && navigator.canShare(shareData));
  }, []);

  return (
    shareAvailable && (
      <footer className="fixed bottom-0 w-full bg-white">
        <div className="flex justify-center p-4">
          <button
            className="text-grey font-bold flex items-center gap-1 hover:underline hover:cursor-pointer"
            onClick={() => {
              navigator
                .share(shareData)
                .then(() => {
                  if (analytics) logEvent(analytics, "share");
                })
                .catch(() => {});
            }}
          >
            Compartir <ArrowUpOnSquareIcon className="h-5 w-5" />
          </button>
        </div>
      </footer>
    )
  );
}
