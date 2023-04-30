import backgroundgroup from "../../Assets/img/backgroundgroup.png";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import CreateNewFeed from "../../Components/Content/CreateNewFeed";

function PreviewCreate({ groupName, mode, members, theme }) {
  return (
    <div
      className="center flex-column align-items-start br-primary m-4 hidden-scroll p-4"
      style={{
        maxHeight: "calc( 100vh - 8rem)",
        border: "1px solid rgba(79, 132, 235, 1)",
        background: !theme
          ? "var(--bg-second-dark-theme)"
          : "var(--bg-second-light-theme",
        overflow: "auto",
      }}
    >
      <img
        src={backgroundgroup}
        alt=""
        style={{
          width: "100%",
          maxHeight: "30rem",
          marginBottom: "1rem",
          marginTop: "28rem",
          borderRadius: ".5rem",
        }}
      />
      <div
        className="start align-items-start p-4 flex-column w-100"
        style={{
          borderBottom: "1px solid rgba(79, 132, 235, 1)",
        }}
      >
        <h1
          className="bold"
          style={{
            fontSize: "1.4rem",
            marginBottom: "1rem",
          }}
        >
          {groupName ? groupName : "Group name"}
        </h1>
        <div className="start w-100">
          <h5
            className=""
            style={{
              marginRight: ".5rem",
            }}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)} group
          </h5>
          <span
            className=""
            style={{
              color: !theme ? "#ccc" : "#000",
            }}
          >
            {members.length} members
          </span>
        </div>
      </div>
      <div className="w-100 start mt-4">
        <ul className="start">
          <li
            className="hover-bg br-primary active-navbar"
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
            }}
          >
            About
          </li>
          <li
            className="hover-bg br-primary"
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
            }}
          >
            Members
          </li>
          <li
            className="hover-bg br-primary"
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
            }}
          >
            Event
          </li>
        </ul>
      </div>
      <div className="container-fluid mt-5 mb-5">
        <div className="row">
          <div
            className="col-8 center br-primary p-2"
            style={{
              border: "1px solid rgba(79, 132, 235, 1)",
            }}
          >
            <CreateNewFeed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewCreate;
