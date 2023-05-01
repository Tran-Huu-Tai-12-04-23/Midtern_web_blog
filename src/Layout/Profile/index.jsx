import { useEffect, useRef, useState } from "react";
import { AuthUserUseContext } from "../../Context/AuthUser";
import { AppStoreUseContext } from "../../Context/AppStore";
import Header from "../../Components/Header";
import defaultBackground from "../../Assets/img/backgroundgroup.png";
import { MdOutlinePhotoCamera, MdOutlineAddAPhoto } from "react-icons/md";
import ButtonCustom from "../../Components/ButtonCustom";

import { SlUserFollowing } from "react-icons/sl";
import { MdHomeRepairService } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { IoImagesOutline } from "react-icons/io5";
import ListPost from "./ListPost";
import { UseGlobalsStylesContext } from "../../GlobalStyle";

function Profile() {
  const { user } = AuthUserUseContext();
  const { userSelectShowProfile } = AppStoreUseContext();
  const { friends } = AppStoreUseContext();
  const [avatarPhoto, setAvatarPhoto] = useState(null);
  const inputAvatar = useRef(null);
  const avatar = useRef(null);
  const backgroundInput = useRef(null);
  const backgroundProfile = useRef(null);
  const { theme } = UseGlobalsStylesContext();

  function handleChangeAvatar() {
    if (inputAvatar) {
      inputAvatar.current.click();
    }
  }

  useEffect(() => {
    if (avatarPhoto) {
      avatar.current.src = URL.createObjectURL(avatarPhoto);
    }
  }, [avatarPhoto]);

  function loadFriends() {
    return friends.map((friend) => {
      if (friend?.id !== userSelectShowProfile?.id) {
        return (
          <div
            key={friend.id}
            className="col-3 hover-bg  flex-column  br-primary mt-2 p-2"
            style={{
              height: "8rem",
            }}
          >
            <img
              src={friend?.photoURL}
              alt=""
              className="br-primary "
              style={{
                marginRight: ".5rem",
                marginBottom: ".5rem",
                width: "5rem",
              }}
            />
            <span style={{ fontSize: ".8rem" }} className="">
              {friend?.displayName}
            </span>
          </div>
        );
      }
    });
  }
  function changeBackground(e) {
    let url = URL.createObjectURL(e.target.files[0]);
    if (backgroundProfile) {
      backgroundProfile.current.src = url;
    }
    e.target.files = null;
  }
  return (
    <div
      className="bg-main"
      style={{
        minHeight: "100vh",
      }}
    >
      <Header />
      <div
        className="container"
        style={{
          paddingTop: "6rem",
        }}
      >
        <div className="row">
          <div className="col-12 position-relative">
            <div
              className="p-4 br-primary"
              style={{
                width: " 100%",
                background: "rgba(0,0,0,0.1)",
              }}
            >
              <img
                style={{
                  height: "20rem",
                  width: "100%",
                  margin: ".5rem",
                  objectFit: "contain",
                }}
                ref={backgroundProfile}
                src={defaultBackground}
                className="w-100"
                alt=""
              />
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={backgroundInput}
              onChange={changeBackground}
            />
            <ButtonCustom
              name="Another background photo"
              backgroundColor="rgba(0,0,0, 0)"
              style={{
                padding: "2rem",
                position: "absolute",
                right: "0",
                bottom: 0,
                margin: "1rem",
                color: !theme ? "white" : "black",
              }}
              handleClick={() => backgroundInput?.current?.click()}
              iconLeft={
                <MdOutlineAddAPhoto
                  style={{
                    fontSize: "2rem",
                    marginRight: ".5rem",
                    color: !theme ? "white" : "black",
                  }}
                />
              }
            />
            <div
              className="d-flex justify-content-center align-items-center position-absolute"
              style={{
                border: "1px solid #4f84eb",
                width: "6.8rem",
                height: "6.8rem",
                borderRadius: "50%",
                bottom: "-3.4rem",
                left: "3.4rem",
              }}
            >
              <img
                ref={avatar}
                src={
                  userSelectShowProfile
                    ? userSelectShowProfile.photoURL
                    : user?.photoURL
                }
                className=""
                style={{
                  width: "6rem",
                  height: "6rem",
                  borderRadius: "50%",
                }}
              ></img>
              <MdOutlinePhotoCamera
                onClick={handleChangeAvatar}
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: "-1rem",
                  zIndex: "2",
                  fontSize: "2rem",
                  color: !theme ? "white" : "black",
                  cursor: "pointer",
                }}
              />
              <input
                type="file"
                ref={inputAvatar}
                className="hidden"
                onChange={(e) => setAvatarPhoto(e.target.files[0])}
              ></input>
            </div>
          </div>
          <div
            className="w-100 d-flex justify-content-between align-items-center mt-5"
            style={{
              paddingTop: "2rem",
            }}
          >
            <div className="start">
              <h1>
                {userSelectShowProfile
                  ? userSelectShowProfile.displayName
                  : user?.displayName}
              </h1>
              <span
                className="cl-second"
                style={{
                  fontSize: ".8rem",
                  marginLeft: "2rem",
                }}
              >
                275 friends
              </span>
            </div>
            <div className="end">
              <ButtonCustom
                name="Add new post"
                backgroundColor="transparent"
                style={{
                  color: !theme ? "white" : "black",
                  marginLeft: "1rem",
                }}
              />
              <ButtonCustom name="Edit profile" backgroundColor="#55a8da" />
            </div>
          </div>
          <div
            className="col-12 mt-5 "
            style={{
              borderTop: "1px solid #55a8da",
            }}
          >
            <div className="container-fluid ">
              <div className="row">
                <div
                  className="col-4 pt-4"
                  style={{
                    borderRight: "1px solid #55a8da",
                  }}
                >
                  <h1 className=" pb-1">About</h1>
                  <a
                    style={{
                      lineHeight: "1.5rem",
                    }}
                    href="https://www.facebook.com/profile.php?id=100037828690010"
                    target="_blank"
                  >
                    https://www.facebook.com/profile.php?id=100037828690010
                  </a>
                  <div className="start mt-4" style={{}}>
                    <MdHomeRepairService
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "1rem",
                      }}
                    />
                    <span>Qui Nhon</span>
                  </div>
                  <div className="start mt-4" style={{}}>
                    <FaUniversity
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "1rem",
                      }}
                    />
                    <span>TDTU University</span>
                  </div>
                  <div className="start mt-4" style={{}}>
                    <SlUserFollowing
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "1rem",
                      }}
                    />
                    <span>200 followers</span>
                  </div>
                  <div className="w-100">
                    <div className="container">
                      <div className="row mt-4 g-4 pb-4">
                        <div className="col-12">
                          <div
                            className="start pb-2"
                            style={{
                              borderBottom: "1px solid #55a8da",
                            }}
                          >
                            <IoImagesOutline
                              style={{
                                marginRight: ".5rem",
                                fontSize: "1.5rem",
                              }}
                            />
                            <h1>Your images</h1>
                          </div>
                        </div>
                        <img
                          className="col-6"
                          src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/323373566_904098810775310_5610217736528980475_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=RE4GL1XBUaAAX_v4QHI&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfDcrHe1R4bCntwLoGGnVKLZlJMSkm-rn-bDXuVmgBkWeg&oe=644FDF10"
                        ></img>
                        <img
                          className="col-6"
                          src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/323373566_904098810775310_5610217736528980475_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=RE4GL1XBUaAAX_v4QHI&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfDcrHe1R4bCntwLoGGnVKLZlJMSkm-rn-bDXuVmgBkWeg&oe=644FDF10"
                        ></img>
                        <img
                          className="col-6"
                          src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/323373566_904098810775310_5610217736528980475_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=RE4GL1XBUaAAX_v4QHI&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfDcrHe1R4bCntwLoGGnVKLZlJMSkm-rn-bDXuVmgBkWeg&oe=644FDF10"
                        ></img>
                        <img
                          className="col-6"
                          src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/323373566_904098810775310_5610217736528980475_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=RE4GL1XBUaAAX_v4QHI&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfDcrHe1R4bCntwLoGGnVKLZlJMSkm-rn-bDXuVmgBkWeg&oe=644FDF10"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    <h1
                      className="w-100 pb-2"
                      style={{
                        borderBottom: "1px solid #55a8da",
                      }}
                    >
                      Friends
                    </h1>
                    <div className="container">
                      <div
                        className="row g-0 "
                        style={{
                          maxHeight: "25rem",
                          overflow: "auto",
                        }}
                      >
                        {friends && loadFriends()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-8 pb-5">
                  <ListPost userSelectShowProfile={userSelectShowProfile} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
