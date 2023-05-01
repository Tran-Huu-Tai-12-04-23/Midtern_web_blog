import { Children } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

import { Button } from "@mui/material";
import { AppStoreUseContext } from "../../Context/AppStore";
import { styled } from "@mui/system";

const ButtonCustom = ({
  iconLeft = "",
  iconRight = "",
  name = "click",
  color = "#fff",
  backgroundColor = "#334d6e",
  style = {},
  width = "unset",
  height = "2rem",
  children,
  handleClick = () => {},
  link,
}) => {
  const history = useNavigate();
  const MyButton = styled(Button)({
    color: color,
    width: width,
    height: height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "rgba(204, 204, 204, .2)",
      color: "#0094ff",
    },
    backgroundColor: backgroundColor,
    ...style,
    borderRadius: ".5rem",
  });

  return (
    <MyButton
      variant="text"
      className=" center"
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
    </MyButton>
  );
};
export default ButtonCustom;
