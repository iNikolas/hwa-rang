import { MenuMobile } from "../shared/components/Menu";
import { SignUpButtonOutline } from "../shared/components/btns/SignUpButtonOutline";

export const Header: React.FC = () => {
    const title = "KYIV";
    const title2 = " TAE";

    return (
        <header className="relative flex sm:flex-col h-[750px]">
            {/* TODO: знайти рішення, як уникнути дублювання */}
            <div className="relative xs:flex items-center justify-between hidden bg-white px-[20px] h-[86px] z-21">
                <div className="font-fontMonument bg-gradient-to-r from-[#BA2E30] via-[#A277A9] to-[#F85253] text-transparent bg-clip-text font-semibold text-[20px] text-center">
                    HWA-RANG
                </div>
                <div className="flex-row-reverse z-10">
                    <MenuMobile />
                </div>
            </div>
            <div className="absolute lg:flex hidden xs:hidden flex-row-reverse top-[38px] right-0 z-10">
                <MenuMobile />
            </div>
            <div className="relative flex justify-between sm:h-full pt-[36px] bg-[url('/src/assets/banner.png')] xs:bg-[url('/src/assets/banner-mobile.png')] bg-cover  w-3/5  md:w-full lg:bg-center">
                <div className="font-fontMonument xs:hidden bg-gradient-to-r from-[#BA2E30] via-[#A277A9] to-[#F85253] text-transparent bg-clip-text font-semibold text-2xl leading-8 text-center xs:pl-[15px] pl-[85px] xl:pl-[30px]">
                    HWA-RANG
                </div>

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
            <div className="absolute md:block hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xs:mt-[50px] ">
                <h1 className="mb-3 text-white text-58 1xl:text-42 font-extrabold uppercase md:normal-case leading-[69px] md:leading-[48px] xs:mb-[24px]">
                    Тхеквандо <br /> для дітей <br />
                    та дорослих
                </h1>
                <h3 className="pb-[25px] text-white text-24 font-bold tracking-normal">
                    Тренування для всіх, незалежно <br /> від рівня підготовки
                </h3>
                <SignUpButtonOutline />
            </div>
            <div className="relative flex flex-col pt-[36px] w-2/5  md:hidden">
                <nav className="lg:hidden">
                    <ul className="flex pl-[15px] xl:pl-[10px] mt-[5px] text-14 xl:text-12 font-medium">
                        <li className="font-medium">
                            <a href="#halls">/ ЗАЛИ</a>
                        </li>
                        <li className="pl-[35px] xl:pl-[15px] font-medium ">
                            <a href="#services">/ ПОСЛУГИ</a>
                        </li>
                        <li className="pl-[35px] xl:pl-[5px] ml-[35px] xl:ml-[5px] font-semibold text-[#ba2e30]">
                            <a href="#signup">/ ЗАПИСАТИСЯ НА ТРЕНУВАННЯ</a>
                        </li>
                    </ul>
                </nav>
                <div className="pt-[260px] pl-[30px] lg:pt-[76px]">
                    <h1 className="mb-3 text-black text-58 1xl:text-42 font-extrabold uppercase md:normal-case tracking-normal leading-[69px]">
                        Тхеквандо <br /> для дорослих <br /> та дітей
                    </h1>
                    <h3 className="pb-[25px] text-black text-24 font-bold tracking-normal">
                        Тренування для всіх, незалежно <br /> від рівня
                        підготовки
                    </h3>
                    <SignUpButtonOutline />
                </div>

                <div className="absolute left-[10px] top-[200px] font-fontMonument text-transparent bg-clip-text bg-gradient-to-r  from-[#09142e] via-[#58275f] to-[#f85253] text-80 xl:text-58 lg:hidden font-extrabold">
                    KWONDO
                </div>
            </div>
        </header>
    );
};
