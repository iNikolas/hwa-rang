import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";

import images from "data/galleryImages.json";

import { SignUpButtonOutline } from "../shared/components/btns/SignUpButtonOutline";
import { FilterButton } from "../shared/components/btns/FilterButton";
import { useInView } from "framer-motion";

enum GalleryFilterCategory {
  Exam = "exam",
  Competition = "competition",
  Carpathian = "carpathian",
  Training = "training",
}

const AthletesGallery: React.FC = () => {
  const [galleryData, setGalleryData] = React.useState(images.examImages);
  const [galleryKey, setGalleryKey] = React.useState("exam");

  const sectionRef = React.useRef<HTMLElement>(null);

  const inView = useInView(sectionRef, { once: true });

  React.useEffect(() => {
    if (galleryKey === GalleryFilterCategory.Carpathian) {
      setGalleryData(images?.carpathianImages || []);
    } else if (galleryKey === GalleryFilterCategory.Competition) {
      setGalleryData(images?.competitionImages || []);
    } else if (galleryKey === GalleryFilterCategory.Exam) {
      setGalleryData(images?.examImages || []);
    } else if (galleryKey === GalleryFilterCategory.Training) {
      setGalleryData(images?.trainingImages || []);
    }
  }, [galleryKey]);

  return (
    <section
      ref={sectionRef}
      className="sm:pl-[20px] tablet:pl-[30px] pl-[85px] lg:py-[60px] py-[75px] bg-background"
    >
      <div className="flex justify-between pb-[76px] xl:pb-0 pr-16 xl:pr-[30px] xl:flex-col ">
        <div className="sm:uppercase max-w-[597px] sm:text-[20px] text-[36px] sm:leading-[26px] leading-[46.8px] sm:font-semibold font-bold">
          Спортсмени нашого клубу - це наша гордість!
        </div>
        <div className="xl:pt-[24px] tablet:pt-[36px] self-end">
          <div className="flex gap-[23px] xs:mb-10">
            <p className="text-[14px] leading-none sm:hidden">Фільтр</p>
            <div>
              <div className="flex">
                <FilterButton
                  name={"Екзамен на пояс"}
                  onClick={() => setGalleryKey("exam")}
                  styleProp={"mb-3 mr-3"}
                  activeButton={galleryKey === "exam"}
                />
                <FilterButton
                  name={" Змагання"}
                  onClick={() => setGalleryKey("competition")}
                  styleProp={"mb-3 mr-3"}
                  activeButton={galleryKey === "competition"}
                />
              </div>
              <div className="flex">
                <FilterButton
                  name={"Літній табір"}
                  onClick={() => setGalleryKey("carpathian")}
                  styleProp={"mr-3"}
                  activeButton={galleryKey === "carpathian"}
                />
                <FilterButton
                  name={"Тренування"}
                  onClick={() => setGalleryKey("training")}
                  styleProp={"mr-3"}
                  activeButton={galleryKey === "training"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex xs:hidden items-end sm:pb-6 xl-tablet:pb-[18px] sm:pt-7 xl-tablet:pt-[80px] leading-none">
          <button
            className="custom-swiper-button-prev"
            style={{
              background: "inherit",
              borderRight: "2px solid #DE4B55B2",
              paddingRight: "3px",
              color: "#ababab",
              transition: "color 0.3s ease-in-out",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "black";
              e.currentTarget.style.borderRight = "2px solid #E61717";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#ababab";
              e.currentTarget.style.borderRight = "2px solid #DE4B55B2";
            }}
          >
            Назад
          </button>
          <button
            className="custom-swiper-button-next"
            style={{
              background: "inherit",
              borderLeft: "2px solid #DE4B55B2",
              marginLeft: "14px",
              paddingLeft: "3px",
              color: "#ababab",
              transition: "color 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "black";
              e.currentTarget.style.borderLeft = "2px solid #E61717";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#ababab";
              e.currentTarget.style.borderLeft = "2px solid #DE4B55B2";
            }}
          >
            Вперед
          </button>
        </div>
      </div>

      {inView && (
        <Swiper
          key={galleryKey}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          modules={[Navigation, FreeMode, Autoplay]}
          slidesPerView="auto"
          spaceBetween={13}
          breakpoints={{
            639: {
              spaceBetween: 21,
            },
            1023: {
              spaceBetween: 24,
            },
          }}
          freeMode={true}
          className="mySwiper"
        >
          {galleryData.map(({ folder, photo }) => (
            <SwiperSlide className="!w-fit" key={photo}>
              <img
                className="sm:max-h-[304px] tablet:max-h-[288px] max-h-[456px]"
                src={`/images/${folder}/${photo}.jpg`}
                alt={photo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="sm:block flex justify-center pt-10 sm:pr-5">
        <a href="#form">
          <SignUpButtonOutline className="sm:w-full sm:!max-w-none" />
        </a>
      </div>
    </section>
  );
};

export default AthletesGallery;
