import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoaderContext, AuthContext } from "../../Context";

import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Content from "../../Components/Content";
import ChatList from "../../Components/ChatList";
import CreateNews from "../../Components/CreateNews";

const Home = ({}) => {
  const { user, setUser } = useContext(AuthContext);
  const [loader, setLoader] = useContext(LoaderContext);
  const history = useNavigate();
  const [newFeeds, setNewFeeds] = useState([]);

  const [modalPost, setModalPost] = useState(false);
  useEffect(() => {
    if (!user) {
      history("/sign-to-website");
    }
  }, [user]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);
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
        setNewFeeds={setNewFeeds}
        user={user}
        show={modalPost}
        setModalPost={setModalPost}
      />
      <div className="row ">
        <div className="col-12 mb-5">
          <Header user={user} setUser={setUser} />
        </div>
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-6">
          <Content newFeeds={newFeeds} setShowModalPost={setModalPost} />
        </div>
        <div className="col-3">
          <ChatList />
        </div>
      </div>
    </div>
  );
};

export default Home;
