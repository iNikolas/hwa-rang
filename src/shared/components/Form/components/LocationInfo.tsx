import React from "react";
import { useFormContext } from "react-hook-form";

import hallsData from "data/halls.json";

import { TrainerProfile } from "./TrainerProfile";
import { NoTrainerStub } from "./NoTrainerStub";

export function LocationInfo() {
  const { watch } = useFormContext();
  const selectedHall = watch("hall");

  const trainer = React.useMemo(() => {
    const selectedHallinfo = hallsData.find(
      (h) =>
        h.name.toLowerCase().replace(" ", "") ===
        selectedHall.toLowerCase().replace(" ", ""),
    );

    return selectedHallinfo ? selectedHallinfo.trainer : null;
  }, [selectedHall]);

  return (
    <div className="bg-dark-blue w-full lg:hidden">
      {trainer ? <TrainerProfile trainer={trainer} /> : <NoTrainerStub />}
    </div>
  );
}
