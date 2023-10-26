import { ReactNode } from "react";

export const ContactCard: React.FC<{
    place?: string;
    address?: string;
    coach?: string;
    telephone?: string;
    group?: string;
    schedule?: string;
    desc?: string;
    children?: ReactNode;
}> = ({
    place,
    address,
    coach,
    telephone,
    group,
    schedule,
    children,
    desc,
}) => {
    return (
        <div className="flex flex-col justify-center  my-5 p-[3%] mx-4 max-w-[691px] bg-white">
            <div className="border-b border-solid border-[#DCE7E9] mb-6">
                <p className="text-24 font-semibold pb-7">{place}</p>
                <p className="text-18 font-normal pb-7">{address}</p>
            </div>
            <div className="flex justify-between">
                <div className="pb-5 px-5">
                    <p className="text-24 font-semibold pb-5">РОЗКЛАД</p>
                    <p>{group}</p>
                    <p className="pb-5">{schedule}</p>
                    <p>{desc || ""}</p>
                </div>
                <div className="pb-5 px-5">
                    <p className="text-24 font-semibold pb-5">ТРЕНЕР</p>
                    <p className="pb-2">{coach}</p>
                    <a className="pb-5" href={`tel:${telephone}`}>
                        {telephone}
                    </a>
                    <div className="ml-[-25px]">{children}</div>
                </div>
            </div>
        </div>
    );
};
