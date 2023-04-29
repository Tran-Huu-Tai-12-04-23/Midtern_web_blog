import React, { useEffect, memo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Home from "./Layout/Home";
import Sign from "./Layout/Sign";
import AppStore from "./Context/AppStore";
import Profile from "./Layout/Profile";
import Setting from "./Layout/Setting";
import Chat from "./Layout/Chat";
import Search from "./Layout/Search";
import AuthUser from "./Context/AuthUser";
import CreateNewGroup from "./Layout/CreateNewGroup";

function App() {
  const history = useNavigate();
  useEffect(() => {
    const storedLink = localStorage.getItem("link");
    // history(storedLink);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      var url = new URL(window.location.href);
      var path = url.pathname.split("/").pop();
      localStorage.setItem("link", path);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <AuthUser>
      <AppStore>
        <Routes>
          <Route path="/sign-to-website" element={<Sign />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/search" element={<Search />} />
          <Route path="/me/create-new-group" element={<CreateNewGroup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AppStore>
    </AuthUser>
  );
}

export default memo(App);
