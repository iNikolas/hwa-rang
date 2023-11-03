import { cn } from "utils/index";

import style from "./SignUpButtonOutline.module.scss";

export const SignUpButtonOutline: React.FC<
  React.HTMLAttributes<HTMLButtonElement>
> = ({ className, ...props }) => {
  return (
    <button {...props} className={cn(style.button, className)}>
      Записатись на тренування
    </button>
  );
};
