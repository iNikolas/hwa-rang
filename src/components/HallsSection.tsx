import React from "react";
import { useFormContext } from "react-hook-form";
import Marquee from "react-fast-marquee";

import hallsData from "data/halls.json";
import trainersData from "data/trainers.json";

import { AccordionCardHall } from "../shared/components/AccordionCard";
import { ContactCard } from "../shared/components/ContactCard";
import { Title } from "../shared/components/Title";
import { SignUpButton } from "../shared/components/btns/SignUpButton";

type Contact = {
  place: string;
  address: string;
  coach: string;
  telephone: string;
  group: string;
  schedule: string;
  desc: string;
};

const contacts: Contact[] = hallsData.map((h) => {
  return {
    place: h.name,
    address: `${h.address.location}${
      h.address.description ? ` (${h.address.description})` : ""
    }`,
    coach: h.trainer,
    telephone: trainersData.find((t) => t.name === h.trainer)?.phone ?? "",
    group: h.schedule[0].description ?? "",
    schedule: h.schedule[0].time ?? "",
    desc:
      (h.schedule[1]?.description ? h.schedule[1].description + " " : "") +
      (h.schedule[1]?.time ? h.schedule[1].time : ""),
  };
});

export const HallsSection: React.FC = () => {
  const { setValue } = useFormContext();

  const signUphandler = (value: string) => () => {
    setValue("hall", value);
    const link = document.createElement("a");
    link.href = "#form";
    link.click();
  };

  return (
    <section
      id="halls"
      className="mt-[158px] tablet:mt-[107px] sm:mt-[60px] bg-[#DCE7E9] "
    >
      <div className="bg-[url('/kyiv-bg.svg')] bg-no-repeat bg-cover h-full bg-top">
        <div className="sm:pt-[30px] sm:pb-[30px] tablet:pt-[71px] tablet:pb-[50px] pt-[150px] pb-[39px] ml-[90px] md:pl-0 md:ml-[20px]">
          <Title title={"НАШІ ЗАЛИ"} />
        </div>

        <div className="flex flex-wrap gap-5 justify-center items-center pb-[70px] sm:hidden mx-5">
          {contacts.map((c) => (
            <ContactCard key={c.address} {...c}>
              <SignUpButton onClick={signUphandler(c.place)} />
            </ContactCard>
          ))}
        </div>
        <div className="hidden sm:flex flex-col">
          {contacts.map((c) => (
            <AccordionCardHall key={c.address} {...c}>
              <SignUpButton
                className="text-left"
                onClick={signUphandler(c.place)}
              />
            </AccordionCardHall>
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <Marquee>
          <span
            style={{
              color: "transparent",
              background:
                "linear-gradient(90deg, rgba(186, 46, 48, 0.9) 2.82%, rgba(88, 29, 96, 0.9) 52%, rgba(248, 82, 83, 0.9) 104.36%)",
              WebkitBackgroundClip: "text",
              fontFamily: "MontserratBlack",
            }}
            className="text-[96px] font-extrabold  text-transparent"
          >
            TAEKWONDO - KYIV &nbsp;
          </span>
        </Marquee>
      </div>
    </section>
  );
};
