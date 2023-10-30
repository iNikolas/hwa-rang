import React from "react";

import { cn } from "../../utils";

const commonStyles =
  "w-full h-[56px] uppercase text-14 font-bold cursor-pointer border transition before:content-['/_'] hover:before:content-['\\_']";

export const BasicButton: React.FC<
  React.HTMLAttributes<HTMLButtonElement> & {
    type: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
  }
> = ({ className, disabled = false, ...props }) => {
  return disabled ? (
    <button
      className={cn(commonStyles, "text-disabled border-disabled", className)}
      {...props}
    />
  ) : (
    <button
      {...props}
      className={cn(
        commonStyles,
        "border-border hover:bg-gradient hover:border-active-border hover:text-white hover:animate-gradient-shift",
        className
      )}
      style={{ backgroundSize: "200% 200%" }}
    />
  );
};
