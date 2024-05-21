import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import FAQData from "data/FAQ.json";

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

// function Paragraph({ title, disc }: { title: string; disc: string }) {
//   return (
//     <div className="flex">
//       <ul className="list-disc pl-[15px] pt-[2px]">
//         <li></li>
//       </ul>
//       {title ? (
//         <p>
//           <b>{title}: </b>
//         </p>
//       ) : (
//         <></>
//       )}

//       <p>{disc}</p>
//     </div>
//   );
// }

function Paragraph1({ data = [] }: { data?: Record<string, string>[] }) {
  console.log(data);
  return (
    <div className="flex flex-col">
      {data &&
        data.map((d, i) => (
          <div key={i} className="flex py-[5px]">
            <ul className="list-disc pl-[15px] pt-[2px]">
              <li>
                {d.title ? (
                  <p>
                    <b>{d.title}: </b>
                    <p>{d.description}</p>
                  </p>
                ) : (
                  <p>{d.description}</p>
                )}
                {/* <p>{d.disc}</p> */}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
}

type FAQ = {
  title: string;
  description: string;
  subList?: { title: string; description: string }[];
  id: number;
};

export const FAQSection = () => {
  const [open, setOpen] = React.useState(0);
  const FAQInfo: FAQ[] = FAQData;
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  console.log(FAQInfo);
  return (
    <section
      id="services"
      className="flex flex-col pl-[85px] pr-[18px] pt-[20px] pb-[50px]  md:px-[30px] xs:px-[20px]"
    >
      {FAQInfo.map((data, index) => (
        <Accordion
          key={index}
          open={open === data.id}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          icon={<Icon id={data.id} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(data.id)}>
            {data.title}
          </AccordionHeader>
          <AccordionBody className="text-justify pr-[25px] py-[5px]">
            {data.subList ? (
              <>
                <p>{data.description}</p>
                <Paragraph1 data={data.subList} />
              </>
            ) : (
              <p>{data.description}</p>
            )}
          </AccordionBody>
        </Accordion>
      ))}
    </section>
  );
};
