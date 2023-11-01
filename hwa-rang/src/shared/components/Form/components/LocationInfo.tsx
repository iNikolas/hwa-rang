import React from "react";
import { useFormContext } from "react-hook-form";

import hallsData from "data/halls.json";

import { NoTrainerStub } from "./NotrainerStub";
import { TrainerProfile } from "./TrainerProfile";

export function LocationInfo() {
  const { watch } = useFormContext();
  const selectedHall = watch("hall");

  const trainer = React.useMemo(() => {
    const selectedHallinfo = hallsData.find(
      (h) =>
        h.name.toLowerCase().replace(" ", "") ===
        selectedHall.toLowerCase().replace(" ", "")
    );

    return selectedHallinfo ? selectedHallinfo.trainer : null;
  }, [selectedHall]);

  return (
    <div className="bg-dark-blue w-full lg:hidden">
      {trainer ? (
        <TrainerProfile trainer={trainer} selectedHall={selectedHall} />
      ) : (
        <NoTrainerStub />
      )}
    </div>
  );
}
