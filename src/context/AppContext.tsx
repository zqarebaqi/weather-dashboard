import React, { createContext, useState, useEffect } from "react";


interface AppContextProps {
  mode: "light" | "dark";
  language: "fa" | "en";
  setMode: (mode: "light" | "dark") => void;
  setLanguage: (lang: "fa" | "en") => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">(
    (localStorage.getItem("mode") as "light" | "dark") || "light"
  );
  const [language, setLanguage] = useState<"fa" | "en">(
    (localStorage.getItem("language") as "fa" | "en") || "en"
  );

  useEffect(() => {
    localStorage.setItem("mode", mode);
    localStorage.setItem("language", language);
  }, [mode, language]);




  return (
    <AppContext.Provider
      value={{
        mode,
        language,
        setMode,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
