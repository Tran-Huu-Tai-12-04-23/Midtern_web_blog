import avatar_default from "../../Assets/img/avatar_default.jpg";
import ButtonCustom from "../../Components/ButtonCustom";
import { FaUserFriends, FaUniversity } from "react-icons/fa";
import { BsPostcard } from "react-icons/bs";
import { MdOutlineJoinInner } from "react-icons/md";

function SideBar() {
  return (
    <div className="w-100 p-4 d-flex justify-content-start align-items-center flex-column">
      <img
        src={avatar_default}
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
        backgroundColor="#39d99d"
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
        <div className="border-right cl-second">10 followers</div>
        <span className="cl-second">From vietnam</span>
      </div>

      <div className="d-flex justify-content-start align-items-start w-100 flex-column mt-4">
        <ul>
          <li className="start cl-second mb-2">
            <FaUniversity
              style={{
                marginRight: ".5rem",
              }}
            />
            <span className="">TDT university</span>
          </li>
          <li className="start cl-second mb-2">
            <MdOutlineJoinInner
              style={{
                marginRight: ".5rem",
              }}
            />
            <span className="">Join in 3days ago</span>
          </li>
          <li className="start cl-second mb-2">
            <BsPostcard
              style={{
                marginRight: ".5rem",
              }}
            />
            <span className="">35 post</span>
          </li>
          <li className="start cl-second mb-2">
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
          src="https://assets.materialup.com/uploads/ead2f69d-8ea0-4be8-ae1e-be6584d6bb45/preview.jpg"
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
        backgroundColor="#39d99d"
        style={{
          fontSize: ".8rem",
        }}
      />
    </div>
  );
}

export default SideBar;
