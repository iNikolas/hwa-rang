import { Title } from "../shared/components/Title";
import Marquee from "react-fast-marquee";

const AboutSection: React.FC = () => {
  return (
    <>
      <section
        id="about"
        className="relative sm:pt-[60px] tablet:pt-[108px] pt-[142px] pl-[85px] pr-[20px] lg:px-[30px] pb-[15px] overflow-visible"
      >
        <div className="flex justify-between">
          <h2
            className="text-[230px] xl:text-[180px] lg:hidden tracking-[34.5px] leading-[207px]  transition duration-500 hover:bg-gradient-to-r from-[#09142e] via-[#58275f] to-[#f85253] bg-clip-text text-transparent bg-[2px] hover:bg-clip-text"
            style={{
              WebkitTextStroke: "1px #b3adad",
              fontFamily: "MontserratBlack",
            }}
          >
            TAE
          </h2>
          <div className="1xl:absolute sm:top-[60px] tablet:top-[108px] top-[142px] left-[85px] lg:left-[30px]">
            <Title title={"ПРО КЛУБ"} />
          </div>

          <div className="flex flex-col items-start tablet:max-w-[416px] max-w-[477px]">
            <p className="mt-[60px] xl-tablet:mt-[100px] md:text-18">
              Наш клуб є частиною олімпійського руху. Ми орієнтовані на
              спортивні досягнення наших учнів та розвиток олімпійського
              тхеквондо в Україні.
            </p>
            <span className="lg:hidden  border-b border-[#f16669] w-1/2 mt-7"></span>
          </div>
        </div>
        <h2
          style={{
            WebkitTextStroke: "1px #b3adad",
            fontFamily: "MontserratBlack",
          }}
          className="lg:hidden  mx-3 xl:text-[180px] text-[230px] font-extrabold tracking-[34.5px] leading-[207px]  transition duration-500 hover:bg-gradient-to-r from-[#09142e] via-[#58275f] to-[#f85253] bg-clip-text text-transparent bg-[2px] hover:bg-clip-text"
        >
          KWON
        </h2>
        <div className="flex">
          <h2
            style={{
              WebkitTextStroke: "1px #b3adad",
              fontFamily: "MontserratBlack",
            }}
            className="lg:hidden mx-3 xl:text-[180px] text-[230px] font-extrabold tracking-[34.5px] leading-[207px]  transition duration-500 hover:bg-gradient-to-r from-[#09142e] via-[#58275f] to-[#f85253] bg-clip-text text-transparent bg-[2px] hover:bg-clip-text"
          >
            DO
          </h2>
          <div className="flex flex-col items-start pl-[50px] lg:p-0 tablet:max-w-[416px] max-w-[477px]">
            <p className="ml-90px mt-[70px] lg:mt-4 md:text-18">
              Ми працюємо з дітьми та дорослими будь- якого рівня підготовки. В
              нас тренуються як досвідченні спортсмени так і початківці.
            </p>
            <span className="lg:hidden  border-b border-[#f16669] w-1/2  mt-7"></span>
          </div>
        </div>
        <h2
          style={{
            WebkitTextStroke: "1px #b3adad",
            fontFamily: "MontserratBlack",
          }}
          className="lg:hidden  mx-3 xl:text-[180px] text-[230px] font-extrabold tracking-[34.5px] leading-[207px]  transition duration-500 hover:bg-gradient-to-r from-[#09142e] via-[#58275f] to-[#f85253] bg-clip-text text-transparent bg-[2px] hover:bg-clip-text"
        >
          KYIV
        </h2>
        <div className="flex flex-col items-start mt-[41px] ml-[30px] lg:ml-0 lg:mt-4 tablet:max-w-[416px] max-w-[477px]">
          <p className="md:text-18">
            Індивідуальний підхід, ефективні персональні програми та
            збалансовані фізичні навантаження гарантовані!
          </p>
          <span className="lg:hidden  border-b border-[#f16669] w-[50%] mt-7 "></span>
        </div>
        <div className="absolute sm-t-md:hidden right-[50px] bottom-[50px] lg:bottom-1/2 lg:translate-y-full lg:right-[30px] font-Montserrat font-normal leading-24 tracking-[0.12em] ml-[50px] bg-gradient-to-r from-[#09142e] via-[#58275f] to-[#f85253] bg-clip-text text-transparent uppercase">
          <p className="lg:text-16">/ тренування для:</p>
          <p className="text-center lg:text-16">дітей</p>
          <p className="mr-[40px] lg:text-16">дорослих</p>
          <p className="ml-[50px] lg:text-16">початківців</p>
          <p className="ml-[20px] lg:text-16">профі /</p>
        </div>
      </section>
      <div className="hidden lg:block overflow-visible">
        <Marquee className="sm:mb-[38px] mb-[82px]">
          <span
            style={{
              color: "transparent",
              background:
                "linear-gradient(90deg, rgba(186, 46, 48, 0.9) 2.82%, rgba(88, 29, 96, 0.9) 52%, rgba(248, 82, 83, 0.9) 104.36%)",
              WebkitBackgroundClip: "text",
              fontFamily: "MontserratBlack",
            }}
            className="text-[96px] font-extrabold text-transparent"
          >
            TAEKWONDO - KYIV &nbsp;
          </span>
        </Marquee>
      </div>
    </>
  );
};

export default AboutSection;
