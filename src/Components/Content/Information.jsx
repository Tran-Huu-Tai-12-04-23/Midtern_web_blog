import ButtonCustom from "../ButtonCustom";

import { IoHeartSharp } from "react-icons/io5";
import { MdModeComment } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";

const Information = () => {
  return (
    <div
      className="w-100 p-4 bg-second mt-4 br-primary "
      style={{
        cursor: "pointer",
      }}
    >
      <div className="w-100 d-flex justify-content-start align-items-center">
        <ButtonCustom name="" width="3rem" backgroundColor="transparent">
          <img
            src="https://www.venuscinema.vn/uploaded/phim/avata.jpg"
            className="avatar "
            style={{}}
          ></img>
        </ButtonCustom>
        <div className="column g-0">
          <label className="">Huu tai</label>
          <span className="cl-second fs-small ">2 minutes ago</span>
        </div>
      </div>
      <div
        className="w-100 mt-4 "
        style={{
          padding: "0 0 0 2rem",
        }}
      >
        <p>Let’s see an age limit ...... </p>
      </div>
      <div
        className="w-100 mt-4 mb-4 br-primary overflow-hidden"
        style={{
          padding: "0 2rem 0 2rem",
        }}
      >
        <img
          className="w-100 br-primary"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a9d98d-327f-4bb2-b173-4298d710e51c/dcv50fg-a1cff708-124a-455d-b440-79712d0466a8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwYTlkOThkLTMyN2YtNGJiMi1iMTczLTQyOThkNzEwZTUxY1wvZGN2NTBmZy1hMWNmZjcwOC0xMjRhLTQ1NWQtYjQ0MC03OTcxMmQwNDY2YTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0trX3wnS0XZas6_aOjfj8ZVZrwa9EjQnWQV6lXKEBJs"
          alt=""
        />
      </div>
      <div
        className="w-100 d-flex justify-content-end align-items-center mb-4 "
        style={{
          paddingRight: "2rem",
        }}
      >
        <IoHeartSharp
          style={{ fontSize: "1.3rem", marginRight: ".5rem", color: "#f44336" }}
        />
        <span>3k love</span>
      </div>
      <div
        className="w-100 d-flex justify-content-end align-items-center"
        style={{
          paddingRight: ".5rem",
        }}
      >
        <ButtonCustom
          name="Love"
          iconLeft={
            <IoHeartSharp
              style={{ fontSize: "1.3rem", marginRight: ".5rem" }}
            />
          }
          height="2rem"
          backgroundColor="#20394c"
          width="unset"
          style={{
            fontSize: ".8rem",
            color: "#ccc",
            justifyContent: "start",
            fontWeight: "bold",
            marginRight: "1rem",
          }}
        />
        <ButtonCustom
          name="Comment"
          iconLeft={
            <MdModeComment
              style={{ fontSize: "1.3rem", marginRight: ".5rem" }}
            />
          }
          height="2rem"
          backgroundColor="#20394c"
          width="unset"
          style={{
            fontSize: ".8rem",
            color: "#ccc",
            justifyContent: "start",
            fontWeight: "bold",
            marginRight: "1rem",
          }}
        />
        <ButtonCustom
          name="Share"
          iconLeft={
            <RiShareForwardFill
              style={{ fontSize: "1.3rem", marginRight: ".5rem" }}
            />
          }
          height="2rem"
          backgroundColor="#20394c"
          width="unset"
          style={{
            fontSize: ".8rem",
            color: "#ccc",
            justifyContent: "start",
            fontWeight: "bold",
            marginRight: "1rem",
          }}
        />
      </div>
    </div>
  );
};
export default Information;
