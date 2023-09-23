import { Card } from "../shared/components/Card";
import { Title } from "../shared/components/Title";
import { SignUpButton } from "../shared/components/btns/SignUpButton";

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
        <section className="px-[85px] py-[170px]">
            <Title title={"НАШІ ПЕРЕВАГИ"} />
            <div className="flex justify-between pt-7 ">
                {advantage.map(({ title, img, desc }, index) => (
                    <Card
                        key={index}
                        image={img}
                        title={title}
                        description={desc}
                    >
                        <SignUpButton />
                    </Card>
                ))}
            </div>
        </section>
    );
};
