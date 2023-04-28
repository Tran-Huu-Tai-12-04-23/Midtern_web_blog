import { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthUserUseContext } from "../../Context/AuthUser";
import { AppStoreUseContext } from "../../Context/AppStore";

import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Content from "../../Components/Content";
import ChatList from "../../Components/ChatList";
import CreateNews from "../../Components/CreateNews";
import ChatBox from "../../Components/ChatBox";

const Home = ({}) => {
  const { user, setUser } = AuthUserUseContext();
  const { setLoader } = AppStoreUseContext();
  const history = useNavigate();

  const [modalPost, setModalPost] = useState(false);
  useEffect(() => {
    if (!user) {
      history("/sign-to-website");
    }
  }, [user]);

  useEffect(() => {
    setLoader(false);
  }, []);
  return (
    <div
      className="home bg-main container-fluid "
      style={{
        height: "100vh",
        overflow: "hidden",
        paddingTop: "4rem",
      }}
    >
      <CreateNews
        user={user ? user : {}}
        modalPost={modalPost}
        setModalPost={setModalPost}
      />
      <div className="row ">
        <div className="col-12 mb-5">
          <Header />
        </div>
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-8">
          <Content setShowModalPost={setModalPost} />
        </div>
        <div className="col-2">
          <ChatList />
        </div>
      </div>
      <ChatBox />
    </div>
  );
};

export default memo(Home);
