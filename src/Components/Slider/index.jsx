import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import "./style.scss";

const Slider = ({ dataImage = [] }) => {
  const [steps, setSteps] = useState(
    Array.from(Array(dataImage.length).keys())
  );
  const [active, setActive] = useState(1);
  const [notifications, setNotifications] = useState([
    "Build  your community with us",
    "Welcome, we're working",
    "Use it for development",
  ]);
  const loadNotifications = () => {
    return notifications.map((notification, index) => {
      return (
        <h1
          key={uuid()}
          style={{
            display: active === index ? "" : "none",
          }}
        >
          {notification}
        </h1>
      );
    });
  };
  const loadImage = () => {
    if (dataImage.length > 0) {
      return dataImage.map((image, index) => {
        return (
          <img
            src={image}
            key={uuid()}
            className="w-100"
            style={{
              display: active === index ? "" : "none",
            }}
          ></img>
        );
      });
    }
  };
  const loadStep = () => {
    return steps.map((step, index) => {
      return (
        <div
          key={uuid()}
          className=" m-1"
          style={{
            width: step == active ? "3rem" : "1.4rem",
            borderRadius: step == active ? "3rem" : "50%",
            height: "1.4rem",
            backgroundColor: step == active ? "#25bae3" : "#334d6e",
            cursor: "pointer",
          }}
          onClick={() => setActive(step)}
        ></div>
      );
    });
  };

  useEffect(() => {
    const handleTime = () => {
      setActive((ac) => {
        if (ac > steps.length - 2) {
          return 0;
        } else {
          return ac + 1;
        }
      });
      setTimeout(handleTime, 2000);
    };
    setTimeout(handleTime, 2000);
    return () => {};
  }, []);

  return (
    <div className="wrapper-slider overflow-hidden position-relative w-100 h-100 center p-5 mb-5">
      <div className="w-50 wrapper-slider-image h-75 d-flex justify-content-center align-items-center mb-5 pb-5">
        {loadImage()}
      </div>
      <div
        className="w-100 center position-absolute"
        style={{
          bottom: "10rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {loadNotifications()}
      </div>
      <div
        className="wrapper-slider-step center mt-5 position-absolute"
        style={{
          bottom: "5rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {loadStep()}
      </div>
    </div>
  );
};

export default Slider;
