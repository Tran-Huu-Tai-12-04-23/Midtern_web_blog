import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import avatar_default from "../../Assets/img/avatar_default.jpg";
import { FiSend } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Input from "../Input";
import Message from "../Message";
import ButtonCustom from "../ButtonCustom";
import { AppStoreUseContext } from "../../Context/AppStore";
import { addDocument } from "../../firebase/service";

function BoxChat({ theme, showChatBox, setShowChatBox, userId = 0, user }) {
  const [message, setMessage] = useState("");
  const {
    userChat,
    setUserChat,
    selectUserChat,
    friends,
    listMessages,
    setNotifications,
  } = AppStoreUseContext();

  useEffect(() => {
    friends.map((friend) => {
      if (friend.id === selectUserChat) {
        setUserChat(friend);
      }
    });
  }, [selectUserChat]);

  const handleSendMess = () => {
    if (message === "") {
      setNotifications((prev) => {
        return [
          ...prev,
          {
            text: "Please enter your message",
            type: "warn",
            id: uuid(),
          },
        ];
      });
    } else {
      addDocument("message", {
        user_id1: userId,
        user_id2: userChat.id,
        text: message,
        photoURL: userChat.photoURL,
      });
      setMessage("");
    }
  };
  const loadMessage = () => {
    return listMessages
      .filter((message) => {
        return (
          (message.user_id1 === userId && message.user_id2 === userChat.id) ||
          (message.user_id1 === userChat.id && message.user_id2 === userId)
        );
      })
      .map((message) => (
        <Message
          avatar={
            message.user_id1 === userId ? user.photoURL : userChat.photoURL
          }
          key={uuid()}
          mes={message.text}
          type={message.user_id1 === userId ? "sender" : "received"}
          time={message?.createdAt?.seconds}
        />
      ));
  };

  return (
    <div
      className="p-2 br-primary show-modal-chat-box"
      style={{
        width: "20rem",
        height: "25rem",
        minHeight: "25rem",
        minWidth: "20rem",
        backgroundColor: !theme
          ? "var(--bg-second-dark-theme)"
          : "var(--bg-second-light-theme",
        display: showChatBox ? "block" : "none",
      }}
    >
      <div
        className="w-100  d-flex justify-content-between align-items-center border-bottom"
        style={{ height: "3rem" }}
      >
        <div className="start">
          <img className="avatar" src={userChat && userChat.photoURL}></img>
          <span>{userChat ? userChat.displayName : ""}</span>
        </div>
        <IoCloseSharp
          className="hover-close"
          style={{
            fontSize: "2rem",
          }}
          onClick={() => setShowChatBox(false)}
        />
      </div>
      <div
        className="d-flex flex-column align-items-center justify-content-end"
        style={{
          height: " calc( 100% - 3rem)",
          width: "100%",
        }}
      >
        <div
          className="f-flex flex-column algn-items-center justify-content-end mb-2"
          style={{
            maxHeight: "calc( 100% - 3rem )",
            width: "100%",
            overflow: "auto",
          }}
        >
          {listMessages && loadMessage()}

          {/* <Message mes="test" type="sender" time="2 day ago" />
          <Message mes="test" type="received" time="2 day ago" /> */}
        </div>
        <div className="w-100 d-flex justify-content-between align-items-center">
          <Input
            type="text"
            width="100%"
            height="2.5rem"
            value={message}
            variant=""
            placeholder="Enter message"
            handleKeyPressEnter={handleSendMess}
            css={{
              fontSize: ".8rem",
              marginRight: ".5rem",
            }}
            handleChange={(e) => setMessage(e.target.value)}
          />
          <ButtonCustom
            height="2.5rem"
            name="Send"
            iconLeft={
              <FiSend
                style={{ fontSize: "2rem", color: !theme ? "#fff" : "#000" }}
              />
            }
            style={{
              color: !theme ? "#fff" : "#000",
              backgroundColor: !theme ? "#334d6e" : "#e4e6e8",
            }}
            handleClick={handleSendMess}
          ></ButtonCustom>
        </div>
      </div>
    </div>
  );
}

export default BoxChat;
