import "./style.scss";
import CreateNewFeed from "./CreateNewFeed";
import Information from "./Information";
const Content = () => {
  return (
    <div
      className="wrapper-Content w-100 hidden-scroll"
      style={{
        height: "calc(100vh - 8rem)",
        overflow: "scroll",
        paddingBottom: "2rem",
      }}
    >
      <CreateNewFeed />
      <Information />
      <Information />
      <Information />
      <Information />
    </div>
  );
};
export default Content;
