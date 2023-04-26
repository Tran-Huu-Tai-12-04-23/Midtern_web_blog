import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { v4 as uuid } from "uuid";
import Loader from "../Components/Loader";
import Notification from "../Components/Notification";
import { db } from "../firebase/index";
import {
  query,
  orderBy,
  onSnapshot,
  collection,
  where,
} from "firebase/firestore";
import useFirestore from "../hooks/useFireStore";
import { AuthUserUseContext } from "./AuthUser";

const AppStoreContext = createContext();

function AppStore({ children }) {
  const { user } = AuthUserUseContext();
  const [loader, setLoader] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [posts, setPosts] = useState([]);
  const [processUpload, setProcessUpload] = useState(false);

  const usersCondition = useMemo(() => {
    return {
      fieldName: "id",
      operator: "!=",
      compareValue: user ? user.id : uuid(),
    };
  }, [user]);
  const listUser = useFirestore("users", usersCondition);

  const loadNotifications = () => {
    return notifications.map((n, i) => (
      <div key={uuid()}>
        <Notification type={n.type} text={n.text} id={n.id}></Notification>
      </div>
    ));
  };
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const subscribe = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
          user_id: doc.data().user_id,
        }))
      );
    });
    return subscribe;
  }, []);
  return (
    <AppStoreContext.Provider
      value={{
        notifications,
        setNotifications,
        loader,
        setLoader,
        posts,
        processUpload,
        setProcessUpload,
        listUser,
      }}
    >
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
      {children}
    </AppStoreContext.Provider>
  );
}

export const AppStoreUseContext = () => {
  return useContext(AppStoreContext);
};

export default AppStore;
