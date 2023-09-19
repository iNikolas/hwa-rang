import "./Title.module.scss";

export const Title: React.FC<{ title: string }> = ({ title }) => {
    const slash = ["/", "/", "/", "/", "/"].join("");
    return (
        <h3>
            {slash} {title}
        </h3>
    );
};
