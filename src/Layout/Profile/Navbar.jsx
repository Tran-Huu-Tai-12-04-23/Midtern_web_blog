import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./style.scss";

function Navbar({ active, setActive }) {
  const [navList, setNavList] = useState([
    "Profile settings",
    "Account settings",
  ]);

  const loaderNav = () => {
    return navList.map((nav, index) => {
      return (
        <li
          key={uuid()}
          className={`${active === index ? "active-navbar" : ""}`}
          style={{
            padding: ".5rem",
            marginRight: "1rem",
            cursor: "pointer",
          }}
          onClick={() => setActive(index)}
        >
          {nav}
        </li>
      );
    });
  };

  return (
    <div className="w-100 ">
      <ul
        className="w-100 mt-4 d-flex justify-content-start align-items-center "
        style={{
          fontSize: ".8rem",
          color: "#ccc",
        }}
      >
        {loaderNav()}
      </ul>
    </div>
  );
}

export default Navbar;
