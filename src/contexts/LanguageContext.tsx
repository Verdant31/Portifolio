import { createContext, ReactNode, useContext, useState } from "react";

type LanguageContextProps = {
  changeLanguage: () => void;
  currentLanguage: string;
};
type TrasnlationContextProviderProps = {
  children: ReactNode;
};
const LanguageContext = createContext({} as LanguageContextProps);

export const LanguageContextProvider = ({
  children,
}: TrasnlationContextProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<"pt" | "en">("pt");
  const changeLanguage = () => {
    if (currentLanguage === "pt") {
      setCurrentLanguage("en");
    } else {
      setCurrentLanguage("pt");
    }
  };
  return (
    <LanguageContext.Provider value={{ changeLanguage, currentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const value = useContext(LanguageContext);
  return value;
}
