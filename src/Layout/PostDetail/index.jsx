import Header from "../../Components/Header";
import Detail from "./Detail";

function PostDetail() {
  return (
    <div
      className="home bg-main container-fluid "
      style={{
        height: "100vh",
        overflow: "hidden",
        paddingTop: "4rem",
      }}
    >
      <Header />
      <Detail />
    </div>
  );
}

export default PostDetail;
