import { cn } from "shared/utils";

import "./Title.module.scss";

export const Title: React.FC<{
  title: string;
  style?: string;
  pure?: boolean;
}> = ({ title, style, pure = false }) => {
  return (
    <h3
      className={cn(
        "text-32 tablet:text-48 font-[700] sm:text-24 leading-[38.4px] tablet:leading-[57.6px] sm:leading-[28.8px] max-w-max traking-[0.12rem]",
        style,
      )}
    >
      {pure ? title : ["/", "/", "/", "/", "/ "].join("").concat(title)}
    </h3>
  );
};
