import { Title } from "../shared/components/Title";
import React from "react";
import ReactPlayer from "react-player";

export const AboutTKDSection: React.FC = () => {
  return (
    <section className="sm:pt-[60px] tablet:pt-[120px] pt-[150px] sm:pb-[60px] tablet:pb-[120px] pb-[150px]">
      <div className="sm:px-5 tablet:px-[30px] pl-[85px] pr-[18px]">
        <div>
          <Title title={"ЩО ТАКЕ TAEKWONDO WT?"} />
        </div>

        <div className="flex justify-between pt-6 sm:pb-6 tablet:pb-[60px] pb-[75px] xl:flex-col ">
          <p className="max-w-[350px] xl:max-w-[100%] xl:text-18">
            Taekwondo WT є офіційним Олімпійським видом спорту та з 2000 року,
            та одним з найбільш систематизованих і науково обґрунтованих бойових
            мистецтв світу.
          </p>
          <p className="max-w-[350px] xl:max-w-[100%] xl:pt-4 xl:text-18">
            Буде корисним як для людей, які зацікавлені в спортивних змаганнях і
            заняттях бойовим мистецтвом, так і для тих, хто просто хоче
            покращити фізичну форму та здоров'я.
          </p>
          <p className="max-w-[350px] xl:max-w-[100%] xl:pt-4 xl:text-18">
            Підходить для широкого діапазону людей, включаючи дітей, підлітків
            та дорослих.{" "}
          </p>
        </div>
      </div>

      <ReactPlayer
        url="https://www.youtube.com/embed/l0cM1YV_rYA?si=qqTNujd54mePbcyJ"
        width={"100%"}
        height={"576px"}
      />
    </section>
  );
};
