import { useFormContext } from "react-hook-form";

export function SubmitButton() {
  const {
    formState: { isValid },
  } = useFormContext();

  return <button type="submit">/ підтвердити запис</button>;
}
