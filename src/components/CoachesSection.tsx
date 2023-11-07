import React from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";

import coachesData from "data/trainers.json";

import { Title } from "shared/components/Title";
import { cn } from "utils/index";

const Description: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn(
        "uppercase text-24 lg:text-18 leading-none font-bold pb-4",
        className
      )}
    />
  );
};

const CoachesSection: React.FC = () => {
  return (
    <section
      id="trainers"
      className="sm:pb-[108px] tablet:pb-[72px] pb-[150px]"
    >
      <div className="sm:pt-[60px] sm:bg-background pl-[85px] md:pl-[36px] sm:pb-[30px] tablet:pb-[60px] pb-[40px]">
        <Title title="НАШІ ТРЕНЕРИ" />
      </div>
      {coachesData.map((coach, index) => {
        const alt = Boolean(index % 2);

        const Image = () => (
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 lg:w-full shrink-0 rounded-r-none"
          >
            <img
              src={coach.photo}
              alt={coach.name}
              className="h-full w-full object-cover"
            />
          </CardHeader>
        );

        return (
          <Card
            key={coach.name}
            className={cn(
              "w-full flex-row lg:flex-col lg:items-center justify-between tablet:px-[30px]",
              alt && "lg:flex-col-reverse pt-[78px] tablet:pt-[60px]"
            )}
          >
            {!alt && <Image />}
            <CardBody
              className={cn(
                "w-full pl-[10%] sm:px-4 lg:pt-[6%] tablet:pt-[28px] pt-[43px] tablet:px-0 pr-5",
                alt && "pl-[85px]"
              )}
            >
              <p
                className={cn(
                  "uppercase lg:text-24 lg:leading-[31.2px] leading-[48px] text-32 font-bold tablet:pb-[30px] pb-[40px] sm:pt-0 sm:pb-0"
                )}
              >
                {coach.name}
              </p>
              <div className="tablet:flex tablet:gap-x-[43px] tablet:justify-between tablet:w-full">
                <div>
                  <Description className="sm:pt-6">освіта</Description>
                  <p className="pb-[14px]">{coach.education.institution}</p>
                  <p>{coach.education.title}</p>
                </div>

                <div>
                  <Description className="pt-[40px] tablet:pt-0">
                    КВАЛІФІКАЦІЯ
                  </Description>
                  <div className="lg:max-w-max max-w-[454px]">
                    <p className="pb-2">{coach.qualification.institution}</p>
                    <p>{coach.qualification.title}</p>
                  </div>
                </div>
              </div>

              <Description className="pt-[40px]">КОНТАКТИ</Description>
              <a href={`tel:${coach.phone.replace(" ", "")}`}>{coach.phone}</a>
            </CardBody>
            {alt && <Image />}
          </Card>
        );
      })}
    </section>
  );
};

export default CoachesSection;
