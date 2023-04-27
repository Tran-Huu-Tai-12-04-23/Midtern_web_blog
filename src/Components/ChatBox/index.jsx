import { useState } from "react";
import { v4 as uuid } from "uuid";
import ButtonCustom from "../ButtonCustom";
import BoxChat from "./BoxChat";
import { FiMessageSquare } from "react-icons/fi";
import avatar_default from "../../Assets/img/avatar_default.jpg";
import { AppStoreUseContext } from "../../Context/AppStore";
import { AuthUserUseContext } from "../../Context/AuthUser";

function ChatBox() {
  const { showChatBox, setShowChatBox, friends, setSelectUserChat } =
    AppStoreUseContext();
  const [showSelectUser, setShowSelectUser] = useState(false);
  const { user } = AuthUserUseContext();

  const loaderFriendActive = () => {
    return friends.map((friend) => {
      return (
        <img
          key={uuid()}
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
              fontSize: "3rem",
            }}
          />
        }
        style={{
          display: !showChatBox ? "flex" : "none",
          position: "relative",
          zIndex: "2",
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
        showChatBox={showChatBox}
        setShowChatBox={setShowChatBox}
        userId={user ? user.id : 0}
        user={user}
      ></BoxChat>
    </div>
  );
}

export default ChatBox;
