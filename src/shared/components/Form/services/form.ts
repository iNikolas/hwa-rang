import { FormSchema } from "../types";
import { mapKeyToName } from "../utils";

export const sendForm = async (rawData: FormSchema): Promise<void> => {
  const action = import.meta.env.VITE_FORM_ACTION;
  const contentType = import.meta.env.VITE_FORM_CONTENT_TYPE;

  if (typeof action !== "string" || typeof contentType !== "string") {
    throw new Error("Missing required Settings on the Server to sent the Form");
  }

  const formData = new URLSearchParams();

  Object.entries(rawData).forEach(([key, value]) => {
    const name = mapKeyToName(key);

    if (Array.isArray(value)) {
      return formData.append(name, value.join(", "));
    }
    formData.append(name, value);
  });

  const response = await fetch(action, {
    method: "POST",
    body: formData,
    headers: { "Content-Type": contentType },
  });

  if (!response.ok) {
    throw new Error(response.status + " " + response.statusText);
  }
};
