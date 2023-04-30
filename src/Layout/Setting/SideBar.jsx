import default_background from "../../Assets/img/default_background.png";
import ButtonCustom from "../../Components/ButtonCustom";
import { FaUserFriends, FaUniversity } from "react-icons/fa";
import { BsPostcard } from "react-icons/bs";
import { MdOutlineJoinInner } from "react-icons/md";
import { AuthUserUseContext } from "../../Context/AuthUser";

function SideBar({ theme }) {
  const { user } = AuthUserUseContext();

  return (
    <div className="w-100 p-4 d-flex justify-content-start align-items-center flex-column ">
      <img
        src={user ? user.photoURL : ""}
        style={{
          width: "6rem",
          height: "6rem",
          borderRadius: "50%",
          marginBottom: "1rem",
        }}
      ></img>
      <ButtonCustom
        name="Edit profile"
        width="10rem "
        height="2rem"
        backgroundColor="#4f84eb"
        style={{
          borderRadius: "3rem",
          fontSize: ".8rem",
        }}
      />

      <div
        className="d-flex justify-content-between align-items-center mt-4 w-100"
        style={{
          fontSize: ".8rem",
        }}
      >
        <div
          className="border-right "
          style={{
            color: !theme ? "#ccc" : "#000",
          }}
        >
          10 followers
        </div>
        <span
          className=""
          style={{
            color: !theme ? "#ccc" : "#000",
          }}
        >
          From vietnam
        </span>
      </div>

      <div className="d-flex justify-content-start align-items-start w-100 flex-column mt-4">
        <ul>
          <li
            className="start  mb-2"
            style={{
              color: !theme ? "#ccc" : "#000",
            }}
          >
            <FaUniversity
              style={{
                marginRight: ".5rem",
              }}
            />
            <span className="">TDT university</span>
          </li>
          <li
            className="start mb-2"
            style={{
              color: !theme ? "#ccc" : "#000",
            }}
          >
            <MdOutlineJoinInner
              style={{
                marginRight: ".5rem",
              }}
            />
            <span className="">Join in 3days ago</span>
          </li>
          <li
            className="start mb-2"
            style={{
              color: !theme ? "#ccc" : "#000",
            }}
          >
            <BsPostcard
              style={{
                marginRight: ".5rem",
              }}
            />
            <span className="">35 post</span>
          </li>
          <li
            className="start mb-2"
            style={{
              color: !theme ? "#ccc" : "#000",
            }}
          >
            <FaUserFriends
              style={{
                marginRight: ".5rem",
              }}
            />
            <span className="">4 new friends</span>
          </li>
        </ul>
      </div>

      <div
        className="mt-4 start w-100 flex-column"
        style={{
          paddingBottom: "2rem",
        }}
      >
        <h1>Recent post</h1>
        <img
          src={default_background}
          alt=""
          className="br-primary "
          style={{
            width: "90%",
            minHeight: "8rem",
            marginTop: ".5rem",
          }}
        />
      </div>
      <ButtonCustom
        name="Logout"
        backgroundColor="#4f84eb"
        style={{
          fontSize: ".8rem",
          padding: "1rem 2rem",
        }}
      />
    </div>
  );
}

export default SideBar;
