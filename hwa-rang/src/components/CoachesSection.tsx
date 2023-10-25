import { Title } from "../shared/components/Title";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";

export const CoachesSection: React.FC = () => {
    return (
        <section id="trainers" className="py-[50px]">
            <div className="pl-[85px] md:pl-[36px] pb-7">
                <Title title={"НАШІ ТРЕНЕРИ"} style="max-w-[500px]" />
            </div>
            <Card className="w-full flex-row lg:flex-col lg:items-center justify-between pr-[20px] lg:px-[30px]">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 lg:w-full shrink-0 rounded-r-none"
                >
                    <img
                        src="..\public\images\coaches\doletskiy.png"
                        alt="Oleksiy Doletskyi"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody className="w-full pl-[10%] xs:pl-0 pt-[6%]">
                    <p className="mb-4 uppercase text-32 md:text-24 font-bold pb-[40px] lg:pt-6 xs:pb-0">
                        Долецький Олексій Вікторович
                    </p>
                    <p className="mb-2 uppercase text-24 md:text-18 font-bold pb-2">
                        освіта
                    </p>
                    <p className="pb-2">
                        Національний університет фізичного виховання і спорту
                        України.
                    </p>
                    <p>
                        Магістр за спеціальністью “Фізична культура і спорт”. За
                        освітньою програмою "Олімпійський спорт і освіта"
                    </p>

                    <h4 className="text-24 md:text-18 font-bold pb-2 pt-[40px]">
                        КВАЛІФІКАЦІЯ
                    </h4>
                    <p className="pb-2">
                        WORLD TAEKWONDO HEADQUARTERS KUKKIWON
                    </p>
                    <p>Чорний пасок, 1-й Дан з Тхеквондо WT</p>

                    <h4 className="text-24 md:text-18 font-bold pb-2 pt-[40px]">
                        КОНТАКТИ
                    </h4>
                    <a href="tel:0975135810">097 513 58 10</a>
                </CardBody>
            </Card>
            <Card className="w-full flex-row lg:flex-col-reverse lg:items-center justify-between lg:px-[30px] pt-5">
                <CardBody className="w-full pl-[85px] xs:pl-0 pt-[6%]">
                    <p className="mb-4 uppercase text-32 md:text-24 font-bold pb-[40px] lg:pt-6 xs:pb-0">
                        ФІЛАТОВ ІГОР ВАСИЛЬОВИЧ
                    </p>
                    <p className="mb-2 uppercase text-24 md:text-18 font-bold pb-2">
                        освіта
                    </p>
                    <p className="pb-2">
                        Національний університет фізичного виховання і спорту
                        України.
                    </p>
                    <p>
                        Магістр за спеціальністью “Фізична культура і спорт”. За
                        освітньою програмою "Олімпійський спорт і освіта"
                    </p>

                    <h4 className="text-24 md:text-18 font-bold pb-2 pt-[40px]">
                        КВАЛІФІКАЦІЯ
                    </h4>
                    <p className="pb-2">
                        WORLD TAEKWONDO HEADQUARTERS KUKKIWON
                    </p>
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
                        src="..\public\images\coaches\filatov.png"
                        alt="Ihor Filatov"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
            </Card>
            {/* <div className="flex justify-between">
                <img
                    src="..\public\images\coaches\doletskiy.png"
                    alt="Oleksiy Doletskyi"
                />
                <div className="pl-[270px]">
                    <h2 className="text-32 font-bold pb-[40px]">
                        ДОЛЕЦЬКИЙ ОЛЕКСІЙ ВІКТОРОВИЧ
                    </h2>
                    <h4 className="text-24 font-bold pb-2 ">ОСВІТА</h4>
                    <p className="pb-2">
                        Національний університет фізичного виховання і спорту
                        України.
                    </p>
                    <p>
                        Магістр за спеціальністью “Фізична культура і спорт”. За
                        освітньою програмою "Олімпійський спорт і освіта"
                    </p>

                    <h4 className="text-24 font-bold pb-2 pt-[40px]">
                        КВАЛІФІКАЦІЯ
                    </h4>
                    <p className="pb-2">
                        WORLD TAEKWONDO HEADQUARTERS KUKKIWON
                    </p>
                    <p>Чорний пасок, 1-й Дан з Тхеквондо WT</p>

                    <h4 className="text-24 font-bold pb-2 pt-[40px]">
                        КОНТАКТИ
                    </h4>
                    <a href="tel:0975135810">097 513 58 10</a>
                </div>
            </div>
            <div className="flex justify-between pt-[100px]">
                <div className="pl-[140px]">
                    <h2 className="text-32 font-bold pb-[40px]">
                        ФІЛАТОВ ІГОР ВАСИЛЬОВИЧ
                    </h2>
                    <h4 className="text-24 font-bold pb-2 ">ОСВІТА</h4>
                    <p className="pb-2">
                        Національний університет фізичного виховання і спорту
                        України.
                    </p>
                    <p>
                        Магістр за спеціальністью “Фізична культура і спорт”. За
                        освітньою програмою "Олімпійський спорт і освіта"
                    </p>

                    <h4 className="text-24 font-bold pb-2 pt-[40px]">
                        КВАЛІФІКАЦІЯ
                    </h4>
                    <p className="pb-2">
                        WORLD TAEKWONDO HEADQUARTERS KUKKIWON
                    </p>
                    <p>Чорний пасок, 1-й Дан з Тхеквондо WT</p>

                    <h4 className="text-24 font-bold pb-2 pt-[40px]">
                        КОНТАКТИ
                    </h4>
                    <a href="tel:0933501252">093 350 12 52</a>
                </div>
                <img
                    src="..\public\images\coaches\filatov.png"
                    alt="Ihor Filatov"
                />
            </div> */}
        </section>
    );
};
