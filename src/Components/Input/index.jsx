import { useState } from "react";

import "./style.scss";

import { FiEye, FiEyeOff } from "react-icons/fi";

const Input = ({
  handleKeyPressEnter = () => {},
  css = {},
  value = "",
  variant = "default",
  handleChange = () => {},
  width = "80",
  height = "3rem",
  icon = "",
  type = "text",
  iconRight = "",
  notification = "",
  placeholder = "",
  handleFocus = () => {},
  handleBlur = () => {},
  className,
  color,
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
      className={`input ${className}`}
      style={{
        width: width,
        height: height,
        fontSize: ".8rem",
        border: "1px solid var(--bd-primary-color)",
        ...css,
      }}
    >
      <input
        className={`${className}`}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleKeyPressEnter();
          }
        }}
        style={{
          color: color,
        }}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
        <span className="tag-dialog" style={{ fontWeight: 600 }}>
          {notification}
        </span>
      )}
      {iconRight && iconRight}
    </div>
  );
};

export default Input;
