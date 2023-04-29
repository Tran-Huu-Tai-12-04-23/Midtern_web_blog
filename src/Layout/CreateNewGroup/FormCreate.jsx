import { useState } from "react";
import Input from "../../Components/Input";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { MdPublic, MdPublicOff } from "react-icons/md";

import InviteMultiFriends from "./InviteMultiFriends";
import ButtonCustom from "../../Components/ButtonCustom";

function FormCreate({
  groupName,
  setGroupName,
  mode,
  setMode,
  members,
  setMembers,
}) {
  const MySelect = styled(Select)({
    color: "#fff",
    fontSize: "1rem",
    borderRadius: ".5rem",
  });

  const MyFormControl = styled(FormControl)({
    color: "#fff",
    fontSize: "1.4rem",
    border: "1px solid #4f84eb ",
    borderRadius: ".5rem",
    "& svg ": {
      color: "#fff",
    },
  });

  const MyBox = styled(Box)({
    color: "#fff",
    borderRadius: ".5rem",
    "& label": {
      color: "#fff",
    },
  });
  const MyMenuItem = styled(MenuItem)({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  });

  return (
    <div
      className="p-4"
      style={{
        minHeight: "calc( 100vh - 4rem )",
        backgroundColor: "#1b2730",
      }}
    >
      <h1
        className="w-100 p-2"
        style={{
          borderBottom: "1px solid #4f84eb",
        }}
      >
        Group - Create
      </h1>
      <div className="w-100 mt-4 start p-2">
        <img
          src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/334099210_201585792452402_2473078645089024612_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yah6BebQlKIAX_9NfZj&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCBoDbk64DKcMIwPf05--_wWRII8uAFuQr06tTCSE4Auw&oe=6452ADBE"
          className="avatar"
          style={{
            marginRight: ".5rem",
          }}
        ></img>
        <div className="w-100 d-flex justify-content-center align-items-start flex-column ml-2">
          <h1>Tran huu Tai</h1>
          <span
            className="cl-second"
            style={{
              fontSize: ".8rem",
              marginTop: ".5rem",
            }}
          >
            Admin page
          </span>
        </div>
      </div>
      <h1 className="w-100 mt-5 ">Name group</h1>
      <Input
        handleChange={(e) => setGroupName(e.target.value)}
        value={groupName}
        variant=""
        placeholder="Enter name group"
        css={{
          border: "none",
          borderBottom: "1px solid #4f84eb",
        }}
      />
      <h1 className="w-100 mt-4 mb-4">Mode</h1>
      <MyBox>
        <MyFormControl fullWidth>
          <MySelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mode}
            // label="Mode"
            MenuProps={{
              sx: {},
            }}
          >
            <MyMenuItem value="public" onClick={(e) => setMode("public")}>
              <MdPublic />
              <span style={{ marginLeft: ".5rem" }}>Public</span>
            </MyMenuItem>
            <MyMenuItem value="private" onClick={(e) => setMode("private")}>
              <MdPublicOff />
              <span style={{ marginLeft: ".5rem" }}>Private</span>
            </MyMenuItem>
          </MySelect>
        </MyFormControl>
      </MyBox>
      <h1 className="w-100 mt-4 mb-4">Invite friends</h1>
      <InviteMultiFriends setMembers={setMembers} />

      <ButtonCustom
        name="Create"
        height="3rem"
        backgroundColor="rgba(79, 132, 235, 1)"
        style={{
          padding: "0 2rem",
          marginTop: "10%",
        }}
      />
    </div>
  );
}

export default FormCreate;
