import "./style.scss";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Content from "../../Components/Content";
import ChatList from "../../Components/ChatList";

const Home = () => {
  return (
    <div
      className="home bg-main container-fluid "
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="row ">
        <div className="col-12 mb-5">
          <Header />
        </div>
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-6">
          <Content />
        </div>
        <div className="col-3">
          <ChatList />
        </div>
      </div>
    </div>
  );
};

export default Home;
