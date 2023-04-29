import { MdDynamicFeed } from "react-icons/md";
import { BiMessageAltEdit } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";

function Sidebar({ setContentActive = () => {}, contentActive }) {
  return (
    <div className="p-2" style={{}}>
      <ul>
        <li
          className={`start hover-bg p-2 br-primary ${
            contentActive === 0 ? "active-navbar" : ""
          } `}
          style={{
            cursor: "pointer",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
          onClick={() => setContentActive(0)}
        >
          <MdDynamicFeed
            style={{
              marginRight: ".5rem",
              fontSize: "2rem",
            }}
          />
          <span>All</span>
        </li>
        <li
          className={`start hover-bg p-2 br-primary ${
            contentActive === 1 ? "active-navbar" : ""
          } `}
          style={{
            cursor: "pointer",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
          onClick={() => setContentActive(1)}
        >
          <FiUsers
            style={{
              marginRight: ".5rem",
              fontSize: "2rem",
            }}
          />
          <span>Peoples</span>
        </li>
        <li
          className={`start hover-bg p-2 br-primary ${
            contentActive === 2 ? "active-navbar" : ""
          } `}
          style={{
            cursor: "pointer",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
          onClick={() => setContentActive(2)}
        >
          <HiOutlineUserGroup
            style={{
              marginRight: ".5rem",
              fontSize: "2rem",
            }}
          />
          <span>Groups</span>
        </li>
        <li
          className={`start hover-bg p-2 br-primary ${
            contentActive === 3 ? "active-navbar" : ""
          } `}
          style={{
            cursor: "pointer",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
          onClick={() => setContentActive(3)}
        >
          <BiMessageAltEdit
            style={{
              marginRight: ".5rem",
              fontSize: "2rem",
            }}
          />
          <span>Posts</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
