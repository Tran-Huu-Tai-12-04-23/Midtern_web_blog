import { useState, useRef, useEffect } from "react";
import CardFriend from "./CardFriend";
import { friendList } from "./friendList.js";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

function SuggestNewFriends() {
  const [translateX, setTranslateX] = useState(0);
  const [lengthSlider, setLengthSlider] = useState(0);
  const slider = useRef(null);
  const friendWidth = useRef(null);

  const loadListFriend = () => {
    return friendList.map((friend) => {
      return (
        <div ref={friendWidth} className="col-3" key={friend.id}>
          <CardFriend data={friend} />
        </div>
      );
    });
  };

  useEffect(() => {
    setLengthSlider(friendList.length * friendWidth.current.offsetWidth);
  }, []);

  const translateSliderNext = () => {
    setTranslateX((prev) => {
      return (prev -= slider.current.offsetWidth);
    });
  };
  const translateSliderPrev = () => {
    setTranslateX((prev) => {
      return (prev += slider.current.offsetWidth);
    });
  };
  console.log(-translateX);
  return (
    <div className="slider d-flex p-4">
      <div
        className="container-fluid position-relative overflow-hidden"
        ref={slider}
      >
        <HiArrowSmRight
          className="hover-border position-absolute center"
          style={{
            fontSize: "3rem",
            padding: "1rem",
            borderRadius: "50%",
            background: "rgba(0,0,0,.8)",
            color: "#fff",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            zIndex: "2",
            display: -translateX > lengthSlider / 2 - 50 ? "none" : "block",
          }}
          onClick={translateSliderNext}
        ></HiArrowSmRight>
        <HiArrowSmLeft
          className="hover-border position-absolute center"
          style={{
            fontSize: "3rem",
            padding: "1rem",
            borderRadius: "50%",
            background: "rgba(0,0,0,.8)",
            color: "#fff",
            top: "50%",
            transform: "translateY(-50%)",
            left: "0",
            display: translateX === 0 ? "none" : "block",
            zIndex: "2",
          }}
          onClick={translateSliderPrev}
        ></HiArrowSmLeft>
        <div
          className="row flex-nowrap d-flex  "
          style={{
            transform: `translateX(${translateX}px)`,
            transition: ".4s",
          }}
        >
          {loadListFriend()}
        </div>
      </div>
    </div>
  );
}

export default SuggestNewFriends;
