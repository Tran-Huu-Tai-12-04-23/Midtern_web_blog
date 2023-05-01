import { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthUserUseContext } from "../../Context/AuthUser";

import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Content from "../../Components/Content";
import ChatList from "../../Components/ChatList";
import CreateNews from "../../Components/CreateNews";
import ChatBox from "../../Components/ChatBox";
import { AppStoreUseContext } from "../../Context/AppStore";

const Home = ({}) => {
  const { user, setUser } = AuthUserUseContext();
  const { posts } = AppStoreUseContext();
  const history = useNavigate();

  const [modalPost, setModalPost] = useState(false);

  useEffect(() => {
    if (!user) {
      history("/sign-to-website");
    }
  }, [user]);

  return (
    <div
      className="home bg-main container-fluid custom-scroll"
      style={{
        height: "100vh",
        // overflow: "hidden",
        overflow: "auto",
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
        <div
          className="col-3 position-fixed"
          style={{
            top: "6rem",
            left: 0,
            bottom: 0,
          }}
        >
          <Sidebar />
        </div>
        <div className="col-3"></div>

        <div className=" col-6">
          <Content setShowModalPost={setModalPost} posts={posts} />
        </div>
        <div className="col-3"></div>
        <div
          className="col-3 position-fixed"
          style={{
            top: "6rem",
            right: 0,
            bottom: 0,
          }}
        >
          <ChatList />
        </div>
      </div>
      <ChatBox />
    </div>
  );
};

export default memo(Home);
