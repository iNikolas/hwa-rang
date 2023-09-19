import { Title } from "../shared/components/Title";
import style from "./AdvantageSection.module.scss";

export const AdvantageSection: React.FC = () => {
    return (
        <section className={style.container}>
            <Title title={"НАШІ ПЕРЕВАГИ"} />
            <div>
                <div className={style.card}>
                    <img src="..\images\advantage\advantage1.jpg" alt="img" />
                    <h2>Офіційна сертифікація на пояси</h2>
                    <span></span>
                    <p>
                        Офіційна сертифікація на пояси в тхеквондо є важливим
                        етапом в розвитку спортсменів і підтверджує їхні
                        досягнення та вміння в цьому бойовому мистецтві.
                    </p>
                </div>
                <div className={style.card}>
                    <img src="..\images\advantage\advantage2.jpg" alt="img" />
                    <h2>Офіційна сертифікація на пояси</h2>
                    <span></span>
                    <p>
                        Офіційна сертифікація на пояси в тхеквондо є важливим
                        етапом в розвитку спортсменів і підтверджує їхні
                        досягнення та вміння в цьому бойовому мистецтві.
                    </p>
                </div>
                <div className={style.card}>
                    <img src="..\images\advantage\advantage3.jpg" alt="img" />
                    <h2>Офіційна сертифікація на пояси</h2>
                    <span></span>
                    <p>
                        Офіційна сертифікація на пояси в тхеквондо є важливим
                        етапом в розвитку спортсменів і підтверджує їхні
                        досягнення та вміння в цьому бойовому мистецтві.
                    </p>
                </div>
            </div>
        </section>
    );
};
