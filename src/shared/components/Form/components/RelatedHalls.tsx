import React from "react";
import { m } from "framer-motion";
import { useFormContext } from "react-hook-form";

import hallsData from "data/halls.json";
import { cn } from "utils/index";

const Caption = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn("text-white text-24 font-[600] mb-5", className)}
      {...props}
    />
  );
};

const Description = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "text-white text-18 leading-[27px] mb-5 font-normal font-pp-neue-montreal",
        className,
      )}
      {...props}
    />
  );
};

export function RelatedHalls({ trainer }: { trainer: string }) {
  const { watch } = useFormContext();
  const selectedHall: string = watch("hall");

  const relatedHalls = hallsData.filter((h) => h.trainer === trainer);

  const { setValue } = useFormContext();

  const hall = relatedHalls.find(
    (h) => h.name.toLowerCase() === selectedHall.toLowerCase(),
  );

  return (
    <div className="mt-[43px]">
      <div className="border-b border-white flex mb-[28px]">
        {relatedHalls.map((hall, index) => {
          const activeTab =
            selectedHall.toLowerCase() === hall.name.toLowerCase();
          return (
            <div
              key={hall.name}
              className="relative cursor-pointer"
              onClick={() => setValue("hall", hall.name)}
            >
              <span
                className={cn(
                  "text-[24px] relative z-10 uppercase font-bold px-[21px] py-1.5",
                  activeTab && "text-dark-blue",
                )}
              >
                Зал {index + 1}
              </span>
              {activeTab && (
                <m.div
                  layoutId="form-related-halls-selected"
                  className="absolute inset-0 rounded-tl rounded-tr bg-white"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="mb-[55px]">
        <Caption>Адреса:</Caption>
        <Description className="mr-4">{hall?.address.location}</Description>
        <Description>{hall?.address.description}</Description>
      </div>
      <Caption>Графік:</Caption>
      {hall?.schedule.map((s) => (
        <div className="mb-[18px]" key={String(s.time) + String(s.description)}>
          <Description className="block mb-0">{s.description}</Description>
          <Description>{s.time}</Description>
        </div>
      ))}
    </div>
  );
}
