import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import avatar_default from "../../Assets/img/avatar_default.jpg";
import Message from "../../Components/Message";
import Input from "../../Components/Input";
import ButtonCustom from "../../Components/ButtonCustom";

import { AppStoreUseContext } from "../../Context/AppStore";
import { addDocument } from "../../firebase/service";

import { AiOutlineSend } from "react-icons/ai";
import { AuthUserUseContext } from "../../Context/AuthUser";

function BoxChat({}) {
  const { user } = AuthUserUseContext();
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
        user_id1: user?.id,
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
          (message.user_id1 === user?.id && message.user_id2 === userChat.id) ||
          (message.user_id1 === userChat.id && message.user_id2 === user?.id)
        );
      })
      .map((message) => (
        <Message
          avatar={
            message.user_id1 === user?.id ? user.photoURL : userChat.photoURL
          }
          key={uuid()}
          mes={message.text}
          type={message.user_id1 === user?.id ? "sender" : "received"}
          time="2 days ago"
        />
      ));
  };

  return (
    <div className="h-100">
      <header
        className="start pb-2 "
        style={{
          borderBottom: "1px solid #4f84eb",
        }}
      >
        <img
          className="avatar "
          style={{
            marginRight: "1rem",
          }}
          src={userChat?.photoURL}
        ></img>
        <span>{userChat?.displayName}</span>
      </header>
      <div
        className="content-chat d-flex  align-items-center flex-column pt-2"
        style={{
          height: "calc( 100% - 10rem)",
          overflow: "auto",
        }}
      >
        {loadMessage()}
      </div>
      <div
        className="w-100 d-flex justify-content-between align-items-center"
        style={{
          marginTop: "1rem",
        }}
      >
        <Input
          variant=""
          width="100%"
          placeholder="Enter message"
          value={message}
          css={{
            border: "none",
            borderBottom: "1px solid #4f84eb",
            marginRight: ".5rem",
          }}
          handleKeyPressEnter={handleSendMess}
          handleChange={(e) => {
            setMessage(e.target.value);
          }}
        ></Input>
        <ButtonCustom
          name="Send"
          height="3rem"
          style={{
            padding: "1rem",
          }}
          handleClick={handleSendMess}
          iconLeft={
            <AiOutlineSend
              style={{
                fontSize: "1.5rem",
                marginRight: ".5rem",
              }}
            />
          }
        />
      </div>
    </div>
  );
}

export default BoxChat;
