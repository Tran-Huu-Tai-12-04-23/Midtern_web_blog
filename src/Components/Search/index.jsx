import { useState } from "react";
import "./style.scss";

import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AppStoreUseContext } from "../../Context/AppStore";

const Search = ({ theme }) => {
  const { setSearch } = AppStoreUseContext();
  const [contentSearch, setContentSearch] = useState("");
  const history = useNavigate();
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && contentSearch !== "") {
      setSearch(event.target.value);
      setContentSearch("");
      history("/search");
    }
  };
  return (
    <div
      className="search"
      style={{
        background: !theme ? "#1f3b56" : "#e4e6e8",
      }}
    >
      <IoSearchOutline
        style={{
          fontSize: "1.5rem",
          color: !theme ? "#fff" : "#000",
        }}
        onClick={(e) => {
          if (contentSearch !== "") {
            setSearch(contentSearch);
            setContentSearch("");
            history("/search");
          }
        }}
      />
      <input
        className="input-search bd-primary"
        style={{
          color: !theme ? "#fff" : "#000",
        }}
        value={contentSearch}
        onChange={(e) => setContentSearch(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
export default Search;
