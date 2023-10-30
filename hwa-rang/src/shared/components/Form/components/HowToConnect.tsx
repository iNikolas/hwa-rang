import { Controller, useFormContext } from "react-hook-form";
import { Label } from "./Label";
import { Checkbox, FormGroup } from "@mui/material";
import { FormControlLabel } from "./FormControlLabel";
import { PhoneInput } from "./PhoneInput";
import { connections } from "../constants";

export function HowToConnect() {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const error = errors.howToConnect;

  return (
    <Controller
      name="howToConnect"
      control={control}
      rules={{
        validate: (value: string[]) => !!value.length,
      }}
      render={({ field: { onChange, onBlur, value } }) => {
        const howToConnect: string[] = value;
        const mobile = howToConnect.includes(connections.mobile);
        const viber = howToConnect.includes(connections.viber);
        const telegram = howToConnect.includes(connections.telegram);
        return (
          <FormGroup className="mb-[26px]" onChange={onBlur}>
            <Label>Оберіть спосіб зв’язку</Label>
            <FormControlLabel
              error={!!error}
              control={
                <Checkbox
                  checked={mobile}
                  onChange={() =>
                    onChange(
                      mobile
                        ? howToConnect.filter((h) => h !== connections.mobile)
                        : [...howToConnect, connections.mobile]
                    )
                  }
                />
              }
              label={connections.mobile}
            />
            <PhoneInput />
            <FormControlLabel
              error={!!error}
              control={
                <Checkbox
                  checked={viber}
                  onChange={() =>
                    onChange(
                      viber
                        ? howToConnect.filter((h) => h !== connections.viber)
                        : [...howToConnect, connections.viber]
                    )
                  }
                />
              }
              label={connections.viber}
            />
            <FormControlLabel
              error={!!error}
              control={
                <Checkbox
                  checked={telegram}
                  onChange={() =>
                    onChange(
                      telegram
                        ? howToConnect.filter((h) => h !== connections.telegram)
                        : [...howToConnect, connections.telegram]
                    )
                  }
                />
              }
              label={connections.telegram}
            />
          </FormGroup>
        );
      }}
    />
  );
}
