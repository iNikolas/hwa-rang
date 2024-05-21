import React from "react";

import { cn } from "../../utils";

const commonStyles =
  "w-full xs:max-w-none max-w-[328px] h-[56px] uppercase !text-14 font-bold cursor-pointer border transition before:content-['/_'] hover:before:content-['\\_']";

export const BasicButton: React.FC<
  React.HTMLAttributes<HTMLButtonElement> & {
    type: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    loading?: boolean;
  }
> = ({ className, disabled = false, loading = false, ...props }) => {
  const loadingStyle = loading && "animate-spin";
  return disabled ? (
    <button
      className={cn(
        commonStyles,
        "text-disabled border-disabled",
        loadingStyle,
        className,
      )}
      {...props}
    />
  ) : (
    <button
      {...props}
      className={cn(
        commonStyles,
        "border-border hover:bg-gradient hover:border-active-border hover:text-white hover:animate-gradient-shift",
        loadingStyle,
        className,
      )}
      style={{ backgroundSize: "200% 200%" }}
    />
  );
};
