"use client";

import { Toaster as Sonner } from "sonner";

export const Toaster = () => {
  return (
    <Sonner
      theme="dark"
      position="top-center"
      toastOptions={{
        style: {
          background: "#131419",
          border: "1px solid #1e1f25",
          color: "#EEF0F1",
        },
      }}
    />
  );
};
