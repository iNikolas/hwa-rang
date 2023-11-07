import React from "react";
import ReactPhoneInput, {
  isValidPhoneNumber,
} from "react-phone-number-input/input";
import { Controller, useFormContext } from "react-hook-form";

import { cn } from "../../../utils";
import { CustomPhoneInput } from "./CustomPhoneNumber";

export const PhoneInput: React.FC<
  React.HTMLAttributes<HTMLDivElement> & { name: string; show: boolean }
> = ({ className, name, show, children = "номер", ...divProps }) => {
  const { control } = useFormContext();

  return (
    <div
      className={cn("w-full overflow-hidden transition", className)}
      style={{
        transform: `scaleY(${show ? 1 : 0})`,
        maxHeight: show ? "max-content" : "0px",
      }}
      {...divProps}
    >
      <span className="block text-custom-black">Введіть ваш {children}</span>
      <Controller
        name={name}
        control={control}
        rules={{
          validate: (value) => !show || (show && isValidPhoneNumber(value)),
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <ReactPhoneInput
              inputComponent={CustomPhoneInput}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          );
        }}
      />
    </div>
  );
};
