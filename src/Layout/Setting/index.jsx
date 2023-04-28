import { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthUserUseContext } from "../../Context/AuthUser";
import { AppStoreUseContext } from "../../Context/AppStore";

import SideBar from "./SideBar";
import Content from "./Content";
import Header from "../../Components/Header";

const Setting = ({}) => {
  const { user, setUser } = AuthUserUseContext();

  return (
    <div
      className=" bg-main container-fluid "
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        paddingTop: "4rem",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
          <div className="col-4">
            <SideBar />
          </div>
          <div className="col-8">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Setting);
