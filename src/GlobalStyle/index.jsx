import { createContext, useContext, useEffect, useState } from "react";
import "./style.scss";
import "./reset.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const GlobalStylesContext = createContext();
const GlobalStyles = ({ children }) => {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  }, []);

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
    localStorage.setItem("theme", theme);
  }, []);

  return (
    <GlobalStylesContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div
        className="theme"
        style={{
          color: !theme ? "#fff" : "#000",
          background: !theme ? "#05141c" : "#f0f2f5",
        }}
      >
        {children}
      </div>
    </GlobalStylesContext.Provider>
  );
};

export const UseGlobalsStylesContext = () => {
  return useContext(GlobalStylesContext);
};

export default GlobalStyles;
