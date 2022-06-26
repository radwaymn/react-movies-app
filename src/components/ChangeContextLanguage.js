import { useContext } from "react";
import LanguageContext from "../context/language";

export default function ChangeContextLanguage() {
  const { contextLang, setContextLang } = useContext(LanguageContext);
  return (
    <>
      <button
        className="btn btn-secondary mx-2"
        onClick={() => setContextLang(contextLang === "ar" ? "en" : "ar")}
      >
        {contextLang === "ar" ? "En" : "عربي"}
      </button>
    </>
  );
}
