// import { Card } from "../shared/components/Card";
import { Title } from "../shared/components/Title";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";

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
    <section
      id="advantages"
      className="flex flex-col pl-[85px] pr-[18px] md:px-[30px] xs:px-[20px] sm:pb-[72px] tablet:pb-[120px] pb-[150px]"
    >
      <Title title={"НАШІ ПЕРЕВАГИ"} style="max-w-[700px]" />
      <div className="flex md:flex-col gap-x-5 lg:gap-y-[60px] xs:pt-6 tablet:pt-[60px] pt-[30px] justify-between">
        {advantage.map(({ title, img, desc }, index) => (
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
