import React from "react";
import avatar_default from "../../Assets/img/avatar_default.jpg";
import { formatDate } from "../../util";
import { UseGlobalsStylesContext } from "../../GlobalStyle";

function Message({ avatar, type = "sender", mes = "", time }) {
  const { theme } = UseGlobalsStylesContext();
  return type === "received" ? (
    <div className="start w-100 p-1 mb-3">
      <img
        style={{ width: "2rem", height: "2rem", marginRight: ".5rem" }}
        src={avatar}
        className="avatar"
        alt="avatar"
      />
      <div className="d-flex justify-content-center align-item-start flex-column">
        <h6
          style={{
            fontSize: ".8rem",
          }}
        >
          {mes}
        </h6>
        <span
          style={{
            fontSize: ".6rem",
            color: !theme ? "#ccc" : "#000",
          }}
        >
          {/* {formatDate(time?.seconds)} */}
        </span>
      </div>
    </div>
  ) : (
    <div className="end w-100 p-1 mb-3">
      <div className="d-flex  flex-column">
        <h6
          style={{
            fontSize: ".8rem",
            marginLeft: "auto",
          }}
        >
          {mes}
        </h6>
        <span
          style={{
            fontSize: ".6rem",
            color: !theme ? "#ccc" : "#000",
          }}
        >
          {formatDate(time)}
        </span>
      </div>
      <img
        style={{ width: "2rem", height: "2rem", marginLeft: ".5rem" }}
        src={avatar}
        className="avatar"
        alt="avatar"
      />
    </div>
  );
}

export default Message;
