"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SliderProps {
  className?: string;
  children?: ReactNode;
}

export default function SliderLayout({ className, children }: SliderProps) {
  return (
    <div className={twMerge("w-full", className)}>
      <div className="flex overflow-x-scroll">{children}</div>
    </div>
  );
}