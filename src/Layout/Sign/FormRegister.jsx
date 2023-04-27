import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { hashPass } from "../../util/index.js";
import { v4 as uuid } from "uuid";
import { AppStoreUseContext } from "../../Context/AppStore.js";

import "./style.scss";

import Input from "../../Components/Input";
import ButtonCustom from "../../Components/ButtonCustom";

import logo from "../../Assets/img/logo.png";

import { BiUser } from "react-icons/bi";
import { FiLock } from "react-icons/fi";
import { addDocument, checkUsernameExists } from "../../firebase/service.js";

const FormRegister = ({ onSwitchRoute }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordNotification, setPasswordNotification] = useState("");
  const [usernameNotification, setUsernameNotification] = useState("");
  const [confirmPasswordNotification, setConfirmPasswordNotification] =
    useState("");
  const { setNotifications } = AppStoreUseContext();

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
    } else if (password !== confirmPassword) {
      setPasswordNotification("Password and confirm password is not match!!");
      return false;
    } else {
      setPasswordNotification("");
      return true;
    }
  }
  function checkConfirmPassword(e) {
    if (!confirmPassword) {
      setConfirmPasswordNotification("Confirm password is empty!!");
      return false;
    } else if (confirmPassword.length < 6) {
      setConfirmPasswordNotification("Confirm password must be at least 6!!");
      return false;
    } else if (password !== confirmPassword) {
      setPasswordNotification("Confirm password and password is not match!!");
      return false;
    } else {
      setConfirmPasswordNotification("");
      return true;
    }
  }
  function register(event) {
    let check = checkUsernameExists(username);
    if (!check) {
      setNotifications((prev) => {
        return [
          ...prev,
          {
            text: "User already registered",
            id: uuid(),
            type: "warn",
          },
        ];
      });
    } else {
      saveIntoFirebase();
    }
  }

  function saveIntoFirebase() {
    addDocument("users", {
      password: hashPass(password),
      id: uuid(),
      displayName: username,
      email: "",
      photoURL:
        "https://i.pinimg.com/originals/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg",
      friends: [],
    })
      .then((res) => {
        onSwitchRoute(true);
        setNotifications((prev) => {
          return [
            ...prev,
            {
              text: "Create new account successfully",
              type: "success",
              id: uuid(),
            },
          ];
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className=" col-xl-6 col-lg-6 col-md-12">
      <div
        className="wrapper-form h-100 w-100 center"
        style={{
          minHeight: "100vh",
          width: "50vw",
          backgroundColor: "var(--dark-login-secondary-color)",
        }}
      >
        <div className="form center flex-wrap flex-column w-100" style={{}}>
          <Link to="/">
            <img src={logo}></img>
          </Link>
          <h1
            className="mb-5"
            style={{
              fontSize: "1.5rem",
            }}
          >
            Start with new account?
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
            handleChange={(e) => setPassword(e.target.value)}
            value={password}
            icon={
              <FiLock
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
            notification={confirmPasswordNotification}
            type="password"
            variant="Confirm password"
            width="70%"
            height="3rem"
            value={confirmPassword}
            handleChange={(e) => setConfirmPassword(e.target.value)}
            icon={
              <FiLock
                style={{
                  marginRight: ".3rem",
                }}
              />
            }
          />

          <ButtonCustom
            name="Create account"
            width="70%"
            style={{
              marginTop: "3rem",
              fontWeight: "600",
            }}
            handleClick={() => {
              if (checkPass() && checkConfirmPassword() && checkUsername()) {
                if (
                  !usernameNotification &&
                  !passwordNotification &&
                  !confirmPasswordNotification
                ) {
                  register();
                }
              }
            }}
          />
          <div
            style={{
              width: "70%",
              marginTop: "4%",
            }}
            className="center ml-2"
          >
            <span className="span p-2">Have you ready your account ?</span>
            <span
              className=""
              style={{
                color: "var(--color-link)",
                cursor: "pointer",
              }}
              onClick={onSwitchRoute}
            >
              Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormRegister;
