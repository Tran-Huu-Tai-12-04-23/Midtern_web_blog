import Header from "../../Components/Header";
import Sidebar from "./Sidebar";
import MainSearch from "./MainSearch";

function Search() {
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
            <Sidebar />
          </div>
          <div className="col-9">
            <MainSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
