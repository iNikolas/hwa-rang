import style from "./FilterButton.module.scss";

export const FilterButton: React.FC<{
    name: string;
    onClick: () => void;
    styleProp: string;
    activeButton: boolean;
}> = ({ name, onClick, styleProp, activeButton }) => {
    return (
        <div className={styleProp}>
            <button
                onClick={onClick}
                className={`${style.button} ${
                    activeButton ? style.activeButton : ""
                }`}
            >
                {name}
            </button>
        </div>
    );
};
