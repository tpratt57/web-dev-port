"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onFinish={() => setIsLoading(false)} />
      ) : (
        children
      )}
    </>
  );
}
