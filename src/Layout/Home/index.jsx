import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextLogin } from "../../Context";

import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Content from "../../Components/Content";
import ChatList from "../../Components/ChatList";
import CreateNews from "../../Components/CreateNews";

const Home = () => {
  const [login, seLogin] = useContext(ContextLogin);
  const history = useNavigate();
  const [modalPost, setModalPost] = useState(false);
  useEffect(() => {
    if (!login.isLogin) {
      history("/sign-to-website");
    }
  }, [login]);
  return (
    <div
      className="home bg-main container-fluid "
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <CreateNews login={login} show={modalPost} setModalPost={setModalPost} />
      <div className="row ">
        <div className="col-12 mb-5">
          <Header login={login} setLogin={seLogin} />
        </div>
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-6">
          <Content setShowModalPost={setModalPost} />
        </div>
        <div className="col-3">
          <ChatList />
        </div>
      </div>
    </div>
  );
};

export default Home;
