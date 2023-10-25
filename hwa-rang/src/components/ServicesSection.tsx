import { Title } from "../shared/components/Title";
import { SignUpButtonOutline } from "../shared/components/btns/SignUpButtonOutline";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";

export const ServicesSection: React.FC = () => {
    const advantage = [
        {
            title: "Групові тренування",
            img: "../images/services/group.png",
            desc: `Офіційна сертифікація на пояси в тхеквондо є важливим
            етапом в розвитку спортсменів і підтверджує їхні
            досягнення та вміння в цьому бойовому мистецтві.`,
        },
        {
            title: "Персональні тренування",
            img: "../images/services/personal.png",
            desc: `Обирайте персональні тренування щоб максимально швидко вивчити техніку, покращити фізичну форму та досягти поставленої мети. `,
        },
        {
            title: "Он-лайн тренування",
            img: "../images/services/online.png",
            desc: `Оберіть он-лайн тренування. Економте свій час тренуючись вдома, або в будь якому зручному для вас місці.`,
        },
    ];

    return (
        <section
            id="services"
            className="flex flex-col pl-[85px] pr-[18px] md:px-[30px] xs:px-[20px]"
        >
            <Title title={"НАШІ ПОСЛУГИ"} style="max-w-[460px] pl-4" />
            <div className="flex md:flex-col pt-7 xs:pt-0 justify-between">
                {advantage.map(({ title, img, desc }, index) => (
                    <Card
                        className="mt-6 w-[430px] md:w-full justify-between"
                        key={index}
                    >
                        <div>
                            <CardHeader
                                color="blue-gray"
                                className="relative h-65"
                            >
                                <img
                                    src={img}
                                    alt="card-image"
                                    className="h-full w-full"
                                />
                            </CardHeader>
                            <CardBody className="px-[15px]">
                                <p
                                    color="blue-gray"
                                    className="pt-3 pb-4 text-24 xs:text-20 font-bold xs:font-semibold align-top"
                                >
                                    {title}
                                </p>
                                <p className="py-5 relative ">
                                    {desc}
                                    <span className="absolute w-1/2 h-1 text-20 xs:text-18 border-t border-red-500 left-0 top-0"></span>
                                </p>
                            </CardBody>
                        </div>

                        <CardFooter className="pt-0 pl-4">
                            <SignUpButtonOutline />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
