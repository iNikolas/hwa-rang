import { ReactNode } from "react";
// import style from "./Card.module.scss";

export const Card: React.FC<{
  image: string;
  title: string;
  description: string;
  children?: ReactNode;
}> = ({ image, title, description, children }) => {
  return (
    <div className="relative flex flex-col pt-1 max-w-[387px]">
      <div className="max-w-[387px] h-[372px]">
        <img className="h-full w-full" src={image} alt="img" />
      </div>
      <h2 className="pt-3 pb-4 text-24 font-bold align-top">{title}</h2>
      <p className="py-5 relative ">
        <span className="absolute w-1/2 h-1 border-t border-red-500 left-0 top-0"></span>
        {description}
      </p>
      <div className="py-5 absolute bottom-[-75px] ">{children}</div>
    </div>
  );
};
