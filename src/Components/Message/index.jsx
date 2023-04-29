import React from "react";
import avatar_default from "../../Assets/img/avatar_default.jpg";
import { formatDate } from "../../util";

function Message({ avatar, type = "sender", mes = "", time }) {
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
            color: "#ccc",
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
            color: "#ccc",
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
