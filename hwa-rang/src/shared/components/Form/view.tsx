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
    <div className="lg:pl-0 pl-9 lg:pb-0 pb-7 bg-background">
      <div className="lg:block flex">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit((data) => console.log(data))}
            className="bg-white [&_input]:placeholder:text-gray-400 [&_input]:placeholder:opacity-100 lg:min-w-0 min-w-[605px] sm:px-5 tablet:px-[30px] px-[46px] lg:pt-[61px] pt-[46px] lg:pb-[55px] pb-[46px] flex flex-col [&_.MuiInputLabel-shrink]:opacity-0 [&_.MuiInput-root]:h-[29px] [&_.MuiInputBase-root]:mt-0 [&_input]:text-gray-400"
          >
            <GradientText className="lg:mb-[42px] mb-[39px] lg:whitespace-normal whitespace-nowrap">
              Запишись <span className="whitespace-nowrap">на тренування</span>
            </GradientText>
            <div className="lg:w-full w-[328px]">
              <NameInput />
              <ServiceInput />
              <HallInput />
              <ForInput />
              <AgeInput />
              <HowToConnect />
              <SubmitButton />
            </div>
          </form>
        </FormProvider>
        <div className="bg-dark-blue w-full lg:hidden">
          <div className="bg-cover bg-center bg-taekwondo w-full h-full flex justify-center items-center">
            <span className="text-center uppercase font-bold text-24 leading-[28.8px] tracking-[.48rem] text-tint-white">
              Обирай тхеквондо!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
