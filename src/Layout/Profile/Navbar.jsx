import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./style.scss";

function Navbar() {
  const [navList, setNavList] = useState([
    "Profile settings",
    "Account settings",
    "Privacy & Security",
    "Notifications",
  ]);
  const [active, setActive] = useState(0);

  const loaderNav = () => {
    return navList.map((nav, index) => {
      return (
        <li
          key={uuid()}
          className={`${active === index ? "active-navbar" : ""}`}
          style={{
            padding: ".5rem",
            marginRight: "1rem",
          }}
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
