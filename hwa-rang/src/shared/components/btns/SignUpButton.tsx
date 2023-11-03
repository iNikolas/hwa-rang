import { cn } from "utils/index";

import style from "./SignUpButton.module.scss";

export const SignUpButton: React.FC<
  React.HTMLAttributes<HTMLButtonElement>
> = ({ children = "Записатись на тренування", className, ...props }) => {
  return (
    <button {...props} className={cn(style.button, className)}>
      {children}
    </button>
  );
};
