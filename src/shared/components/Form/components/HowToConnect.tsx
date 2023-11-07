import { Controller, useFormContext } from "react-hook-form";
import { Label } from "./Label";
import { Checkbox, FormGroup, useMediaQuery } from "@mui/material";

import { theme } from "theme";

import { FormControlLabel } from "./FormControlLabel";
import { PhoneInput } from "./PhoneInput";
import { connections } from "../constants";

export function HowToConnect() {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const gtSmLtLg = useMediaQuery(
    `(max-width: ${theme.screens.lg.max}) and (min-width: ${theme.screens.sm.max})`
  );

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
          <FormGroup
            className="sm:mb-[26px] tablet:mb-[60px] mb-[26px]"
            onChange={onBlur}
          >
            <Label>Оберіть спосіб зв’язку</Label>
            <div className="flex tablet:flex-row flex-col w-full justify-between [&_.MuiFormControlLabel-root]:mr-0">
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
              {!gtSmLtLg && <PhoneInput name="phone" show={mobile} />}
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
              {!gtSmLtLg && <PhoneInput name="viber" show={viber} />}
              <FormControlLabel
                error={!!error}
                control={
                  <Checkbox
                    checked={telegram}
                    onChange={() =>
                      onChange(
                        telegram
                          ? howToConnect.filter(
                              (h) => h !== connections.telegram
                            )
                          : [...howToConnect, connections.telegram]
                      )
                    }
                  />
                }
                label={connections.telegram}
              />
            </div>
            {gtSmLtLg && (
              <div>
                <PhoneInput name="phone" show={mobile}>
                  {connections.mobile}
                </PhoneInput>
                <PhoneInput className="mt-2" name="viber" show={viber}>
                  {connections.viber}
                </PhoneInput>
                <PhoneInput className="mt-2" name="telegram" show={telegram}>
                  {connections.telegram}
                </PhoneInput>
              </div>
            )}
            {!gtSmLtLg && <PhoneInput name="telegram" show={telegram} />}
          </FormGroup>
        );
      }}
    />
  );
}
