import trainersData from "data/trainers.json";

import { Choice } from "../types";
import { RelatedHalls } from "./RelatedHalls";

export function TrainerProfile({ trainer, selectedHall }: Choice) {
  const trainerData = trainersData.find((t) => t.name === trainer);

  const hallName = selectedHall.split("/").map((h) => h.trim());

  return (
    <div className="p-[55px] text-white">
      <div className="flex gap-6 flex-wrap">
        <img
          className="w-[173px]"
          src={trainerData?.photo}
          alt="trainer photo"
        />
        <div className="flex flex-col justify-between">
          <div>
            {hallName.map((n) => {
              const splittedName = n.split(" ");

              const normalCasePart = `${splittedName[0]} `;
              const uppercasePart = splittedName.slice(1).join(" ");

              return (
                <p key={n} className="text-[28px] font-bold">
                  <span>{normalCasePart}</span>
                  <span className="uppercase">{uppercasePart}</span>
                </p>
              );
            })}
          </div>
          <div>
            <p className="text-[24px] font-bold">ТРЕНЕР</p>
            <p className="text-18">{trainer}</p>
            <p className="text-18 leading-none">{trainerData?.phone}</p>
          </div>
        </div>
      </div>
      <RelatedHalls trainer={trainer} selectedHall={selectedHall} />
    </div>
  );
}
