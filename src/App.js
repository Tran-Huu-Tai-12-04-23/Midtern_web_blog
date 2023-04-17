import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Redi } from "react-router-dom";

import GlobalStyles from "./GlobalStyle";
import Home from "./Layout/Home";
import Sign from "./Layout/Sign";
import Notification from "./Components/Notification";
import { ContextNotification, ContextLogin } from "./Context";

function App() {
  const [login, setLogin] = useState({
    isLogin: false,
    userName: null,
    user_id: null,
  });
  const [notifications, setNotifications] = useState([]);

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
      <ContextNotification.Provider value={setNotifications}>
        <ContextLogin.Provider value={[login, setLogin]}>
          <GlobalStyles>
            <Router>
              <Routes>
                <Route path="/sign-to-website" element={<Sign />}></Route>
                {/*
            <Route path="/register" element={<Register />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/products" element={<ShowProduct />}></Route>
            <Route path="/detail-item" element={<DetailItem />}></Route>
            <Route path="/post-new-item" element={<PostNewItem />}></Route>
            <Route path="/store" element={<Store />}></Route> */}
                <Route path="/" element={<Home />}></Route>
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
        </ContextLogin.Provider>
      </ContextNotification.Provider>
    </div>
  );
}

export default App;
