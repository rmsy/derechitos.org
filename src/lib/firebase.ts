"use client";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

export default function initFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyB2BZu-3-Q6rwoF83DgAOPGG6TPnvJdkC4",
    authDomain: "derechitos.firebaseapp.com",
    projectId: "derechitos",
    storageBucket: "derechitos.firebasestorage.app",
    messagingSenderId: "565215172202",
    appId: "1:565215172202:web:15605e1f9c8b333f7ddc13",
    measurementId: "G-0JC18KS252",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const performance = getPerformance(app);

  return { app, analytics, performance };
}
