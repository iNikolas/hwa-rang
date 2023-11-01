import style from "./SignUpButton.module.scss";

export const SignUpButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button {...props} className={style.button}>
      Записатись на тренування
    </button>
  );
};
