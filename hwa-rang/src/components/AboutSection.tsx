import { Title } from "../shared/components/Title";
import style from "./AboutSection.module.scss";

export const AboutSection: React.FC = () => {
    return (
        <section className={style.container}>
            <div className={style.firstBlock}>
                <h2>TAE</h2>
                <Title title={"ПРО КЛУБ"} />
                <div>
                    <p>
                        Наш клуб є частиною олімпійського руху. <br /> Ми
                        орієнтовані на спортивні досягнення <br /> наших учнів
                        та розвиток олімпійського <br /> тхеквондо в Україні.
                    </p>
                    <span></span>
                </div>
            </div>
            <h2>KWON</h2>
            <div className={style.thirdBlock}>
                <h2>DO</h2>
                <p>
                    Ми працюємо з дітьми та дорослими будь-
                    <br />
                    якого рівня підготовки. В нас тренуються як
                    <br /> досвідченні спортсмени так і початківці.
                </p>
            </div>
            <h2>KYIV</h2>
            <div className={style.fourthBlock}>
                <p>
                    Індивідуальний підхід, ефективні персональні <br />
                    програми та збалансовані фізичні навантаження <br />
                    гарантовані!
                </p>
                <span></span>
            </div>

            <div className={style.forWhoSection}>
                <p>/ тренування для:</p>
                <p>дітей</p>
                <p>дорослих</p>
                <p>початківців</p>
                <p>профі /</p>
            </div>
        </section>
    );
};
