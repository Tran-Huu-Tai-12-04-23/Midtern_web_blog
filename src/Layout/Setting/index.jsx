import { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthUserUseContext } from "../../Context/AuthUser";
import { AppStoreUseContext } from "../../Context/AppStore";

import SideBar from "./SideBar";
import Content from "./Content";
import Header from "../../Components/Header";
import { UseGlobalsStylesContext } from "../../GlobalStyle";

const Setting = ({}) => {
  const { user, setUser } = AuthUserUseContext();
  const { theme } = UseGlobalsStylesContext();

  return (
    <div
      className=" bg-main container-fluid "
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        paddingTop: "4rem",
        background: !theme
          ? "var(--bg-second-dark-theme)"
          : "var(--bg-second-light-theme",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div className="col-4">
            <SideBar theme={theme} />
          </div>
          <div className="col-8">
            <Content theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Setting);
