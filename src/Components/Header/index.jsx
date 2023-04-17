import { useState } from "react";
import "./style.scss";
import logo from "../../Assets/img/logo.png";

import Search from "../Search";
import ButtonCustom from "../ButtonCustom";
import Modal from "../Modal";

import { BiHomeAlt } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  const [modalMenu, setModalMenu] = useState(false);
  console.log(modalMenu);
  return (
    <>
      <div className="wrapper-header w-100   pt-3" style={{}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 d-flex justify-content-start align-items-center ">
              <img
                src={logo}
                style={{
                  width: "14rem",
                }}
              ></img>
              <Search />
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center ">
              <ButtonCustom
                backgroundColor="#fff"
                color="#000"
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
              <div className="position-relative ">
                <BsBellFill
                  style={{ fontSize: "2rem", color: "#fff" }}
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
              <div
                style={{
                  width: "1px",
                  height: "60%",
                  background: "#ccc",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
              ></div>
              <ButtonCustom
                backgroundColor="rgba(255, 255, 255, .1)"
                color="#fff"
                iconLeft={
                  <img
                    src="https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg"
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
                height="2rem"
                style={{
                  fontWeight: 600,
                  marginRight: "1rem",
                  minWidth: "120px",
                }}
                name="Huu Tai"
              />
              <CgMenuGridO
                className="icon-menu"
                style={{
                  fontSize: "2rem",
                  marginLeft: ".5rem",
                }}
                onClick={() => setModalMenu(!modalMenu)}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        style={{
          display: modalMenu ? "flex" : "none",
        }}
        setActive={setModalMenu}
      >
        Hello
      </Modal>
    </>
  );
};

export default Header;
