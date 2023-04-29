import { memo } from "react";
import "./style.scss";
import { v4 as uuid } from "uuid";
import { AppStoreUseContext } from "../../Context/AppStore";

import CreateNewFeed from "./CreateNewFeed";
import Information from "../Information";
import SuggestNewFriends from "../../Layout/Home/SuggestNewFriends";

const Content = ({ setShowModalPost = () => {} }) => {
  console.log("rendering content");
  const { posts } = AppStoreUseContext();
  function loadNewFeeds() {
    return posts.map((newFeed, index) => {
      if ((index + 1) % 5 === 0) {
        return (
          <div key={uuid()}>
            <SuggestNewFriends />
            <Information data={newFeed.post} />
          </div>
        );
      } else {
        return (
          <div key={uuid()}>
            <Information data={newFeed.post} />
          </div>
        );
      }
    });
  }
  return (
    <div
      className="wrapper-Content w-100  custom-scroll"
      style={{
        height: "calc(100vh - 8rem)",
        overflow: "auto",
        paddingBottom: "2rem",
      }}
    >
      <CreateNewFeed handLeShowModalPost={() => setShowModalPost(true)} />
      {loadNewFeeds()}
    </div>
  );
};
export default memo(Content);
