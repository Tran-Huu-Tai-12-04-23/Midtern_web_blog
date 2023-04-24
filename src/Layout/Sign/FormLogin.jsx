import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { db } from "../../firebase";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { verifyPass } from "../../util/index";
import { UserAuth } from "../../AuthenticationGoogleAccount";

import { Checkbox } from "@mui/material";

import "./style.scss";

import Input from "../../Components/Input";
import ButtonCustom from "../../Components/ButtonCustom";

import logo from "../../Assets/img/logo.png";
import logoGoogle from "../../Assets/img/logoGoogle.png";

import {
  NotificationContext,
  LoginContext,
  LoaderContext,
} from "../../Context";

import { BiUser } from "react-icons/bi";
import { FiLock } from "react-icons/fi";

const FormLogin = ({ onSwitchRoute }) => {
  const [loader, setLoader] = useContext(LoaderContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordNotification, setPasswordNotification] = useState("");
  const [usernameNotification, setUsernameNotification] = useState("");
  const setNotifications = useContext(NotificationContext);
  const [login, seLogin] = useContext(LoginContext);
  const { googleSignIn } = UserAuth();

  function checkUsername(e) {
    if (!username) {
      setUsernameNotification("Username is empty");
      return false;
    } else {
      setUsernameNotification("");
      return true;
    }
  }
  function checkPass(e) {
    if (!password) {
      setPasswordNotification("Password is empty!!");
      return false;
    } else if (password.length < 6) {
      setPasswordNotification("Password must be at least 6!!");
      return false;
    } else {
      setPasswordNotification("");
      return true;
    }
  }
  const history = useNavigate();
  useEffect(() => {
    if (login) {
      history("/");
    }
  }, [login]);
  const submitData = async () => {
    const q = query(collection(db, "user"), where("username", "==", username));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.empty) {
        setNotifications((prev) => {
          return [
            ...prev,
            {
              text: "User not found",
              type: "err",
              id: uuid(),
            },
          ];
        });
      } else {
        const doc = querySnapshot.docs[0];
        if (verifyPass(password, doc.data().password)) {
          handleLogin(doc.id, doc.data().username);
        } else {
          setNotifications((prev) => {
            return [
              ...prev,
              {
                text: "Password is not matches",
                type: "err",
                id: uuid(),
              },
            ];
          });
        }
      }
      return () => unsubscribe;
    });
  };

  const handleLogin = (userId, username) => {
    const storeLogin = {
      username: username,
      userId: userId,
    };
    seLogin({
      username: username,
    });
    localStorage.setItem("login", JSON.stringify(storeLogin));
    setNotifications((prev) => {
      return [
        ...prev,
        {
          text: "Login successfully!!",
          type: "success",
          id: uuid(),
        },
      ];
    });
    setLoader(true);
    history("/");
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-xl-6 col-lg-6 col-md-12">
      <div
        className="wrapper-form h-100 w-100"
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--dark-login-secondary-color)",
        }}
      >
        <div
          className="form w-100 center flex-wrap flex-column w-100"
          style={{}}
        >
          <Link to="/">
            <img src={logo}></img>
          </Link>
          <h1
            className="mb-5"
            style={{
              fontSize: "1.5rem",
            }}
          >
            Hello!!
          </h1>
          <Input
            css={{
              color: "var(--dark-color)",
            }}
            notification={usernameNotification}
            variant="User Name"
            width="70%"
            height="3rem"
            value={username}
            handleChange={(e) => setUserName(e.target.value)}
            icon={
              <BiUser
                style={{
                  marginRight: ".3rem",
                }}
              />
            }
          />
          <Input
            css={{
              color: "var(--dark-color)",
              marginTop: "3.5rem",
            }}
            notification={passwordNotification}
            type="password"
            variant="Password"
            width="70%"
            height="3rem"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
            icon={
              <FiLock
                style={{
                  marginRight: ".3rem",
                }}
              />
            }
          />
          <div
            className="mt-4 d-flex justify-content-between align-items-center"
            style={{
              width: "70%",
            }}
          >
            <div className="left">
              <Checkbox
                style={{
                  color: "var(--dark-color)",
                }}
              />
              <label
                htmlFor=""
                style={{
                  color: "var(--dark-second-cl)",
                  fontSize: ".8rem",
                }}
              >
                Remember Me
              </label>
            </div>
            <a
              href="#"
              className=""
              style={{
                color: "var(--color-link)",
              }}
            >
              Recovery Password
            </a>
          </div>
          <ButtonCustom
            name="Login"
            width="70%"
            style={{
              fontWeight: "600",
              marginTop: "3rem",
            }}
            handleClick={() => {
              if (checkPass() && checkUsername()) {
                if (!usernameNotification && !passwordNotification) {
                  submitData();
                }
              }
            }}
          />
          <ButtonCustom
            name="Login with google"
            width="70%"
            style={{
              marginTop: "2rem",
            }}
            handleClick={handleGoogleSignIn}
            backgroundColor="#4d6d8f"
            iconLeft={
              <img
                style={{
                  width: "2rem",
                  height: "2rem",
                  marginRight: "1rem",
                }}
                src={logoGoogle}
              ></img>
            }
          />
          <div
            style={{
              width: "70%",
              marginTop: "4%",
            }}
            className="center ml-2"
          >
            <span className="span p-2">Do you have account yet?</span>
            <span
              className=""
              style={{
                color: "var(--color-link)",
                cursor: "pointer",
              }}
              onClick={onSwitchRoute}
            >
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormLogin;
