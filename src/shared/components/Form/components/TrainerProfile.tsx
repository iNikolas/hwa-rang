import { useFormContext } from "react-hook-form";

import trainersData from "data/trainers.json";

import { RelatedHalls } from "./RelatedHalls";
import { splitName } from "shared/utils";

export function TrainerProfile({ trainer }: { trainer: string }) {
  const { watch } = useFormContext();
  const selectedHall: string = watch("hall");

  const trainerData = trainersData.find((t) => t.name === trainer);

  return (
    <div className="p-[55px] text-white">
      <div className="flex gap-6 flex-wrap">
        <div className="min-h-[192px] flex items-end bg-background-white">
          <picture>
            <source
              type="image/avif"
              srcSet={trainerData?.photo + "-white-bg" + ".avif"}
            />
            <img
              className="w-[173px]"
              src={trainerData?.photo + "-white-bg" + ".jpg"}
              alt="trainer photo"
            />
          </picture>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            {splitName({ name: selectedHall }).map(
              ({ normalCasePart, uppercasePart }) => {
                return (
                  <p
                    key={normalCasePart + uppercasePart}
                    className="text-[28px] font-bold"
                  >
                    {normalCasePart}
                    {uppercasePart}
                  </p>
                );
              },
            )}
          </div>
          <div>
            <p className="text-[24px] font-bold">ТРЕНЕР</p>
            <p className="text-18 font-pp-neue-montreal">{trainer}</p>
            <p className="text-18 leading-none font-pp-neue-montreal">
              {trainerData?.phone}
            </p>
          </div>
        </div>
      </div>
      <RelatedHalls trainer={trainer} />
    </div>
  );
}
