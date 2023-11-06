export const splitName = ({ name }: { name: string }) => {
  const hallName = name.split("/").map((h) => h.trim());

  return hallName.map((n) => {
    const splittedName = n.split(" ");

    return {
      normalCasePart: `${splittedName[0]} `,
      uppercasePart: splittedName.slice(1).join(" ").toUpperCase(),
    };
  });
};
