import ButtonCustom from "../ButtonCustom";

import { IoHeartSharp } from "react-icons/io5";
import { MdModeComment } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import { formatDate } from "../../util/index";

const Information = ({ data }) => {
  return (
    <div
      className="w-100 p-4 bg-second mt-4 br-primary "
      style={{
        cursor: "pointer",
      }}
    >
      <div className="w-100 d-flex justify-content-start align-items-center">
        <ButtonCustom name="" width="3rem" backgroundColor="transparent">
          <img src={data?.avatarUrl} className="avatar " style={{}}></img>
        </ButtonCustom>
        <div className="column g-0">
          <label className="">{data.displayName}</label>
          <span className="cl-second fs-small ">
            {formatDate(data.createdAt)}
          </span>
        </div>
      </div>
      <div
        className="w-100 mt-4 "
        style={{
          padding: "0 0 0 2rem",
        }}
      >
        <p>{data.content}</p>
      </div>
      <div
        className="w-100 mt-4 mb-4 br-primary overflow-hidden"
        style={{
          padding: "0 2rem 0 2rem",
        }}
      >
        {data.photoUrl && (
          <img className="w-100 br-primary" src={data.photoUrl} alt="" />
        )}
        {data.videoUrl && (
          <video
            src={data.videoUrl}
            controls
            width="100%"
            style={{ borderRadius: "1rem", marginTop: "2rem" }}
          />
        )}
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
