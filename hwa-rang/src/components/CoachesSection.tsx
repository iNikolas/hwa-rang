import { Title } from "../shared/components/Title";

export const CoachesSection: React.FC = () => {
    return (
        <section id="trainers" className="py-[50px]">
            <div className="px-[85px] pb-7">
                <Title title={"НАШІ ТРЕНЕРИ"} />
            </div>
            <div className="flex justify-between">
                <img
                    src="..\public\images\coaches\doletskiy.png"
                    alt="Oleksiy Doletskyi"
                />
                <div className="pl-[270px]">
                    <h2 className="text-32 font-bold pb-[40px]">
                        ДОЛЕЦЬКИЙ ОЛЕКСІЙ ВІКТОРОВИЧ
                    </h2>
                    <h4 className="text-24 font-bold pb-2 ">ОСВІТА</h4>
                    <p className="pb-2">
                        Національний університет фізичного виховання і спорту
                        України.
                    </p>
                    <p>
                        Магістр за спеціальністью “Фізична культура і спорт”. За
                        освітньою програмою "Олімпійський спорт і освіта"
                    </p>

                    <h4 className="text-24 font-bold pb-2 pt-[40px]">
                        КВАЛІФІКАЦІЯ
                    </h4>
                    <p className="pb-2">
                        WORLD TAEKWONDO HEADQUARTERS KUKKIWON
                    </p>
                    <p>Чорний пасок, 1-й Дан з Тхеквондо WT</p>

                    <h4 className="text-24 font-bold pb-2 pt-[40px]">
                        КОНТАКТИ
                    </h4>
                    <a href="tel:0975135810">097 513 58 10</a>
                </div>
            </div>
            <div className="flex justify-between pt-[100px]">
                <div className="pl-[140px]">
                    <h2 className="text-32 font-bold pb-[40px]">
                        ФІЛАТОВ ІГОР ВАСИЛЬОВИЧ
                    </h2>
                    <h4 className="text-24 font-bold pb-2 ">ОСВІТА</h4>
                    <p className="pb-2">
                        Національний університет фізичного виховання і спорту
                        України.
                    </p>
                    <p>
                        Магістр за спеціальністью “Фізична культура і спорт”. За
                        освітньою програмою "Олімпійський спорт і освіта"
                    </p>

                    <h4 className="text-24 font-bold pb-2 pt-[40px]">
                        КВАЛІФІКАЦІЯ
                    </h4>
                    <p className="pb-2">
                        WORLD TAEKWONDO HEADQUARTERS KUKKIWON
                    </p>
                    <p>Чорний пасок, 1-й Дан з Тхеквондо WT</p>

                    <h4 className="text-24 font-bold pb-2 pt-[40px]">
                        КОНТАКТИ
                    </h4>
                    <a href="tel:0933501252">093 350 12 52</a>
                </div>
                <img
                    src="..\public\images\coaches\filatov.png"
                    alt="Ihor Filatov"
                />
            </div>
        </section>
    );
};
