import { MenuMobile } from "../shared/components/Menu";
import { SignUpButtonOutline } from "../shared/components/btns/SignUpButtonOutline";

const title = "KYIV";
const title2 = " TAE";

export const Header: React.FC = () => {
  return (
    <header className="relative flex md:flex-col h-screen">
      <div className="relative md:flex items-center justify-between hidden bg-white px-[20px] h-[86px]"></div>
      <div className="absolute z-30 left-[15px] top-[30px] tablet:top-[20px] font-fontMonument bg-gradient-to-r from-[#BA2E30] via-[#A277A9] to-[#F85253] text-transparent bg-clip-text font-extrabold text-[32px] sm:text-[20px] text-center">
        HWA-RANG
      </div>
      <div className="absolute lg:flex hidden flex-row-reverse top-[32px] right-0 z-10">
        <MenuMobile />
      </div>
      <div className="relative flex justify-end md:h-full pt-[36px] bg-[url('/src/assets/banner.png')] xs:bg-[url('/src/assets/banner-mobile.png')] bg-cover w-3/5 md:w-full lg:bg-center">
        <nav className="lg:hidden">
          <ul className="flex justify-between pr-2 mt-[5px] text-14 xl:text-12">
            <li className="pl-[35px] xl:pl-[15px] text-white font-medium">
              <a href="#about">/ ПРО КЛУБ</a>
            </li>
            <li className="pl-[35px] xl:pl-[15px] text-white font-medium">
              <a href="#advantages">/ НАШІ ПЕРЕВАГИ</a>
            </li>
            <li className="pl-[35px] xl:pl-[15px] text-white font-medium">
              <a href="#trainers">/ ТРЕНЕРИ</a>
            </li>
          </ul>
        </nav>
        <div className="absolute right-0 top-[200px] font-fontMonument text-white text-80 xl:text-58 lg:hidden font-extrabold">
          <span> {title}</span>
          <span className="pl-9">{title2}</span>
        </div>
      </div>
      <div className="absolute md:block hidden sm:bottom-[67px] tablet:bottom-[10%] sm:left-[20px] left-[30px] xs:mt-[50px] sm:max-w-[335px] sm:w-full">
        <h1 className="tablet:tracking-[0.04rem] tablet:leading-[75.4px] tablet:uppercase mb-[40px] text-white text-58 sm:text-48 leading-none font-bold uppercase md:normal-case sm:mb-[30px]">
          Тхеквандо <br /> для <span className="sm:inline hidden">дітей</span>
          <span className="sm:hidden">дорослих</span>
          <br />
          та <span className="sm:inline hidden">дорослих</span>
          <span className="sm:hidden">дітей</span>
        </h1>
        <h3 className="sm:pb-[60px] pb-[50px] text-white text-24 sm:leading-[31.2px] leading-[36px] font-semibold sm:font-[500] tracking-normal">
          Тренування для всіх,
          <br /> незалежно від рівня <br />
          підготовки
        </h3>
        <a href="#form" className="sm:pr-[20px] sm:block">
          <SignUpButtonOutline className="w-full sm:max-w-[335px]" />
        </a>
      </div>
      <div className="relative flex flex-col pt-[36px] w-2/5 md:hidden">
        <nav className="lg:hidden">
          <ul className="flex pl-[15px] xl:pl-[10px] mt-[5px] text-14 xl:text-12 font-medium">
            <li className="font-medium">
              <a href="#halls">/ ЗАЛИ</a>
            </li>
            <li className="pl-[35px] xl:pl-[15px] font-medium ">
              <a href="#services">/ ПОСЛУГИ</a>
            </li>
            <li className="pl-[35px] xl:pl-[5px] ml-[35px] xl:ml-[5px] font-semibold text-[#ba2e30]">
              <a href="#form">/ ЗАПИСАТИСЯ НА ТРЕНУВАННЯ</a>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-[14px] left-[30px]">
          <h1 className="mb-[30px] text-black text-58 1xl:text-42 font-extrabold uppercase md:normal-case tracking-normal leading-[69px]">
            Тхеквандо <br /> для дорослих <br /> та дітей
          </h1>
          <p className="font-bold text-24 leading-[31.2px] mb-[50px]">
            Тренування для всіх, незалежно{" "}
            <span className="whitespace-nowrap">від рівня підготовки</span>
          </p>
          <a href="#form">
            <SignUpButtonOutline />
          </a>
        </div>

        <div className="absolute left-[10px] top-[200px] font-fontMonument text-transparent bg-clip-text bg-gradient-to-r  from-[#09142e] via-[#58275f] to-[#f85253] text-80 xl:text-58 lg:hidden font-extrabold">
          KWONDO
        </div>
      </div>
    </header>
  );
};
