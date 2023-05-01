import { memo, useRef } from "react";
import "./style.scss";
import { v4 as uuid } from "uuid";

import CreateNewFeed from "./CreateNewFeed";
import Information from "../Information";
import SuggestNewFriends from "../../Layout/Home/SuggestNewFriends";

const Content = ({ setShowModalPost = () => {}, posts = [] }) => {
  const contentRef = useRef(null);

  return (
    <div
      ref={contentRef}
      className="wrapper-Content w-100  custom-scroll"
      style={{
        height: "calc(100vh - 8rem)",
        overflow: "auto",
        paddingBottom: "2rem",
      }}
    >
      <CreateNewFeed handLeShowModalPost={() => setShowModalPost(true)} />
      {posts.map((newFeed, index) => {
        if ((index + 1) % 5 === 0 && newFeed?.post?.mode === false) {
          return (
            <div key={uuid()}>
              <SuggestNewFriends />
              <Information data={newFeed.post} />
            </div>
          );
        } else if (newFeed?.post?.mode === false) {
          return (
            <div key={uuid()}>
              <Information data={newFeed.post} />
            </div>
          );
        }
        return null; // Handle the case when the condition is not met
      })}
    </div>
  );
};
export default memo(Content);
