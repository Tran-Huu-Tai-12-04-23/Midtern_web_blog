import { useState, memo } from "react";
import { v4 as uuid } from "uuid";
import ButtonCustom from "../ButtonCustom";
import BoxChat from "./BoxChat";
import Tooltip from "@mui/material/Tooltip";

import { FiMessageSquare } from "react-icons/fi";
import avatar_default from "../../Assets/img/avatar_default.jpg";
import { AppStoreUseContext } from "../../Context/AppStore";
import { AuthUserUseContext } from "../../Context/AuthUser";
import { UseGlobalsStylesContext } from "../../GlobalStyle";

function ChatBox() {
  const { theme } = UseGlobalsStylesContext();
  const { showChatBox, setShowChatBox, friends, setSelectUserChat } =
    AppStoreUseContext();
  const [showSelectUser, setShowSelectUser] = useState(false);
  const { user } = AuthUserUseContext();

  const loaderFriendActive = () => {
    return friends.map((friend) => {
      return (
        <Tooltip title={friend?.displayName} key={uuid()}>
          <img
            className="avatar show-select-user-animation"
            style={{
              marginRight: ".5rem",
            }}
            src={friend.photoURL ? friend.photoURL : avatar_default}
            onClick={() => {
              setShowChatBox(true);
              setSelectUserChat(friend.id);
            }}
          ></img>
        </Tooltip>
      );
    });
  };

  return (
    <div
      className="wrapper-chatbox position-fixed"
      style={{
        bottom: "1rem",
        right: "1rem",
      }}
    >
      <ButtonCustom
        name="Chat"
        handleClick={() => setShowSelectUser(!showSelectUser)}
        iconLeft={
          <FiMessageSquare
            style={{
              fontSize: "1rem",
              marginRight: ".5rem",
            }}
          />
        }
        style={{
          display: !showChatBox ? "flex" : "none",
          position: "relative",
          zIndex: "2",
          justifyContent: "center",
          alignItems: "center",
          padding: "1.5rem 1rem",
          background: !theme
            ? "var(--bg-second-dark-theme)"
            : "var(--bg-second-light-theme)",
          color: !theme ? "#fff" : "#000",
        }}
      >
        <div
          className=" justify-content-center flex-column-center  position-absolute "
          style={{
            right: "120%",
            height: "unset",
            display: showSelectUser ? "flex" : "none",
            zIndex: "1",
          }}
        >
          <div
            className="avatar d-flex justify-content-center align-items-center hover-close show-select-user-animation"
            style={{
              marginRight: ".5rem",
            }}
          >
            X
          </div>

          {loaderFriendActive()}
        </div>
      </ButtonCustom>
      <BoxChat
        theme={theme}
        showChatBox={showChatBox}
        setShowChatBox={setShowChatBox}
        userId={user ? user.id : 0}
        user={user}
      ></BoxChat>
    </div>
  );
}

export default memo(ChatBox);
