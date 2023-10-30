import { useFormContext } from "react-hook-form";

import { BasicButton } from "../../btns/BasicButton";

export function SubmitButton() {
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <BasicButton disabled={!isValid} className="shadow-custom" type="submit">
      підтвердити запис
    </BasicButton>
  );
}
