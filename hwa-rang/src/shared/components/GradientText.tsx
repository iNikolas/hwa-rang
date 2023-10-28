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
        "bg-gradient-to-r text-transparent bg-clip-text font-[700] text-2xl leading-[28.8px]",
        basicGradient.join(" "),
        className
      )}
    />
  );
}
