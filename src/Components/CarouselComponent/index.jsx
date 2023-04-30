import React from "react";
import { v4 as uuid } from "uuid";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";

const CarouselComponent = ({ data = [], height = "30rem" }) => {
  const renderCarouselItems = () => {
    const MyPaper = styled(Paper)({
      backgroundColor: "transparent",
      height: height,
    });

    return data.map((photo) => (
      <MyPaper key={uuid()}>
        <div
          className="center "
          style={{
            padding: "1rem",
            borderRadius: ".5rem",
            height: "100%",
          }}
        >
          <img
            className="m-2"
            style={{
              height: "100%",
              objectFit: "contain",
            }}
            src={photo}
          />
        </div>
      </MyPaper>
    ));
  };

  return (
    <div>
      <Carousel>{renderCarouselItems()}</Carousel>
    </div>
  );
};

export default CarouselComponent;
