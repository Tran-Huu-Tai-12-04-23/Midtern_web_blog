import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyle/index";
import Home from "./Layout/Home";
import Sign from "./Layout/Sign";
import Loader from "./Components/Loader";
import {
  LoaderContext,
  NotificationContext,
  AuthContext,
} from "./Context/index.js";

function App() {
  const [user, setUser] = React.useState(null);
  const [loader, setLoader] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);

  useEffect(() => {
    let user = sessionStorage.getItem("login");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const loadNotifications = () => {
    return notifications.map((n, i) => (
      <div className={`notification ${n.type}`} key={i}>
        {n.message}
      </div>
    ));
  };

  return (
    <div className="app">
      <LoaderContext.Provider value={[loader, setLoader]}>
        <NotificationContext.Provider value={setNotifications}>
          <AuthContext.Provider value={{ user, setUser }}>
            <GlobalStyles>
              <Router>
                <Routes>
                  <Route path="/sign-to-website" element={<Sign />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </Router>
            </GlobalStyles>
            <div
              className="notification-list position-fixed "
              style={{
                top: "1rem",
                right: "1rem",
                zIndex: "10000000000",
              }}
            >
              {loadNotifications()}
            </div>
            <Loader show={loader} />
          </AuthContext.Provider>
        </NotificationContext.Provider>
      </LoaderContext.Provider>
    </div>
  );
}

export default App;
