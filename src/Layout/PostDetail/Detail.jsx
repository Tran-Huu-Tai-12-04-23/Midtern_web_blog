import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CarouselComponent from "../../Components/CarouselComponent";
import { v4 as uuid } from "uuid";
import {
  MdOutlineZoomOutMap,
  MdOutlineZoomInMap,
  MdModeComment,
} from "react-icons/md";
import { IoHeartSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { RiShareForwardFill } from "react-icons/ri";

import ButtonCustom from "../../Components/ButtonCustom";
import Input from "../../Components/Input";
import Comment from "../../Components/Comment";
import { AppStoreUseContext } from "../../Context/AppStore";
import { AuthUserUseContext } from "../../Context/AuthUser";
import { UseGlobalsStylesContext } from "../../GlobalStyle";

import { formatDate } from "../../util/index";

function Detail({}) {
  const { user } = AuthUserUseContext();
  const { theme } = UseGlobalsStylesContext();
  const { setNotifications, postSelectShowDetail, setPostSelectShowDetail } =
    AppStoreUseContext();
  const history = useNavigate();
  const videoRef = useRef(null);
  const [zoom, setZoom] = useState(false);
  const [love, setLove] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [comment, setComment] = useState("");
  const [listComment, setListComment] = useState([
    {
      id: uuid(),
      name: "Duong hai dang",
      text: "Hello anh ban",
      createdAt: 123213123213,
      avatar:
        "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/323024105_923579831991876_8843654213659125002_n.jpg?stp=dst-jpg_p148x148&_nc_cat=100&ccb=1-7&_nc_sid=aa3c98&_nc_ohc=eiQR1k2Mu_8AX_Sqisi&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBQZV5g0aPaX-3L8ZdEdBtjUD_qKTwxK_-0F0ZrYOp6_A&oe=6450CEF7",
    },
  ]);

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
          <Comment cardUser={false} data={comment} />
        </div>
      );
    });
  };

  useEffect(() => {
    videoRef?.current?.play();
  }, []);

  return (
    <div
      className="wrapper-modal position-fixed"
      style={{
        background: !theme
          ? "var(--bg-second-dark-theme)"
          : "var(--bg-second-light-theme",
        zIndex: "4",
        top: "0",
        right: 0,
        bottom: "0",
        left: 0,
      }}
    >
      <div
        className="container-fluid"
        style={{
          paddingTop: "4rem",
          height: "100vh",
        }}
      >
        <div className="row h-100">
          <div
            className={`${
              zoom ? "col-12" : "col-8"
            } p-4 br-primary position-relative`}
            style={{
              transition: ".4s",
              zIndex: "30",
            }}
          >
            <IoMdClose
              className="hover-close"
              style={{
                position: "absolute",
                top: ".5rem",
                left: "0rem",
                zIndex: "30",
                fontSize: "2rem",
              }}
              onClick={(e) => {
                setPostSelectShowDetail(null);
                history("/");
              }}
            ></IoMdClose>
            <MdOutlineZoomOutMap
              className="hover-active"
              style={{
                fontSize: "2rem",
                position: "absolute",
                top: ".5rem",
                zIndex: "30",
                right: "1rem",
                display: !zoom ? "block" : "none",
              }}
              onClick={(e) => setZoom(true)}
            />
            <MdOutlineZoomInMap
              className="hover-active"
              style={{
                fontSize: "2rem",
                zIndex: "30",
                position: "absolute",
                top: ".5rem",
                right: "1rem",
                display: zoom ? "block" : "none",
              }}
              onClick={(e) => setZoom(false)}
            />
            {postSelectShowDetail?.videoUrl && (
              <div
                className="center "
                style={{
                  padding: "1rem",
                  borderRadius: ".5rem",
                  height: "calc(100vh - 10rem)",
                }}
              >
                <video
                  ref={videoRef}
                  src={postSelectShowDetail?.videoUrl}
                  controls
                  width="100%"
                  style={{
                    borderRadius: "1rem",
                    marginTop: "2rem",
                    height: "90%",
                  }}
                />
              </div>
            )}
            {postSelectShowDetail?.photoUrl &&
              Array.isArray(postSelectShowDetail?.photoUrl) && (
                <CarouselComponent
                  height="calc(100vh - 8rem)"
                  data={postSelectShowDetail?.photoUrl}
                />
              )}
            {postSelectShowDetail?.photoUrl &&
              !Array.isArray(postSelectShowDetail?.photoUrl) && (
                <div
                  className="center "
                  style={{
                    padding: "1rem",
                    borderRadius: ".5rem",
                    height: "calc(100vh - 8rem)",
                  }}
                >
                  <img
                    className="br-primary"
                    src={postSelectShowDetail?.photoUrl}
                    style={{
                      objectFit: "contain",
                      height: "90%",
                    }}
                  ></img>
                </div>
              )}
          </div>
          <div
            className={`${
              zoom ? "d-none" : "d-block"
            } col-4 p-4  position-relative bg-main h-100`}
            style={{
              transition: ".4s",
            }}
          >
            <div className="w-100 start">
              <img
                src={postSelectShowDetail?.avatarUrl}
                className="avatar"
                style={{
                  marginRight: "1rem",
                }}
              ></img>
              <div className="column">
                <h5>{postSelectShowDetail?.displayName}</h5>
                <span
                  className=""
                  style={{
                    fontSize: ".8rem",
                    color: !theme ? "#ccc" : "#000",
                  }}
                >
                  {formatDate(postSelectShowDetail?.createdAt?.seconds)}
                </span>
              </div>
            </div>
            <div
              className="w-100 d-flex justify-content-between mt-5 pt-4 pb-4 align-items-center"
              style={{
                borderTop: "1px solid #3398db",
                borderBottom: "1px solid #3398db",
              }}
            >
              <div className="start">
                3k
                <IoHeartSharp
                  style={{
                    fontSize: "1.3rem",
                    marginRight: ".5rem",
                    color: "#f44336",
                  }}
                />
              </div>
              <div className="end">
                <ButtonCustom
                  name="Love"
                  handleClick={() => setLove(!love)}
                  backgroundColor={!theme ? "#20394c" : "rgba(0,0,0, .1)"}
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
                  width="unset"
                  style={{
                    fontSize: ".8rem",
                    color: "#ccc",
                    justifyContent: "start",
                    fontWeight: "bold",
                    marginRight: "1rem",
                    color: !theme ? "#fff" : "#000",
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
                  backgroundColor={!theme ? "#20394c" : "rgba(0,0,0, .1)"}
                  width="unset"
                  style={{
                    fontSize: ".8rem",
                    color: "#ccc",
                    justifyContent: "start",
                    fontWeight: "bold",
                    marginRight: "1rem",
                    color: !theme ? "#fff" : "#000",
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
                  backgroundColor={!theme ? "#20394c" : "rgba(0,0,0, .1)"}
                  width="unset"
                  style={{
                    fontSize: ".8rem",
                    color: "#ccc",
                    justifyContent: "start",
                    fontWeight: "bold",
                    marginRight: "1rem",
                    color: !theme ? "#fff" : "#000",
                  }}
                />
              </div>
            </div>

            <div className="d-flex justify-content-end align-item-start flex-column h-75 overflow-hidden">
              {listComment.length > 0 && (
                <div
                  className="d-flex justify-content-start align-item-start flex-column p-2  h-100 custom-scroll "
                  style={{
                    overflow: "auto",
                    borderBottom: "1px solid #4f84eb",
                  }}
                >
                  {loadComment()}
                </div>
              )}
              <div
                className="w-100 justify-content-between align-items-center mt-4 pt-4"
                style={{
                  display: "flex",
                }}
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
                      padding: "1rem",
                      marginRight: ".5rem",
                      marginLeft: ".5rem",
                      color: !theme ? "#fff" : "#000",
                    }}
                    handleClick={() => setIsComment(false)}
                  />
                  <ButtonCustom
                    name="Comment"
                    backgroundColor="#4f84eb"
                    style={{
                      padding: "1rem 1rem",
                      marginRight: ".5rem",
                    }}
                    handleClick={handleAddComment}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
