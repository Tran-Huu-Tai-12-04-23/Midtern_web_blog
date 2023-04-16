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
  height = "3rem",
  handleClick = () => {},
}) => {
  return (
    <Button
      variant="text"
      className="button center"
      style={{
        ...style,
        color: color,
        backgroundColor: backgroundColor,
        width: width,
        height: height,
      }}
      onClick={handleClick}
    >
      {iconLeft && iconLeft}
      {name}
      {iconRight && iconRight}
    </Button>
  );
};
export default ButtonCustom;
