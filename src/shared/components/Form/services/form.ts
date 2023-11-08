import { FormSchema } from "../types";
import { mapKeyToName } from "../utils";

export const sendForm = async (rawData: FormSchema): Promise<void> => {
  const formData = new URLSearchParams();

  Object.entries(rawData).forEach(([key, value]) => {
    const name = mapKeyToName(key);

    if (Array.isArray(value)) {
      return formData.append(name, value.join(", "));
    }
    formData.append(name, value);
  });

  const response = await fetch(import.meta.env.VITE_FORM_ACTION, {
    method: "POST",
    body: formData,
    headers: { "Content-Type": import.meta.env.VITE_FORM_CONTENT_TYPE },
  });

  if (!response.ok) {
    throw new Error(response.status + " " + response.statusText);
  }
};
