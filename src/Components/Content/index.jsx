import { memo } from "react";
import "./style.scss";
import { v4 as uuid } from "uuid";
import { AppStoreUseContext } from "../../Context/AppStore";

import CreateNewFeed from "./CreateNewFeed";
import Information from "./Information";
const Content = ({ setShowModalPost = () => {} }) => {
  const { posts } = AppStoreUseContext();
  function loadNewFeeds() {
    return posts.map((newFeed) => {
      return (
        <div key={uuid()}>
          <Information data={newFeed.post} />
        </div>
      );
    });
  }
  return (
    <div
      className="wrapper-Content w-100 hidden-scroll"
      style={{
        height: "calc(100vh - 8rem)",
        overflow: "scroll",
        paddingBottom: "2rem",
      }}
    >
      <CreateNewFeed handLeShowModalPost={() => setShowModalPost(true)} />
      {loadNewFeeds()}
    </div>
  );
};
export default memo(Content);
