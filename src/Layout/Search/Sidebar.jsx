import { MdDynamicFeed, MdOutlineInsertPhoto } from "react-icons/md";
import { BiMessageAltEdit } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="p-2" style={{}}>
      <ul>
        <li
          className="start hover-bg p-2 br-primary active-navbar"
          style={{
            cursor: "pointer",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
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
          className="start hover-bg p-2 br-primary"
          style={{
            cursor: "pointer",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
        >
          <BiMessageAltEdit
            style={{
              marginRight: ".5rem",
              fontSize: "2rem",
            }}
          />
          <span>Posts</span>
        </li>
        <li
          className="start hover-bg p-2 br-primary"
          style={{
            cursor: "pointer",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
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
          className="start hover-bg p-2 br-primary"
          style={{
            cursor: "pointer",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
        >
          <MdOutlineInsertPhoto
            style={{
              marginRight: ".5rem",
              fontSize: "2rem",
            }}
          />
          <span>Photo</span>
        </li>
        <li
          className="start hover-bg p-2 br-primary"
          style={{
            cursor: "pointer",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
        >
          <AiOutlineVideoCamera
            style={{
              marginRight: ".5rem",
              fontSize: "2rem",
            }}
          />
          <span>Videos</span>
        </li>
        <li
          className="start hover-bg p-2 br-primary"
          style={{
            cursor: "pointer",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
        >
          <HiOutlineUserGroup
            style={{
              marginRight: ".5rem",
              fontSize: "2rem",
            }}
          />
          <span>Groups</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
