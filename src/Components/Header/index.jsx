import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/index.js";
import "./style.scss";
import logo from "../../Assets/img/logo.png";

import Search from "../Search";
import ButtonCustom from "../ButtonCustom";
import Modal from "../Modal";
import MenuCustom from "../MenuCustom";

import { BiHomeAlt } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { RiProfileLine } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import { CiLogout } from "react-icons/ci";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";

import avatar_default from "../../Assets/img/avatar_default.jpg";
import { AuthUserUseContext } from "../../Context/AuthUser.js";
import ChooseTheme from "./ChooseTheme.jsx";
import { AppStoreUseContext } from "../../Context/AppStore.js";
import { UseGlobalsStylesContext } from "../../GlobalStyle/index.jsx";

const Header = () => {
  const history = useNavigate();
  const { user, setUser } = AuthUserUseContext();
  const { theme, setTheme } = UseGlobalsStylesContext();
  const [modalMenu, setModalMenu] = useState(false);
  const [menuItems, setMenuItems] = useState([
    {
      name: "Profile",
      icon: (
        <RiProfileLine style={{ fontSize: "1.5rem", marginRight: "1rem" }} />
      ),
      handleClick: () => history("/profile"),
    },

    {
      name: "My Posts",
      icon: (
        <ImNewspaper
          style={{ fontSize: "1.5rem", marginRight: "1rem" }}
        ></ImNewspaper>
      ),
      handleClick: () => {},
    },
    {
      name: "Create Your Group",
      icon: <MdGroups2 style={{ fontSize: "1.5rem", marginRight: "1rem" }} />,
      handleClick: () => history("/me/create-new-group"),
    },
    {
      name: "Settings",
      icon: (
        <IoSettingsOutline
          style={{ fontSize: "1.5rem", marginRight: "1rem" }}
        />
      ),
      handleClick: () => history("/setting"),
    },
    {
      name: "Log Out",
      icon: <CiLogout style={{ fontSize: "1.5rem", marginRight: "1rem" }} />,
      handleClick: () => {
        sessionStorage.clear();
        setUser(null);
        auth.signOut().then(
          function () {
            history("/sign-to-website");
            console.log("Signed Out");
          },
          function (error) {
            console.error("Sign Out Error", error);
          }
        );
      },
    },
  ]);

  return (
    <>
      <div
        className="wrapper-header w-100 "
        style={{
          backgroundColor: !theme ? "#1b2730" : "#ffffff",
          borderBottom: "1px solid rgba(0,0, 0, .2)",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 d-flex justify-content-start align-items-center ">
              <img
                src={logo}
                style={{
                  width: "14rem",
                }}
                onClick={() => history("/")}
              ></img>
              <Search theme={theme} />
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center ">
              <ButtonCustom
                backgroundColor={!theme ? "#fff" : "#e4e6e8"}
                color="#000"
                handleClick={() => history("/")}
                iconLeft={
                  <BiHomeAlt
                    style={{
                      fontSize: "1.5rem",
                      // marginRight: ".5rem",
                      color: "#19A7CE",
                    }}
                  />
                }
                width="unset"
                height="2rem"
                style={{
                  fontWeight: 600,
                  marginRight: "1rem",
                }}
                name="Home"
              />
              <ButtonCustom
                backgroundColor={!theme ? "#fff" : "#e4e6e8"}
                color="#000"
                handleClick={() => history("/chat")}
                iconLeft={
                  <FaFacebookMessenger
                    style={{
                      fontSize: "1.5rem",
                      // marginRight: ".5rem",
                      color: "#19A7CE",
                    }}
                  />
                }
                width="unset"
                height="2rem"
                style={{
                  fontWeight: 600,
                  marginRight: "1rem",
                }}
                name=""
              />
              <div className="position-relative ">
                <BsBellFill
                  style={{
                    fontSize: "2rem",
                    color: !theme ? "#fff" : "#000",
                  }}
                ></BsBellFill>
                <div
                  className="position-absolute rounded-circle center"
                  style={{
                    top: "0rem",
                    right: "0rem",
                    width: "1rem",
                    height: "1rem",
                    background: "#24a1ee",
                  }}
                >
                  1
                </div>
              </div>
              <ChooseTheme setTheme={setTheme} theme={theme} />
              <div
                style={{
                  width: "1px",
                  height: "60%",
                  background: "#ccc",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
              ></div>
              {/* user === true */}
              {user && (
                <>
                  <MenuCustom
                    menuItems={menuItems}
                    style={{
                      backgroundColor: !theme ? "#1b2730" : "#fff",
                      color: !theme ? "#fff" : "#000",
                    }}
                  >
                    <ButtonCustom
                      backgroundColor={
                        !theme ? "rgba(255, 255, 255, .1)" : "#e4e6e8"
                      }
                      iconLeft={
                        <img
                          src={
                            user.photoURL === ""
                              ? avatar_default
                              : user.photoURL
                          }
                          style={{
                            fontSize: "1.5rem",
                            marginRight: ".5rem",
                            width: "1.5rem",
                            height: "1.5rem",
                            color: "#19A7CE",
                            borderRadius: "50%",
                          }}
                        />
                      }
                      iconRight={
                        <IoMdArrowDropdown
                          style={{
                            fontSize: "1.5rem",
                          }}
                        />
                      }
                      width="unset"
                      height="2.3rem"
                      color={!theme ? "#fff" : "#000"}
                      style={{
                        fontWeight: 600,
                        marginRight: "1rem",
                        minWidth: "120px",
                      }}
                      name={user ? user.displayName : "default"}
                    />
                  </MenuCustom>
                  <CgMenuGridO
                    className="icon-menu"
                    style={{
                      fontSize: "2rem",
                      marginLeft: ".5rem",
                    }}
                    onClick={() => setModalMenu(!modalMenu)}
                  />
                </>
              )}
              {/* user === false */}
              {!user && (
                <Link to="/sign-to-website">
                  <ButtonCustom
                    backgroundColor="#027aff"
                    width="unset"
                    height="2rem"
                    style={{
                      fontWeight: 600,
                      marginRight: "1rem",
                      minWidth: "120px",
                    }}
                    name="user"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
