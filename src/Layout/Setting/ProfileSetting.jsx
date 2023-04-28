import default_background from "../../Assets/img/default_background.png";
import { useState } from "react";
import ListSocial from "./ListSocial";
import Input from "../../Components/Input";
import { CiUser } from "react-icons/ci";
import ButtonCustom from "../../Components/ButtonCustom";

import { AuthUserUseContext } from "../../Context/AuthUser";

function ProfileSetting() {
  const { user } = AuthUserUseContext();
  const [fullName, setFullName] = useState(user ? user.displayName : "");
  const [joinDate, setJoinDate] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("male");
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-6">
          <Input
            variant="full name"
            width="90%"
            css={{
              border: "none",
              borderBottom: "1px solid #4f84eb",
              "--bd-focus-color": "#4f84eb",
            }}
            handleChange={(e) => {
              setFullName(e.target.value);
            }}
            value={fullName}
            iconRight={
              <CiUser
                style={{
                  position: "absolute",
                  right: ".5rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "2rem",
                }}
              />
            }
          />
        </div>
        <div className="col-6">
          <Input
            variant="Join dated"
            type="date"
            className="icon-calender"
            width="90%"
            value={joinDate}
            handleChange={(e) => {
              setJoinDate(e.target.value);
            }}
            css={{
              border: "none",
              borderBottom: "1px solid #4f84eb",
              "--bd-focus-color": "#4f84eb",
            }}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6 start ">
          <span className=""> Gender </span>
          <div
            className="start "
            style={{
              paddingLeft: ".8rem",
            }}
          >
            <input
              name="gender"
              type="checkbox"
              id="male"
              checked={gender === "male"}
              onChange={(e) => setGender("male")}
            />
            <label
              style={{
                paddingLeft: ".8rem",
              }}
              htmlFor="male"
            >
              male
            </label>
          </div>
          <div
            className="start "
            style={{
              paddingLeft: ".8rem",
            }}
          >
            <input
              name="gender"
              type="checkbox"
              id="female"
              checked={gender === "female"}
              onChange={(e) => setGender("female")}
            />
            <label
              style={{
                paddingLeft: ".8rem",
              }}
              htmlFor="female"
            >
              female
            </label>
          </div>
        </div>
        <div className="col-6">
          <Input
            variant="Birthday"
            type="date"
            width="90%"
            className="icon-calender"
            value={birthday}
            handleChange={(e) => setBirthday(e.target.value)}
            css={{
              border: "none",
              borderBottom: "1px solid #4f84eb",
              "--bd-focus-color": "#4f84eb",
            }}
          />
        </div>

        <div
          className="row mt-5 w-100 pt-5 "
          style={{
            borderTop: "1px solid #4f84eb",
          }}
        >
          <h5>Social profile connect</h5>
          <div className="container-fluid">
            <div className="row mt-4">
              <div className="col-6">
                <ListSocial />
                <div className="w-100 start mt-5">
                  <ButtonCustom
                    name="Deactivate My Account"
                    width="unset"
                    style={{
                      fontSize: ".8rem",
                      marginRight: "1rem",
                    }}
                  />
                  <ButtonCustom
                    name="Save change"
                    width="unset"
                    backgroundColor="#4f84eb"
                    style={{
                      fontSize: ".8rem",
                    }}
                  />
                </div>
              </div>
              <div className="col-6">
                <img
                  src={default_background}
                  style={{ maxWidth: "100%" }}
                  className=""
                ></img>
                <div className="w-100 d-flex justify-content-between  align-items-center">
                  <ButtonCustom
                    name="Upload now"
                    backgroundColor="transparent"
                    style={{
                      color: "#4f84eb",
                    }}
                    width="unset"
                  />
                  <ButtonCustom
                    width="unset"
                    name="Delete"
                    backgroundColor="transparent"
                    style={{}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetting;
