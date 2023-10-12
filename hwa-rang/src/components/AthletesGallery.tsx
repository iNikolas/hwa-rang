import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import { SignUpButtonOutline } from "../shared/components/btns/SignUpButtonOutline";
import { FilterButton } from "../shared/components/btns/FilterButton";

type Image = {
    folder: string;
    photo: string;
};

type GalleryData = {
    carpathianImages: Image[];
    examImages: Image[];
    competitionImages: Image[];
    trainingImages: Image[];
};

enum GalleryFilterCategory {
    Exam = "exam",
    Competition = "competition",
    Carpathian = "carpathian",
    Training = "training",
}

export const AthletesGallery: React.FC = () => {
    const [images, setImages] = useState<GalleryData | null>(null);
    const [galleryData, setGalleryData] = useState<Image[]>([]);
    const [galleryKey, setGalleryKey] = useState("exam");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("src/shared/galleryImages.json");
                if (!response.ok) {
                    throw new Error("Помилка запиту до сервера");
                }
                const jsonData = await response.json();

                setImages(jsonData);
            } catch (error) {
                console.error("Помилка отримання даних:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (images) {
            setGalleryData(images.carpathianImages || []);
        }
    }, [images]);

    useEffect(() => {
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
        <section className="py-[150px]">
            <div className="flex justify-between pb-[76px] pr-16">
                <div className="pl-[85px] w-[597px] text-3xl font-semibold">
                    СПОРТСМЕНИ НАШОГО КЛУБУ - ЦЕ НАША ГОРДІСТЬ!
                </div>
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
                            styleProp={"mb-3 mr-3"}
                            activeButton={galleryKey === "carpathian"}
                        />
                        <FilterButton
                            name={"Тренування"}
                            onClick={() => setGalleryKey("training")}
                            styleProp={"mb-3 mr-3"}
                            activeButton={galleryKey === "training"}
                        />
                    </div>
                </div>
                <div className="flex items-end pb-3">
                    <button
                        className="custom-swiper-button-prev"
                        style={{
                            height: "14px",
                            background: "inherit",
                            borderRight: "2px solid #DE4B55B2",
                            paddingRight: "3px",
                            color: "#ababab",
                            transition: "color 0.3s ease-in-out",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = "black";
                            e.currentTarget.style.borderRight =
                                "2px solid #E61717";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#ababab";
                            e.currentTarget.style.borderRight =
                                "2px solid #DE4B55B2";
                        }}
                    >
                        Назад
                    </button>
                    <button
                        className="custom-swiper-button-next"
                        style={{
                            height: "14px",
                            background: "inherit",
                            borderLeft: "2px solid #DE4B55B2",
                            marginLeft: "14px",
                            paddingLeft: "3px",
                            color: "#ababab",
                            transition: "color 0.3s ease-in-out",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = "black";
                            e.currentTarget.style.borderLeft =
                                "2px solid #E61717";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#ababab";
                            e.currentTarget.style.borderLeft =
                                "2px solid #DE4B55B2";
                        }}
                    >
                        Вперед
                    </button>
                </div>
            </div>

            <Swiper
                navigation={{
                    nextEl: ".custom-swiper-button-next",
                    prevEl: ".custom-swiper-button-prev",
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, FreeMode, Autoplay]}
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                className="mySwiper"
            >
                {galleryData.map(({ folder, photo }) => (
                    <SwiperSlide key={photo}>
                        <img
                            src={`../public/images/${folder}/${photo}.jpg`}
                            alt={photo}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-center pt-10">
                <SignUpButtonOutline />
            </div>
        </section>
    );
};
