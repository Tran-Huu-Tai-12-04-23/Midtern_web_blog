import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";

import GlobalStyles from "./GlobalStyle";
import Home from "./Layout/Home";
import Sign from "./Layout/Sign";
import Notification from "./Components/Notification";
import { NotificationContext, LoginContext, LoaderContext } from "./Context";
import AuthenticationGoogleAccount from "./AuthenticationGoogleAccount";
import Loader from "././Components/Loader";

function App() {
  const [login, setLogin] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const storeUser = localStorage.getItem("login");
    if (storeUser) {
      setLogin(JSON.parse(storeUser));
    }
  }, []);

  const loadNotifications = () => {
    return notifications.map((notification) => {
      return (
        <div key={notification.id}>
          <Notification
            text={notification.text}
            type={notification.type}
            id={notification.id}
          />
        </div>
      );
    });
  };

  return (
    <div className="App">
      <AuthenticationGoogleAccount setLogin={setLogin} setLoader={setLoader}>
        <LoaderContext.Provider value={[loader, setLoader]}>
          <NotificationContext.Provider value={setNotifications}>
            <LoginContext.Provider value={[login, setLogin]}>
              <GlobalStyles>
                <Router>
                  <Routes>
                    <Route path="/sign-to-website" element={<Sign />}></Route>
                    <Route path="/" element={<Home />}></Route>
                  </Routes>
                </Router>
                <Loader show={loader} />
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
            </LoginContext.Provider>
          </NotificationContext.Provider>
        </LoaderContext.Provider>
      </AuthenticationGoogleAccount>
    </div>
  );
}

export default App;
