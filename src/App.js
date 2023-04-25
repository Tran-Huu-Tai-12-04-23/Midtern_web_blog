import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { v4 as uuid } from "uuid";

import GlobalStyles from "./GlobalStyle/index";
import Home from "./Layout/Home";
import Sign from "./Layout/Sign";
import Loader from "./Components/Loader";
import Notification from "./Components/Notification";
import {
  LoaderContext,
  NotificationContext,
  AuthContext,
} from "./Context/index.js";

function App() {
  const [user, setUser] = React.useState(null);
  const [loader, setLoader] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);
  const history = useNavigate();

  const loadNotifications = () => {
    return notifications.map((n, i) => (
      <div key={uuid()}>
        <Notification type={n.type} text={n.text} id={n.id}></Notification>
      </div>
    ));
  };
  useEffect(() => {
    let user = sessionStorage.getItem("login");
    console.log(JSON.parse(user));
    if (user) {
      setUser(JSON.parse(user));
      history("/");
    }
  }, []);
  return (
    <div className="app">
      <LoaderContext.Provider value={[loader, setLoader]}>
        <NotificationContext.Provider value={setNotifications}>
          <AuthContext.Provider value={{ user, setUser }}>
            <GlobalStyles>
              <Routes>
                <Route path="/sign-to-website" element={<Sign />} />
                <Route path="/" element={<Home />} />
              </Routes>
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
