import "./style.scss";
import { useContext, useEffect, useState, memo } from "react";

import { BiError } from "react-icons/bi";
import { CiCircleInfo } from "react-icons/ci";
import { FcCheckmark } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";

import { AppStoreUseContext } from "../../Context/AppStore";

const Notification = ({ type = "err", text = "", keyProp, id }) => {
  const { setNotifications } = AppStoreUseContext();
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
        <CiCircleInfo style={{ color: "#cc9900", fontSize: "2rem" }} />
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
        style={{
          color: color,
        }}
        className="icon-close-notification hover-close"
      />
    </div>
  );
};

export default memo(Notification);
