import { useFormContext } from "react-hook-form";
import { Title } from "../shared/components/Title";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import services from "data/services.json";

import { SignUpButtonOutline } from "../shared/components/btns/SignUpButtonOutline";

const ServicesSection: React.FC = () => {
  const { setValue } = useFormContext();

  return (
    <section
      id="services"
      className="flex flex-col pl-[85px] pr-[18px] md:px-[30px] xs:px-[20px]"
    >
      <Title title={"НАШІ ПОСЛУГИ"} />
      <div className="flex gap-x-[20px] gap-y-[60px] md:flex-col pt-[30px] tablet:pt-[60px] justify-between">
        {services.map(({ title, img, desc }, index) => (
          <Card className="w-[430px] md:w-full justify-between" key={index}>
            <div>
              <CardHeader color="blue-gray" className="relative h-65">
                <picture>
                  <source type="image/avif" srcSet={img + ".avif"} />
                  <img
                    src={img + ".jpg"}
                    alt="card-image"
                    className="h-full w-full"
                  />
                </picture>
              </CardHeader>
              <CardBody>
                <p
                  color="blue-gray"
                  className="uppercase tracking-[0.04rem] pt-[24px] tablet:pt-[30px] lg:pb-0 pb-4 text-24 xs:text-20 font-bold xs:font-semibold align-top"
                >
                  {title}
                </p>
                <p className="lg:pb-[30px] pb-[42px] pt-3 sm:pt-2 relative ">
                  {desc}
                  <span className="absolute lg:hidden w-1/2 h-1 text-20 xs:text-18 border-t border-red-500 left-0 top-0" />
                </p>
              </CardBody>
            </div>

            <CardFooter className="pt-0 mb-0">
              <a href="#form">
                <SignUpButtonOutline
                  className="sm:w-full sm:!max-w-none"
                  onClick={() => setValue("service", title)}
                />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
