import { AccordionCardHall } from "../shared/components/AccordionCard";
import { ContactCard } from "../shared/components/ContactCard";
import { Title } from "../shared/components/Title";
import { SignUpButton } from "../shared/components/btns/SignUpButton";

type Contact = {
    place: string;
    address: string;
    coach: string;
    telephone: string;
    group: string;
    schedule: string;
    desc: string;
};

export const HallsSection: React.FC = () => {
    const contacts: Contact[] = [
        {
            place: "Метро ДИМІЇВСЬКА / метро ГОЛОСІЇВСЬКА",
            address: "вул. Диміївска, 18 (ЖК “Парк Авеню”)",
            coach: "Долецький Олексій Вікторович",
            telephone: "097 513 58 10",
            group: "Загальна група 6-12 років",
            schedule: "Вт. Чт. - 19:30",
            desc: "Персональні тренування  (по домовленості)",
        },
        {
            place: "Метро ДИМІЇВСЬКА / метро ГОЛОСІЇВСЬКА",
            address: "вул. Диміївска, 18 (ЖК “Парк Авеню”)",
            coach: "Долецький Олексій Вікторович",
            telephone: "097 513 58 10",
            group: "Загальна група 6-12 років",
            schedule: "Вт. Чт. - 19:30",
            desc: "Персональні тренування  (по домовленості)",
        },
        {
            place: "Метро ДИМІЇВСЬКА / метро ГОЛОСІЇВСЬКА",
            address: "вул. Диміївска, 18 (ЖК “Парк Авеню”)",
            coach: "Долецький Олексій Вікторович",
            telephone: "097 513 58 10",
            group: "Загальна група 6-12 років",
            schedule: "Вт. Чт. - 19:30",
            desc: "Персональні тренування  (по домовленості)",
        },
        {
            place: "Метро ДИМІЇВСЬКА / метро ГОЛОСІЇВСЬКА",
            address: "вул. Диміївска, 18 (ЖК “Парк Авеню”)",
            coach: "Долецький Олексій Вікторович",
            telephone: "097 513 58 10",
            group: "Загальна група 6-12 років",
            schedule: "Вт. Чт. - 19:30",
            desc: "Персональні тренування  (по домовленості)",
        },
        {
            place: "Метро ДИМІЇВСЬКА / метро ГОЛОСІЇВСЬКА",
            address: "вул. Диміївска, 18 (ЖК “Парк Авеню”)",
            coach: "Долецький Олексій Вікторович",
            telephone: "097 513 58 10",
            group: "Загальна група 6-12 років",
            schedule: "Вт. Чт. - 19:30",
            desc: "Персональні тренування  (по домовленості)",
        },
    ];

    return (
        <section id="halls" className=" mt-[170px] bg-[#DCE7E9] ">
            <div className="bg-[url('../../public/kyiv-bg.svg')] bg-no-repeat bg-cover h-full bg-top">
                <div className="px-[20px] ml-[90px] pt-[75px] max-w-[516px] md:pl-0 md:ml-[20px]">
                    <Title title={"НАШІ ЗАЛИ"} />
                </div>

                <div className="flex flex-wrap justify-center items-center pb-[70px] xs:hidden">
                    {contacts.map((c) => (
                        <ContactCard
                            place={c.place}
                            address={c.address}
                            coach={c.coach}
                            telephone={c.telephone}
                            group={c.group}
                            schedule={c.schedule}
                            desc={c.desc}
                        >
                            <SignUpButton />
                        </ContactCard>
                    ))}
                </div>
                <div className="hidden xs:flex flex-col">
                    {contacts.map((c) => (
                        <AccordionCardHall
                            place={c.place}
                            address={c.address}
                            coach={c.coach}
                            telephone={c.telephone}
                            group={c.group}
                            schedule={c.schedule}
                            desc={c.desc}
                        >
                            <SignUpButton />
                        </AccordionCardHall>
                    ))}
                </div>
            </div>
        </section>
    );
};
