import React, { useEffect, memo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Layout/Home";
import Sign from "./Layout/Sign";
import AppStore from "./Context/AppStore";
import Profile from "./Layout/Profile";
import Chat from "./Layout/Chat";
import AuthUser from "./Context/AuthUser";

function App() {
  return (
    <AuthUser>
      <AppStore>
        <Routes>
          <Route path="/sign-to-website" element={<Sign />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AppStore>
    </AuthUser>
  );
}

export default memo(App);
