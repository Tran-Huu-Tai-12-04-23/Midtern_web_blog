import { useState } from "react";

import "./style.scss";

import { FiEye, FiEyeOff } from "react-icons/fi";

const Input = ({
  css = {},
  value = "",
  variant = "default",
  handleChange = () => {},
  width = "80",
  height = "3rem",
  icon = "",
  type = "text",
  notification = "",
}) => {
  const [lock, setLock] = useState(false);
  const [typeInput, setType] = useState(type);

  const showPass = () => {
    setLock(!lock);
    setType((prev) => {
      if (!lock) {
        setType("text");
      } else {
        setType("password");
      }
    });
  };

  return (
    <div
      className="input"
      style={{
        ...css,
        width: width,
        height: height,
      }}
    >
      <input
        placeholder=" "
        value={value}
        onChange={handleChange}
        type={typeInput}
      ></input>
      <div className="label">
        {icon}
        <label>{variant}</label>
      </div>
      {type === "password" && !lock && (
        <FiEye className="icon-lock" onClick={showPass} />
      )}
      {type === "password" && lock && (
        <FiEyeOff className="icon-lock" onClick={showPass} />
      )}
      {notification && (
        <span className="notification" style={{ fontWeight: 600 }}>
          {notification}
        </span>
      )}
    </div>
  );
};

export default Input;
