import en from "./eng.json";
import az from "./aze.json";
import ru from "./ru.json";

export const translator = (lang?: string | null) => {
  let lg = lang || localStorage.getItem("lang");

  switch (lg) {
    case "az":
      return az;
    case "ru":
      return ru;
    case "en":
      return en;
    default:
      return az;
  }
};
