import { Title } from "../shared/components/Title";

export const AboutSection: React.FC = () => {
    return (
        <section
            id="about"
            className="relative pt-[170px] pl-[85px] pr-[67px] pb-[15px]"
        >
            <div className="flex justify-between">
                <h2
                    className="font-Satoshi text-36 text-[230px] font-extrabold tracking-[34.5px] leading-[207px]  transition duration-500 hover:bg-gradient-to-r from-[#09142e] via-[#58275f] to-[#f85253] bg-clip-text text-transparent bg-[2px] hover:bg-clip-text"
                    style={{ WebkitTextStroke: "1px #b3adad" }}
                >
                    TAE
                </h2>
                <div className="mt-[60px] 1xl:absolute top-0 left-[85px]">
                    <Title title={"ПРО КЛУБ"} />
                </div>

                <div className="flex flex-col items-start">
                    <p className="mt-[60px]">
                        Наш клуб є частиною олімпійського руху. <br /> Ми
                        орієнтовані на спортивні досягнення <br /> наших учнів
                        та розвиток олімпійського <br /> тхеквондо в Україні.
                    </p>
                    <span className="border-b border-[#f16669] w-1/2 mt-7"></span>
                </div>
            </div>
            <h2
                style={{ WebkitTextStroke: "1px #b3adad" }}
                className="font-Satoshi mx-3 text-36 text-[230px] font-extrabold tracking-[34.5px] leading-[207px]  transition duration-500 hover:bg-gradient-to-r from-[#09142e] via-[#58275f] to-[#f85253] bg-clip-text text-transparent bg-[2px] hover:bg-clip-text"
            >
                KWON
            </h2>
            <div className="flex">
                <h2
                    style={{ WebkitTextStroke: "1px #b3adad" }}
                    className="font-Satoshi mx-3 text-36 text-[230px] font-extrabold tracking-[34.5px] leading-[207px]  transition duration-500 hover:bg-gradient-to-r from-[#09142e] via-[#58275f] to-[#f85253] bg-clip-text text-transparent bg-[2px] hover:bg-clip-text"
                >
                    DO
                </h2>
                <div className="flex flex-col items-start pl-[50px]">
                    <p className="ml-90px mt-[70px]">
                        Ми працюємо з дітьми та дорослими будь-
                        <br />
                        якого рівня підготовки. В нас тренуються як
                        <br /> досвідченні спортсмени так і початківці.
                    </p>
                    <span className="border-b border-[#f16669] w-1/2  mt-7"></span>
                </div>
            </div>
            <h2
                style={{ WebkitTextStroke: "1px #b3adad" }}
                className="font-Satoshi mx-3 text-36 text-[230px] font-extrabold tracking-[34.5px] leading-[207px]  transition duration-500 hover:bg-gradient-to-r from-[#09142e] via-[#58275f] to-[#f85253] bg-clip-text text-transparent bg-[2px] hover:bg-clip-text"
            >
                KYIV
            </h2>
            <div className="flex flex-col items-start mt-[41px] ml-[30px]">
                <p>
                    Індивідуальний підхід, ефективні персональні <br />
                    програми та збалансовані фізичні навантаження <br />
                    гарантовані!
                </p>
                <span className="border-b border-[#f16669] w-[12%] mt-7 "></span>
            </div>
            <div className="absolute right-[50px] bottom-[50px] font-Montserrat text-20 font-normal leading-24 tracking-[0.12em] ml-[50px] bg-gradient-to-r from-[#09142e] via-[#58275f] to-[#f85253] bg-clip-text text-transparent uppercase">
                <p>/ тренування для:</p>
                <p className="text-center">дітей</p>
                <p className="mr-[40px]">дорослих</p>
                <p className="ml-[50px]">початківців</p>
                <p className="ml-[20px]">профі /</p>
            </div>
        </section>
    );
};
