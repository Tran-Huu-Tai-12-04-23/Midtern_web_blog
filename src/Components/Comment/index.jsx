import { useState } from "react";
import ButtonCustom from "../ButtonCustom";
import { formatDate } from "../../util";

import CardUser from "../CardUser";
import { UseGlobalsStylesContext } from "../../GlobalStyle";

function Comment({ data, cardUser = true }) {
  const { theme } = UseGlobalsStylesContext();
  const [showReply, setShowReply] = useState(false);
  const [showInfoUser, setShowInfoUser] = useState(false);

  return (
    <div
      className="start p-2 hover-bg br-primary "
      onMouseMove={() => setShowReply(true)}
      onMouseLeave={() => setShowReply(false)}
    >
      <div
        className="start "
        style={{
          flex: 1,
        }}
      >
        <div className="position-relative">
          <img
            src={data.avatar}
            className="avatar "
            onMouseMove={() => setShowInfoUser(true)}
            onMouseLeave={() => {
              setShowInfoUser(false);
            }}
          ></img>
          {cardUser && (
            <CardUser
              backgroundColor={
                !theme ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)"
              }
              color={!theme ? "#fff" : "#000"}
              data={data}
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                display: showInfoUser ? "block" : "none",
                transition: ".4s",
                zIndex: "4",
              }}
              onMouseMove={() => setShowInfoUser(true)}
              onMouseLeave={() => {
                setShowInfoUser(false);
              }}
            />
          )}
        </div>
        <h1
          className=""
          style={{
            fontSize: "1rem",
            marginLeft: "1rem",
            display: "block",
          }}
        >
          {data.text}
        </h1>
        <span
          className=""
          style={{
            fontSize: ".8rem",
            marginLeft: "1rem",
            display: "block",
            color: !theme ? "#ccc" : "#000",
          }}
        >
          {formatDate(data.createdAt)}
        </span>
      </div>
      <div
        className="end"
        style={{
          display: showReply ? "flex" : "none",
        }}
      >
        <ButtonCustom
          name="Reply"
          backgroundColor="transparent"
          color={!theme ? "#fff" : "#000"}
        />
      </div>
    </div>
  );
}

export default Comment;
