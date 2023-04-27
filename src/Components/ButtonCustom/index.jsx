import { Children } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

import { Button } from "@mui/material";

const ButtonCustom = ({
  iconLeft = "",
  iconRight = "",
  name = "click",
  color = "#fff",
  backgroundColor = "#334d6e",
  style = {},
  width = "5rem",
  height = "2rem",
  children,
  handleClick = () => {},
  link,
}) => {
  const history = useNavigate();

  return (
    <Button
      variant="text"
      className=" button center"
      style={{
        color: color,
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      onClick={
        link
          ? () => {
              history(link);
            }
          : handleClick
      }
    >
      {iconLeft && iconLeft}
      <div className="d-flex justify-content-center align-items-center flex-column">
        <span className="mt-1">{name}</span>
        {children && children}
      </div>
      {iconRight && iconRight}
    </Button>
  );
};
export default ButtonCustom;
