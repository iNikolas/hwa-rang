import "./Title.module.scss";

export const Title: React.FC<{ title: string; style?: string }> = ({
    title,
    style,
}) => {
    const slash = ["/", "/", "/", "/", "/"].join("");
    return (
        <h3
            className={`${style} text-32 md:text-48 xs:text-20 leading-[57px] xs:leading-[24px]`}
        >
            {slash} {title}
        </h3>
    );
};
