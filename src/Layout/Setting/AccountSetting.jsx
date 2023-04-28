import React, { useState } from "react";
import default_background from "../../Assets/img/default_background.png";
import Input from "../../Components/Input";
import { CiUser, CiLock } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import ButtonCustom from "../../Components/ButtonCustom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { AuthUserUseContext } from "../../Context/AuthUser";

function AccountSetting() {
  const { user } = AuthUserUseContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = React.useState("");

  const handleChange = (event) => {
    setInterest(event.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row mt-5 ">
        <div className="col-6 mt-5">
          <Input
            value={username}
            type="text"
            variant="Username"
            handleChange={(e) => setUsername(e.target.value)}
            css={{
              border: "none",
              borderBottom: "1px solid #4f84eb",
            }}
            icon={
              <CiUser
                style={{
                  fontSize: "1.5rem",
                  marginRight: ".5rem",
                }}
              />
            }
          ></Input>
          <Input
            value={email}
            type="text"
            variant="Email"
            handleChange={(e) => setUsername(e.target.value)}
            css={{
              border: "none",
              marginTop: "3rem",
              borderBottom: "1px solid #4f84eb",
            }}
            icon={
              <TfiEmail
                style={{
                  fontSize: "1.5rem",
                  marginRight: ".5rem",
                }}
              />
            }
          ></Input>
          <Input
            value={password}
            type="password"
            variant="Password"
            handleChange={(e) => setPassword(e.target.value)}
            css={{
              border: "none",
              borderBottom: "1px solid #4f84eb",
              marginTop: "3rem",
            }}
            icon={
              <CiLock
                style={{
                  fontSize: "1.5rem",
                  marginRight: ".5rem",
                }}
              />
            }
          ></Input>
          <Input
            value={confirmPassword}
            type="password"
            variant="Confirm password"
            handleChange={(e) => setConfirmPassword(e.target.value)}
            css={{
              border: "none",
              borderBottom: "1px solid #4f84eb",
              marginTop: "3rem",
            }}
            icon={
              <CiLock
                style={{
                  fontSize: "1.5rem",
                  marginRight: ".5rem",
                }}
              />
            }
          ></Input>
          <div className="w-100 center mt-5 ">
            <ButtonCustom
              name="Confirm & Save"
              width="unset"
              style={{
                marginTop: "1rem",
              }}
              backgroundColor="#4f84eb"
            ></ButtonCustom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSetting;
