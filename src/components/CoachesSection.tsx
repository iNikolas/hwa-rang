import { Title } from "../shared/components/Title";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";

export const CoachesSection: React.FC = () => {
  return (
    <section
      id="trainers"
      className="sm:pb-[108px] tablet:pb-[72px] pb-[150px]"
    >
      <div className="sm:pt-[60px] sm:bg-background pl-[85px] md:pl-[36px] sm:pb-[30px] tablet:pb-[60px] pb-[40px]">
        <Title title="НАШІ ТРЕНЕРИ" />
      </div>
      <Card className="w-full flex-row lg:flex-col lg:items-center justify-between tablet:px-[30px]">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 lg:w-full shrink-0 rounded-r-none"
        >
          <img
            src="\images\coaches\doletskiy.png"
            alt="Oleksiy Doletskyi"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="w-full pl-[10%] sm:px-4 pt-[6%]">
          <p className="mb-4 uppercase text-32 md:text-24 font-bold pb-[40px] sm:pt-0 tablet:pt-6 xs:pb-0">
            Долецький Олексій Вікторович
          </p>
          <p className="mb-2 uppercase text-24 md:text-18 font-bold pb-2">
            освіта
          </p>
          <p className="pb-2">
            Національний університет фізичного виховання і спорту України.
          </p>
          <p>
            Магістр за спеціальністью “Фізична культура і спорт”. За освітньою
            програмою "Олімпійський спорт і освіта"
          </p>

          <h4 className="text-24 md:text-18 font-bold pb-2 pt-[40px]">
            КВАЛІФІКАЦІЯ
          </h4>
          <p className="pb-2">WORLD TAEKWONDO HEADQUARTERS KUKKIWON</p>
          <p>Чорний пасок, 1-й Дан з Тхеквондо WT</p>

          <h4 className="text-24 md:text-18 font-bold pb-2 pt-[40px]">
            КОНТАКТИ
          </h4>
          <a href="tel:0975135810">097 513 58 10</a>
        </CardBody>
      </Card>
      <Card className="w-full flex-row lg:flex-col-reverse lg:items-center justify-between pt-[78px] tablet:pt-[60px] tablet:px-[30px]">
        <CardBody className="w-full pl-[85px] sm:px-5">
          <p className="mb-4 uppercase text-32 md:text-24 font-bold pb-[40px] lg:pt-6 xs:pb-0">
            ФІЛАТОВ ІГОР ВАСИЛЬОВИЧ
          </p>
          <p className="mb-2 uppercase text-24 md:text-18 font-bold pb-2">
            освіта
          </p>
          <p className="pb-2">
            Національний університет фізичного виховання і спорту України.
          </p>
          <p>
            Магістр за спеціальністью “Фізична культура і спорт”. За освітньою
            програмою "Олімпійський спорт і освіта"
          </p>

          <h4 className="text-24 md:text-18 font-bold pb-2 pt-[40px]">
            КВАЛІФІКАЦІЯ
          </h4>
          <p className="pb-2">WORLD TAEKWONDO HEADQUARTERS KUKKIWON</p>
          <p>Чорний пасок, 1-й Дан з Тхеквондо WT</p>

          <h4 className="text-24 md:text-18 font-bold pb-2 pt-[40px]">
            КОНТАКТИ
          </h4>
          <a href="tel:0933501252">093 350 12 52</a>
        </CardBody>
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 lg:w-full shrink-0 rounded-r-none"
        >
          <img
            src="\images\coaches\filatov.png"
            alt="Ihor Filatov"
            className="h-full w-full object-cover"
          />
        </CardHeader>
      </Card>
    </section>
  );
};
