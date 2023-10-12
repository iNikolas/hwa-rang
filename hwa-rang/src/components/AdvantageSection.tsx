import { Card } from "../shared/components/Card";
import { Title } from "../shared/components/Title";

export const AdvantageSection: React.FC = () => {
    const advantage = [
        {
            title: "Офіційна сертифікація на пояси",
            img: "../images/advantage/advantage1.jpg",
            desc: `Офіційна сертифікація на пояси в тхеквондо є важливим
            етапом в розвитку спортсменів і підтверджує їхні
            досягнення та вміння в цьому бойовому мистецтві.`,
        },
        {
            title: "Участь у державних та міжнародних змаганнях",
            img: "../images/advantage/advantage2.jpg",
            desc: `Активна участь у державних та міжнародних змаганнях - ключовий шлях для спортсменів у тхеквондо до досягнення високого рівня 
            і визнання.`,
        },
        {
            title: "Щорічні  збори спортсменів в Карпатах",
            img: "../images/advantage/advantage3.jpg",
            desc: `Спортсмени розвивають свої фізичні здібності, навчаються спортивній дисципліні та будують дружні стосунки в прекрасному гірському середовищі.`,
        },
    ];

    return (
        <section id="advantages" className="px-[85px] py-[170px]">
            <Title title={"НАШІ ПЕРЕВАГИ"} />
            <div className="flex justify-between pt-7">
                {advantage.map(({ title, img, desc }, index) => (
                    <Card
                        key={index}
                        image={img}
                        title={title}
                        description={desc}
                    />
                ))}
            </div>
        </section>
    );
};
