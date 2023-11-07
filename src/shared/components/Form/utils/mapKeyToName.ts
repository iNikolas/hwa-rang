export const mapKeyToName = (key: string) => {
  if (key === "age") {
    return "Вік";
  }

  if (key === "for") {
    return "Хто буде тренуватись";
  }

  if (key === "hall") {
    return "Зал";
  }

  if (key === "howToConnect") {
    return "Спосіб зв’язку";
  }

  if (key === "name") {
    return "Ім’я";
  }

  if (key === "phone") {
    return "Мобільний телефон";
  }

  if (key === "service") {
    return "Послуга";
  }

  const result = key.replace(/([A-Z])/g, " $1");

  return result.charAt(0).toUpperCase() + result.slice(1);
};
