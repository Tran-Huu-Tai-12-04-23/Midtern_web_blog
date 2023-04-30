import "./style.scss";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Search = ({ theme }) => {
  const history = useNavigate();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      history("/search");
    }
  };
  return (
    <div
      className="search "
      style={{
        background: !theme ? "#1f3b56" : "#e4e6e8",
      }}
    >
      <IoSearchOutline
        style={{
          fontSize: "1.5rem",
          color: !theme ? "#fff" : "#000",
        }}
      />
      <input
        className="input-search bd-primary"
        style={{
          color: !theme ? "#fff" : "#000",
        }}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
export default Search;
