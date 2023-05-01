import { createContext, useContext, useEffect, useState } from "react";
import "./style.scss";
import "./reset.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Loader from "../Components/Loader";

const GlobalStylesContext = createContext();
const GlobalStyles = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("theme")) != true &&
      JSON.parse(localStorage.getItem("theme")) != false
    ) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setTheme(false);
      } else {
        setTheme(true);
      }
    } else {
      console.log(JSON.parse(localStorage.getItem("theme")));
      setTheme(JSON.parse(localStorage.getItem("theme")));
    }
  }, []);

  return (
    <GlobalStylesContext.Provider
      value={{
        theme,
        setTheme,
        loader,
        setLoader,
      }}
    >
      <Loader show={loader} theme={theme} />
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
