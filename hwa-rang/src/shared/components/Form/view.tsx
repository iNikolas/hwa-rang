import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { GradientText } from "../GradientText";
import { FormSchema } from "./types";
import {
  NameInput,
  SubmitButton,
  ServiceInput,
  HallInput,
  ForInput,
  AgeInput,
  HowToConnect,
} from "./components";

export const Form: React.FC = () => {
  const methods = useForm<FormSchema>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      service: "none",
      hall: "none",
      for: "",
      age: "",
      howToConnect: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => console.log(data))}
        className=" [&_input]:placeholder:text-gray-400 [&_input]:placeholder:opacity-100 max-w-[600px] px-5 pt-[61px] pb-[55px] flex flex-col [&_.MuiInputLabel-shrink]:opacity-0 [&_.MuiInput-root]:h-[29px] [&_.MuiInputBase-root]:mt-0 [&_input]:text-gray-400"
      >
        <GradientText className="mb-[42px]">
          Запишись <span className="whitespace-nowrap">на тренування</span>
        </GradientText>
        <NameInput />
        <ServiceInput />
        <HallInput />
        <ForInput />
        <AgeInput />
        <HowToConnect />
        <SubmitButton />
      </form>
    </FormProvider>
  );
};
