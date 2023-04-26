import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthUser({ children }) {
  const [user, setUser] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    let user = sessionStorage.getItem("login");
    if (user) {
      setUser(JSON.parse(user));
      history("/");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthUser;
export const AuthUserUseContext = () => {
  return useContext(AuthContext);
};
