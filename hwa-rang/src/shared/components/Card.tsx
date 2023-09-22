import { ReactNode } from "react";
// import style from "./Card.module.scss";

export const Card: React.FC<{
    image: string;
    title: string;
    description: string;
    children?: ReactNode;
}> = ({ image, title, description, children }) => {
    return (
        <div className="flex flex-col pt-1 max-w-[387px] max-h-[372px]">
            <img
                className="max-w-[431px] max-h-[372px]"
                src={image}
                alt="img"
            />
            <h2 className="pt-3 pb-4 text-24 font-bold">{title}</h2>
            <span className="border-b border-red-500 w-1/2"></span>
            <p className="pt-5">{description}</p>
            {children}
        </div>
    );
};
