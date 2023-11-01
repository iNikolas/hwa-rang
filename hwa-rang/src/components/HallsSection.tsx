import Marquee from "react-fast-marquee";

import hallsData from "data/halls.json";
import trainersData from "data/trainers.json";

import { AccordionCardHall } from "../shared/components/AccordionCard";
import { ContactCard } from "../shared/components/ContactCard";
import { Title } from "../shared/components/Title";
import { SignUpButton } from "../shared/components/btns/SignUpButton";
import React from "react";

type Contact = {
  place: string;
  address: string;
  coach: string;
  telephone: string;
  group: string;
  schedule: string;
  desc: string;
};

export const HallsSection: React.FC = () => {
  const contacts: Contact[] = React.useMemo(() => {
    return hallsData.map((h) => {
      return {
        place: h.name,
        address: `${h.address.location} ${h.address.description ?? ""}`,
        coach: h.trainer,
        telephone: trainersData.find((t) => t.name === h.trainer)?.phone ?? "",
        group: h.schedule[0].description ?? "",
        schedule: h.schedule[0].time ?? "",
        desc:
          (h.schedule[1]?.description ? h.schedule[1].description + " " : "") +
          (h.schedule[1]?.time ? h.schedule[1].time : ""),
      };
    });
  }, []);

  return (
    <section id="halls" className=" mt-[170px] bg-[#DCE7E9] ">
      <div className="bg-[url('../../public/kyiv-bg.svg')] bg-no-repeat bg-cover h-full bg-top">
        <div className="px-[20px] ml-[90px] pt-[75px] max-w-[516px] md:pl-0 md:ml-[20px]">
          <Title title={"НАШІ ЗАЛИ"} />
        </div>

        <div className="flex flex-wrap justify-center items-center pb-[70px] xs:hidden">
          {contacts.map((c) => (
            <ContactCard
              place={c.place}
              address={c.address}
              coach={c.coach}
              telephone={c.telephone}
              group={c.group}
              schedule={c.schedule}
              desc={c.desc}
            >
              <SignUpButton />
            </ContactCard>
          ))}
        </div>
        <div className="hidden xs:flex flex-col">
          {contacts.map((c) => (
            <AccordionCardHall
              place={c.place}
              address={c.address}
              coach={c.coach}
              telephone={c.telephone}
              group={c.group}
              schedule={c.schedule}
              desc={c.desc}
            >
              <SignUpButton />
            </AccordionCardHall>
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <Marquee>
          <span
            style={{
              // WebkitTextStroke: "1px #b3adad",
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
