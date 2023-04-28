import "./style.scss";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const history = useNavigate();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      history("/search");
    }
  };
  return (
    <div className="search ">
      <IoSearchOutline style={{ fontSize: "1.5rem" }} />
      <input className="input-search bd-primary" onKeyPress={handleKeyPress} />
    </div>
  );
};
export default Search;
