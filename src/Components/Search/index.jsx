import "./style.scss";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search ">
      <IoSearchOutline style={{ fontSize: "1.5rem" }} />
      <input className="input-search bd-primary" />
    </div>
  );
};
export default Search;
