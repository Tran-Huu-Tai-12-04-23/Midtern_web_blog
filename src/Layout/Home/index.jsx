import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthUserUseContext } from "../../Context/AuthUser";
import { AppStoreUseContext } from "../../Context/AppStore";

import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Content from "../../Components/Content";
import ChatList from "../../Components/ChatList";
import CreateNews from "../../Components/CreateNews";

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
    const timer = setTimeout(() => {
      if (setLoader) {
        setLoader(false);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      className="home bg-main container-fluid "
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <CreateNews
        user={user ? user : {}}
        modalPost={modalPost}
        setModalPost={setModalPost}
      />
      <div className="row ">
        <div className="col-12 mb-5">
          <Header
            user={user ? user : {}}
            setUser={setUser ? setUser : () => {}}
          />
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
