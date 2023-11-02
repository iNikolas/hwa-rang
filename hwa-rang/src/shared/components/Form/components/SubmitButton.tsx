import { useFormContext } from "react-hook-form";
import { Spinner } from "@material-tailwind/react";

import { cn } from "utils/index";

import { BasicButton } from "../../btns/BasicButton";

export function SubmitButton({
  loading = false,
  className,
  ...props
}: { loading?: boolean } & React.HTMLAttributes<HTMLButtonElement>) {
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <div className="flex justify-center items-center min-h-[56px]">
      {loading ? (
        <Spinner />
      ) : (
        <BasicButton
          {...props}
          disabled={!isValid}
          loading={loading}
          className={cn("shadow-custom", className)}
          type="submit"
        >
          підтвердити запис
        </BasicButton>
      )}
    </div>
  );
}
