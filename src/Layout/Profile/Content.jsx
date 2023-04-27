import Navbar from "./Navbar";
import ListSocial from "./ListSocial";
import Input from "../../Components/Input";
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import ButtonCustom from "../../Components/ButtonCustom";

function Content() {
  return (
    <div className="w-100 p-4">
      <h1>Settings</h1>
      <Navbar />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-6">
            <Input
              variant="Username"
              width="90%"
              css={{
                border: "none",
                borderBottom: "1px solid #39d99d",
                "--bd-focus-color": "#39d99d",
              }}
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
              width="90%"
              css={{
                border: "none",
                borderBottom: "1px solid #39d99d",
                "--bd-focus-color": "#39d99d",
              }}
              iconRight={
                <SlCalender
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
              <input name="gender" type="checkbox" id="male" />
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
              <input name="gender" type="checkbox" id="female" />
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
              css={{
                border: "none",
                borderBottom: "1px solid #39d99d",
                "--bd-focus-color": "#39d99d",
              }}
              iconRight={
                <SlCalender
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

          <div
            className="row mt-5 w-100 pt-5 "
            style={{
              borderTop: "1px solid #39d99d",
            }}
          >
            <h5>Social profile connect</h5>
            <div className="container-fluid">
              <div className="row mt-4">
                <div className="col-6">
                  <ListSocial />
                </div>
                <div className="col-6">
                  <img
                    src="https://assets.materialup.com/uploads/ead2f69d-8ea0-4be8-ae1e-be6584d6bb45/preview.jpg"
                    style={{ maxWidth: "100%" }}
                    className=""
                  ></img>
                  <div className="w-100 d-flex justify-content-between  align-items-center">
                    <ButtonCustom
                      name="Upload now"
                      backgroundColor="transparent"
                      style={{
                        color: "#39d99d",
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
                <div className="w-100 start">
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
                    backgroundColor="#39d99d"
                    style={{
                      fontSize: ".8rem",
                    }}
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

export default Content;
