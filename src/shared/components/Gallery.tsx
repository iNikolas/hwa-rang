// import style from "./GallerySection.module copy.scss";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Gallery: React.FC<{ photo: string[] }> = ({ photo }) => {
    return (
        <section>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {photo.map((item) => (
                    <SwiperSlide>
                        <img src={item} alt="img" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
