import { Card, CardHeader, CardBody } from "@material-tailwind/react";

import advantages from "data/anvantages.json";

import { Title } from "../shared/components/Title";

export const AdvantageSection: React.FC = () => {
  return (
    <section
      id="advantages"
      className="flex flex-col pl-[85px] pr-[18px] md:px-[30px] xs:px-[20px] sm:pb-[72px] tablet:pb-[120px] pb-[150px]"
    >
      <Title title={"НАШІ ПЕРЕВАГИ"} style="max-w-[700px]" />
      <div className="flex md:flex-col gap-x-5 lg:gap-y-[60px] xs:pt-6 tablet:pt-[60px] pt-[30px] justify-between">
        {advantages.map(({ title, img, desc }, index) => (
          <Card className="w-[430px] md:w-full" key={index}>
            <CardHeader color="blue-gray">
              <img src={img} alt="card-image" className="h-full w-full" />
            </CardHeader>
            <CardBody>
              <p
                color="blue-gray"
                className="tracking-[0.02rem] pt-6 md:pb-0 pb-[18px] sm:text-[20px] text-[24px] font-bold sm:font-semibold align-top sm:uppercase sm:leading-[26px] leading-[28.8px]"
              >
                {title}
              </p>
              <p className="sm:pt-2 tablet:pt-[14px] pt-3 relative">
                {desc}
                <span className="absolute w-1/2 h-1 text-20 xs:text-18 border-t border-red-500 left-0 top-0 md:hidden" />
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};
