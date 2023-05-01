import { useState } from "react";
import Header from "../../Components/Header";
import Sidebar from "./Sidebar";
import MainSearch from "./MainSearch";
import { UseGlobalsStylesContext } from "../../GlobalStyle";
import { AppStoreUseContext } from "../../Context/AppStore";

function Search() {
  const { theme } = UseGlobalsStylesContext();
  const { search } = AppStoreUseContext();
  const [contentActive, setContentActive] = useState(0);

  return (
    <div
      className="bg-main "
      style={{
        minHeight: "100vh",
        paddingTop: "6rem",
        background: !theme
          ? "var(--bg-second-dark-theme)"
          : "var(--bg-second-light-theme",
      }}
    >
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="w-100 center ">
            <div className="start mb-2 align-items-center">
              <h5>Result for : </h5>
              <h5
                style={{
                  fontStyle: "italic",
                  color: "#4cb7d5",
                }}
              >
                '{search}'
              </h5>
            </div>
          </div>
          <div className="col-3">
            <Sidebar
              setContentActive={setContentActive}
              contentActive={contentActive}
            />
          </div>
          <div
            className="col-9 custom-scroll pb-4"
            style={{
              maxHeight: "calc( 100vh - 9rem )",
              overflow: "auto",
            }}
          >
            <MainSearch
              search={search}
              contentActive={contentActive}
              theme={theme}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
