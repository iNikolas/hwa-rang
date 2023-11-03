import style from "./SignUpButtonOutline.module.scss";

export const SignUpButtonOutline: React.FC<
  React.HTMLAttributes<HTMLButtonElement>
> = (props) => {
  return (
    <button {...props} className={style.button}>
      Записатись на тренування
    </button>
  );
};
