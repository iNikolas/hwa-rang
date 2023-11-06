import React, { ReactNode } from "react";

import { cn, splitName } from "utils/index";

const Description: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn(
        "text-18 leading-[27px] font-pp-neue-montreal tracking-wide",
        className
      )}
    />
  );
};

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
    <div className="flex flex-col justify-center p-[3%] max-w-[691px] w-full bg-white min-h-[433px]">
      <div className="border-b border-solid border-[#DCE7E9] mb-6">
        <p className="text-24 font-semibold pb-7">
          {splitName({ name: place ?? "" })
            .map(
              ({ normalCasePart, uppercasePart }) =>
                normalCasePart + uppercasePart
            )
            .join(" / ")}
        </p>
        <Description className="pb-7">{address}</Description>
      </div>
      <div className="flex justify-between">
        <div className="pb-5 pr-5">
          <p className="text-24 font-semibold pb-5">РОЗКЛАД</p>
          <Description>{group}</Description>
          <Description className="pb-5">{schedule}</Description>
          <Description>{desc ?? ""}</Description>
        </div>
        <div className="pb-5 px-5">
          <p className="text-24 font-semibold pb-5">ТРЕНЕР</p>
          <Description>{coach}</Description>
          <a className="text-18 pb-5" href={`tel:${telephone}`}>
            {telephone}
          </a>
          <div className="-ml-[25px]">{children}</div>
        </div>
      </div>
    </div>
  );
};
