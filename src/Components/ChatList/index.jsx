import { memo } from "react";
import "./style.scss";
import { v4 as uuid } from "uuid";

import ButtonCustom from "../ButtonCustom";
import { HiUserGroup } from "react-icons/hi";
import { AppStoreUseContext } from "../../Context/AppStore";

import avatar_default from "../../Assets/img/avatar_default.jpg";
import { useNavigate } from "react-router-dom";
import { UseGlobalsStylesContext } from "../../GlobalStyle";

const ChatList = () => {
  const { friends, setUserSelectShowProfile } = AppStoreUseContext();
  const { theme } = UseGlobalsStylesContext();
  const history = useNavigate();
  const loadFriends = () => {
    return friends.map((friend) => {
      return (
        <div
          onClick={() => {
            // setSelectUserChat(friend.id);
            // setShowChatBox(true);
            setUserSelectShowProfile(friend);
            history("/profile");
          }}
          key={friend.id}
          className="col-12 gx-0 hidden-scroll hover-bg p-2 br-primary"
          style={{
            maxHeight: "40vh",
            overflowY: "scroll",
            marginBottom: "1rem",
          }}
        >
          <div
            className="start"
            style={{
              justifyContent: "start",
              fontWeight: 600,
              borderRadius: 0,
              fontSize: ".6rem",
            }}
          >
            <img
              src={friend.photoURL ? friend.photoURL : avatar_default}
              className="avatar "
              style={{
                marginRight: "1rem",
              }}
            ></img>
            <div className="">
              <h1
                style={{
                  fontSize: "1rem",
                }}
              >
                {friend.displayName}
              </h1>
              <div className="start mt-2">
                <div className="active-user "></div>
                <span
                  className=" fs-small"
                  style={{
                    color: !theme ? "#ccc" : "#000",
                  }}
                >
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div
      className="wrapper-ChatList  br-primary p-4 hidden-scroll"
      style={{
        width: "95%",
        marginRight: "1rem",
        float: "right",
        overflow: "scroll",
        background: !theme
          ? "var(--bg-second-dark-theme)"
          : "var(--bg-second-light-theme",
      }}
    >
      <div
        className="w-100  pb-2 start"
        style={{
          borderBottom: "1px solid #ccc",
          borderColor: !theme ? "#000" : "#000",
        }}
      >
        <HiUserGroup
          style={{
            fontSize: "1.5rem",
            color: !theme ? "#fff" : "#000",
            marginRight: ".5rem",
          }}
        />
        <span className="bold">Your friend</span>
      </div>
      <div className="container-fluid mt-2">
        <div className="row">{friends.length > 0 && loadFriends()}</div>
      </div>
    </div>
  );
};
export default memo(ChatList);
