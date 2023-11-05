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
      img: "../images/advantage/advantage2.jpg",
      desc: `Спортсмени розвивають свої фізичні здібності, навчаються спортивній дисципліні та будують дружні стосунки в прекрасному гірському середовищі.`,
    },
  ];

  return (
    <section
      id="advantages"
      className="flex flex-col pl-[85px] pr-[18px] md:px-[30px] xs:px-[20px]"
    >
      <Title title={"НАШІ ПЕРЕВАГИ"} style="max-w-[700px]" />
      <div className="flex md:flex-col pt-7 xs:pt-0 justify-between">
        {advantage.map(({ title, img, desc }, index) => (
          <Card className="mt-6 w-[430px] md:w-full" key={index}>
            <CardHeader color="blue-gray" className="relative h-65">
              <img src={img} alt="card-image" className="h-full w-full" />
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
          </Card>
        ))}
      </div>
    </section>
  );
};
