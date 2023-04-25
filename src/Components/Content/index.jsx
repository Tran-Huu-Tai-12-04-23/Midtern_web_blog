import "./style.scss";
import { v4 as uuid } from "uuid";

import CreateNewFeed from "./CreateNewFeed";
import Information from "./Information";
const Content = ({ newFeeds, setShowModalPost = () => {} }) => {
  function loadNewFeeds() {
    return newFeeds.map((newFeed) => {
      return (
        <div key={uuid}>
          <Information data={newFeed} />
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
export default Content;
