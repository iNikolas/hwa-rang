import style from "./Header.module.scss";
import { SignUpButton } from "../shared/components/btns/SignUpButton";

export const Header: React.FC = () => {
    const title = "K Y I V ";
    const title2 = " T A E";

    return (
        <header className={style.header}>
            <div className={style.leftSection}>
                <div className={style.logoName}>HWA-RANG</div>
                <nav>
                    <ul className={style.navigation}>
                        <li>
                            <a href="#about">/ ПРО КЛУБ</a>
                        </li>
                        <li>
                            <a href="#advantages">/ НАШІ ПЕРЕВАГИ</a>
                        </li>
                        <li>
                            <a href="#trainers">/ ТРЕНЕРА</a>
                        </li>
                    </ul>
                </nav>
                <div className={style.mainTitle}>
                    <span> {title}</span>
                    <span>{title2}</span>
                </div>
            </div>
            <div className={style.rightSection}>
                <nav>
                    <ul className={style.navigation}>
                        <li>
                            <a href="#gyms">/ ЗАЛИ</a>
                        </li>
                        <li>
                            <a href="#services">/ ПОСЛУГИ</a>
                        </li>
                        <li>
                            <a href="#signup">/ ЗАПИСАТИСЯ НА ТРЕНУВАННЯ</a>
                        </li>
                    </ul>
                </nav>
                <div className={style.titles}>
                    <h1>
                        Тхеквандо <br /> для дорослих <br />
                        та дітей
                    </h1>
                    <h3>
                        Запрошуємо дітей та дорослих <br />
                        на тренування в нашому клубі.
                    </h3>
                    <SignUpButton />
                </div>

                <div className={style.mainTitle}>K W O N D O</div>
            </div>
        </header>
    );
};
