import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import "./style.scss";

import Input from "../../Components/Input";
import ButtonCustom from "../../Components/ButtonCustom";

import logo from "../../Assets/img/logo.png";
import logoGoogle from "../../Assets/img/logoGoogle.png";
import { ContextNotification } from "../../Context";

import { BiUser } from "react-icons/bi";
import { FiLock } from "react-icons/fi";

const FormRegister = ({ onSwitchRoute }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordNotification, setPasswordNotification] = useState("");
  const [usernameNotification, setUsernameNotification] = useState("");
  const [confirmPasswordNotification, setConfirmPasswordNotification] =
    useState("");
  const setNotifications = useContext(ContextNotification);

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
  const submitData = async () => {
    let formData = {
      username: username,
      password: password,
      confirm_password: confirmPassword,
    };
    try {
      const response = await fetch(
        "http://localhost/api-web-blog/user?action=register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.status === true) {
        setNotifications((prev) => {
          return [
            ...prev,
            {
              text: data.message,
              type: "success",
              id: uuid(),
            },
          ];
        });
        onSwitchRoute();
      } else {
        setNotifications((prev) => {
          return [
            ...prev,
            {
              text: data.message,
              type: "err",
              id: uuid(),
            },
          ];
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="col-6">
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
                  submitData();
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
