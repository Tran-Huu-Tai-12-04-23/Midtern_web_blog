import { useState } from "react";
import "./style.scss";
import ButtonCustom from "../ButtonCustom";

import { BiPhotoAlbum } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import ProcessUpload from "../ProcessUpload";
import { AppStoreUseContext } from "../../Context/AppStore";
import { AuthUserUseContext } from "../../Context/AuthUser";

import avatar_default from "../../Assets/img/avatar_default.jpg";
import { UseGlobalsStylesContext } from "../../GlobalStyle";

const CreateNewFeed = ({ handLeShowModalPost = () => {} }) => {
  const { user } = AuthUserUseContext();
  const { theme } = UseGlobalsStylesContext();
  // console.log(user);
  const { processUpload } = AppStoreUseContext();
  return (
    <div
      className="wrapper-CreateNewFeed w-100  br-primary p-4"
      style={{
        maxHeight: "16rem",
        // height: "16rem",
        background: !theme
          ? "var(--bg-second-dark-theme)"
          : "var(--bg-second-light-theme",
      }}
    >
      <div className="w-100 d-flex justify-content-between align-items-center">
        <img
          src={user ? user.photoURL : avatar_default}
          className="avatar "
          style={{
            marginRight: "1rem",
          }}
        ></img>
        <ButtonCustom
          name="What's happening?"
          height="2.5rem"
          style={{
            width: "calc(100% - 3rem)",
            fontSize: ".8rem",
            background: !theme ? "#1f3b56" : "#e4e6e8",
            color: !theme ? "#ccc" : "#000",
            borderRadius: "3rem",
            justifyContent: "start",
            paddingLeft: "1rem",
          }}
          handleClick={(e) => {
            e.stopPropagation();
            handLeShowModalPost();
          }}
        />
      </div>
      <div className="w-100 d-flex justify-content-end align-item-center mt-4">
        <ButtonCustom
          name="Photo"
          iconLeft={
            <BiPhotoAlbum
              style={{ fontSize: "1.3rem", marginRight: ".5rem" }}
            />
          }
          height="2.5rem"
          width="unset"
          backgroundColor="transparent"
          style={{
            fontSize: ".8rem",
            color: !theme ? "#ccc" : "#000",
            justifyContent: "start",
            fontWeight: "bold",
            border: "1px solid #24a1ee",
          }}
        />
        <ButtonCustom
          name="Video"
          iconLeft={
            <BsCameraVideo
              style={{ fontSize: "1.3rem", marginRight: ".5rem" }}
            />
          }
          height="2.5rem"
          width="unset"
          backgroundColor="transparent"
          style={{
            fontSize: ".8rem",
            color: !theme ? "#ccc" : "#000",
            justifyContent: "start",
            fontWeight: "bold",
            border: "1px solid #24a1ee",
            marginLeft: "1rem",
          }}
        />
      </div>
      {processUpload && <ProcessUpload />}
    </div>
  );
};
export default CreateNewFeed;
