import React from "react";
import ReactPhoneInput, {
  isValidPhoneNumber,
} from "react-phone-number-input/input";
import { Controller, useFormContext } from "react-hook-form";

import { cn } from "../../../utils";
import { CustomPhoneInput } from "./CustomPhoneNumber";

export const PhoneInput: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...divProps
}) => {
  const { watch, control } = useFormContext();

  const show = !!watch("howToConnect").length;

  return (
    <div
      className={cn("w-full overflow-hidden transition", className)}
      style={{
        transform: `scaleY(${show ? 1 : 0})`,
        maxHeight: show ? "max-content" : "0px",
      }}
      {...divProps}
    >
      <span className="block text-custom-black">Введіть ваш номер</span>
      <Controller
        name="phone"
        control={control}
        rules={{
          required: true,
          validate: (value) => isValidPhoneNumber(value),
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <ReactPhoneInput
            inputComponent={CustomPhoneInput}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
    </div>
  );
};
