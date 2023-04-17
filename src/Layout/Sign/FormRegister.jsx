import { useState } from "react";

import { Checkbox } from "@mui/material";

import "./style.scss";

import Input from "../../Components/Input";
import ButtonCustom from "../../Components/ButtonCustom";

import logo from "../../Assets/img/logo.png";
import logoGoogle from "../../Assets/img/logoGoogle.png";

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

  function enterUsername(e) {
    setUserName(e.target.value);
    if (!username) {
      setUsernameNotification("Username is empty");
    } else {
      setUsernameNotification("");
    }
  }
  function changePass(e) {
    setPassword(e.target.value);
    if (!password) {
      setPasswordNotification("Password is empty!!");
    } else if (password.length < 6) {
      setPasswordNotification("Password must be at least 6!!");
    } else {
      setPasswordNotification("");
    }
  }
  function changeConfirmPassword(e) {
    setConfirmPassword(e.target.value);
    if (!confirmPassword) {
      setConfirmPasswordNotification("Confirm password is empty!!");
    } else if (confirmPassword.length < 6) {
      setConfirmPasswordNotification("Confirm password must be at least 6!!");
    } else {
      setConfirmPasswordNotification("");
    }
  }
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
          <img src={logo}></img>
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
            handleChange={enterUsername}
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
            handleChange={changePass}
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
            handleChange={changeConfirmPassword}
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
