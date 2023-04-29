import { useState } from "react";
import { v4 as uuid } from "uuid";

import ButtonCustom from "../ButtonCustom";
import Input from "../Input";

import { IoHeartSharp } from "react-icons/io5";
import { MdModeComment } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import { formatDate } from "../../util/index";
import { AppStoreUseContext } from "../../Context/AppStore";
import Comment from "../Comment";
import { comments } from "./data";
import { AuthUserUseContext } from "../../Context/AuthUser";

const Information = ({ data }) => {
  const { user } = AuthUserUseContext();
  const [comment, setComment] = useState();
  const [listComment, setListComment] = useState(comments);
  const { setNotifications } = AppStoreUseContext();
  const [love, setLove] = useState(false);
  const [showFullComment, setShowFullComment] = useState(false);
  const [isComment, setIsComment] = useState(false);

  function handleAddComment() {
    if (comment !== "") {
      setListComment((prev) => {
        return [
          ...prev,
          {
            name: user?.displayName,
            text: comment,
            id: uuid(),
            avatar: user?.photoURL,
            createdAt: new Date().getTime(),
          },
        ];
      });
      setComment("");
    } else {
      setNotifications((prev) => {
        return [
          ...prev,
          {
            id: uuid(),
            text: "Please enter you comment ",
            type: "warn",
          },
        ];
      });
    }
  }

  const loadComment = () => {
    return listComment.map((comment) => {
      return (
        <div key={comment.id}>
          <Comment data={comment} />
        </div>
      );
    });
  };
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
            {formatDate(data?.createdAt?.seconds)}
          </span>
        </div>
      </div>
      <div
        className="w-100 mt-4 "
        style={{
          padding: "0 0 0 2rem",
        }}
      >
        <p
          style={{
            lineHeight: "1.5rem",
          }}
        >
          {data.content}
        </p>
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
          handleClick={() => setLove(!love)}
          iconLeft={
            <IoHeartSharp
              style={{
                fontSize: "1.3rem",
                marginRight: ".5rem",
                color: love ? "#f44336" : "",
              }}
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
          handleClick={handleAddComment}
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
      <div
        className="w-100 d-flex justify-content-between align-items-center mt-4 pt-4"
        style={{}}
      >
        <Input
          variant=""
          value={comment}
          handleChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment"
          css={{
            border: "none",
            borderBottom: "1px solid #4f84eb",
            flex: "1",
          }}
          handleFocus={() => setIsComment(true)}
          handleKeyPressEnter={handleAddComment}
        />
        <div
          className="end"
          style={{
            display: isComment ? "flex" : "none",
          }}
        >
          <ButtonCustom
            name="Cancel"
            backgroundColor="transparent"
            style={{
              padding: "1.5rem 1rem",
              marginRight: ".5rem",
              marginLeft: ".5rem",
            }}
            handleClick={() => setIsComment(false)}
          />
          <ButtonCustom
            name="Comment"
            backgroundColor="#4f84eb"
            style={{
              padding: "1.5rem 1rem",
              marginRight: ".5rem",
            }}
            handleClick={handleAddComment}
          />
        </div>
      </div>
      {listComment.length > 0 && (
        <div
          className="d-flex justify-content-start align-item-start flex-column p-2 br-primary  br-primary mt-5"
          style={{
            borderTop: "1px solid #4f84eb",
          }}
        >
          {loadComment()}
        </div>
      )}
    </div>
  );
};
export default Information;
