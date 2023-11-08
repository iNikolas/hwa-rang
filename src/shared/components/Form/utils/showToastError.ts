import { toast } from "react-toastify";

export const showToastError = (error: unknown) => {
  const reason = error instanceof Error ? error.message : "Unknown reason";

  toast(`Не вдалося надіслати форму: ${reason}`, {
    position: "bottom-center",
    type: "error",
  });
};
