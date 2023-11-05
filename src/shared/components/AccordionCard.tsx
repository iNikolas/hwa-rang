import React, { ReactNode } from "react";
import { Collapse } from "react-collapse";
import { Card } from "@material-tailwind/react";

export const AccordionCardHall: React.FC<{
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
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Card className="p-3 mx-2 mb-5">
        <div className="relative">
          <p className="text-18 font-semibold pb-7">{place}</p>
          <p className="text-18 font-normal pb-7">{address}</p>
          {!open && (
            <div className="flex justify-end">
              <button
                className="text-14 font-normal leading-21 tracking-normal text-slate-500 border-b-2"
                onClick={toggleOpen}
              >
                Показати деталі
              </button>
            </div>
          )}
        </div>

        <Collapse isOpened={open}>
          <p className="text-18 font-semibold pb-5">РОЗКЛАД</p>
          <p>{group}</p>
          <p className="pb-5">{schedule}</p>
          <p>{desc || ""}</p>
          <p className="text-18 font-semibold pb-5 mt-5">ТРЕНЕР</p>
          <p className="pb-2">{coach}</p>
          <a className="pb-5 block" href={`tel:${telephone}`}>
            {telephone}
          </a>
          <div>{children}</div>
          <div className="flex justify-end">
            <button
              className="text-14 font-normal leading-21 tracking-normal text-slate-500 border-b-2"
              onClick={() => setOpen(false)}
            >
              Згорнути
            </button>
          </div>
        </Collapse>
      </Card>
    </>
  );
};
