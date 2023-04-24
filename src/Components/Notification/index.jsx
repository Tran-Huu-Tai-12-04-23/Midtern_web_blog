import "./style.scss";
import { useContext, useEffect, useState } from "react";

import { BiError } from "react-icons/bi";
import { RiFileWarningLine } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";

import { NotificationContext } from "../../Context";

const Notification = ({ type = "err", text = "", keyProp, id }) => {
  const setNotifications = useContext(NotificationContext);
  const [color, setColor] = useState();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotifications((pre) => {
        return pre.filter((notification) => notification.id != id);
      });
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (type === "err") {
      setColor("#E21818");
    } else if (type === "warn") {
      setColor("#cc9900");
    } else if (type === "success") {
      setColor("#00FFCA");
    }
  }, [type]);
  return (
    <div
      className="notification d-flex justify-content-between align-items-center"
      style={{
        "--tag-cl": color,
      }}
      key={keyProp}
    >
      <span>{text}</span>
      {type === "err" && (
        <BiError style={{ color: "#E21818", fontSize: "2rem" }} />
      )}
      {type === "warn" && (
        <RiFileWarningLine style={{ color: "#E21818", fontSize: "2rem" }} />
      )}
      {type === "success" && (
        <FcCheckmark style={{ color: "#00FFCA", fontSize: "2rem" }} />
      )}
      <IoCloseOutline
        onClick={() => {
          setNotifications((pre) => {
            return pre.filter((notification) => notification.id != id);
          });
        }}
        className="icon-close-notification hover-close"
      />
    </div>
  );
};

export default Notification;
