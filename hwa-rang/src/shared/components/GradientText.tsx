import React from "react";
import { cn } from "../utils";

const basicGradient = ["from-[#07132C]", "via-[#592860]", "to-[#F75253]"];

export function GradientText({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={cn(
        "bg-gradient-to-r text-transparent bg-clip-text font-[700] sm:text-24 tablet:text-[48px] text-[32px] sm:leading-[28.8px] tablet:leading-[57.6px] leading-[38.4px] uppercase lg:tracking-widest",
        basicGradient.join(" "),
        className
      )}
    />
  );
}
