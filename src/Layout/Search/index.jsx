import { useState } from "react";
import Header from "../../Components/Header";
import Sidebar from "./Sidebar";
import MainSearch from "./MainSearch";

function Search() {
  const [contentActive, setContentActive] = useState(0);

  return (
    <div
      className="bg-main "
      style={{
        minHeight: "100vh",
        paddingTop: "6rem",
      }}
    >
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar setContentActive={setContentActive} contentActive={contentActive}/>
          </div>
          <div
            className="col-9 custom-scroll pb-4"
            style={{
              maxHeight: "calc( 100vh - 6rem )",
              overflow: "auto",
            }}
          >
            <MainSearch contentActive={contentActive} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
