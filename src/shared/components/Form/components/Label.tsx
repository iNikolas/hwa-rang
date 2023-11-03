import { cn } from "../../../utils";

export const Label = ({
  className,
  ...props
}: React.HTMLProps<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      className={cn(
        "block text-xl leading-none font-medium mb-[9px]",
        className
      )}
    />
  );
};
