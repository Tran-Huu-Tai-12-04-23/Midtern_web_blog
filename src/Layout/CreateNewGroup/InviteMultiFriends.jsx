import React, { useEffect, useState } from "react";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/system";
import { IoIosClose } from "react-icons/io";

const names = [
  "Humaira Sims",
  "Santiago Solis",
  "Dawid Floyd",
  "Mateo Barlow",
  "Samia Navarro",
  "Kaden Fields",
  "Genevieve Watkins",
  "Mariah Hickman",
  "Rocco Richardson",
  "Harris Glenn",
];

function InviteMultiFriends({ setMembers, color = "#fff" }) {
  const [selectedNames, setSelectedNames] = useState([]);

  useEffect(() => {
    setMembers(selectedNames);
  }, [selectedNames]);

  const MyFormControl = styled(FormControl)({
    color: color,
    height: "max-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    width: "100%",

    "& svg": {
      color: color,
    },
    "& label": {
      color: color,
      fontSize: "1rem",
    },
    "& select": {
      width: "100%",
      border: "1px solid #fff",
    },
    "& div": {
      width: "100%",
      fontSize: "1rem",
      color: color,
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid rgba(79, 132, 235, 1)",
    },
    "& div:hover .MuiOutlinedInput-notchedOutline": {
      border: "1px solid rgba(79, 132, 235, 1)",
    },
  });
  return (
    <MyFormControl>
      <Select
        multiple
        value={selectedNames}
        onChange={(e) => setSelectedNames(e.target.value)}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <div
              className="d-flex justify-content-between align-items-center p-2 "
              style={{
                color: color,
                borderRadius: ".5rem",
                background: "rgba(51, 152, 219, .1)",
              }}
            >
              <img
                className="avatar"
                style={{
                  marginRight: ".5rem",
                }}
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/334099210_201585792452402_2473078645089024612_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yah6BebQlKIAX_9NfZj&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCBoDbk64DKcMIwPf05--_wWRII8uAFuQr06tTCSE4Auw&oe=6452ADBE"
              ></img>
              <div className="d-flex justify-content-between align-items-center">
                <span>{name}</span>
                <IoIosClose style={{ color: color, fontSize: "1.5rem" }} />
              </div>
            </div>
          </MenuItem>
        ))}
      </Select>
    </MyFormControl>
  );
}

export default InviteMultiFriends;
