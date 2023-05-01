import { useState, memo, useRef, useEffect } from "react";
import { storage } from "../../firebase/index.js";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { addDocument } from "../../firebase/service.js";

import { v4 as uuid } from "uuid";

import { MdClose } from "react-icons/md";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

import ButtonCustom from "../ButtonCustom";
import Input from "../Input";

import { AppStoreUseContext } from "../../Context/AppStore";
import { UseGlobalsStylesContext } from "../../GlobalStyle";

const CreateNews = ({ user, modalPost, setModalPost = () => {} }) => {
  const [mode, setMode] = useState(false);
  const [fileVideo, setFileVideo] = useState(null);
  const [filePhoto, setFilePhoto] = useState(null);
  const [listFilePhoto, setListFilePhoto] = useState([]);
  const [listFilePhotoURL, setListFilePhotoURL] = useState([]);
  const [videoPreview, setVideoPreview] = useState("");
  const [content, setContent] = useState("");
  const { setNotifications, setProcessUpload } = AppStoreUseContext();
  const inputPhoto = useRef(null);
  const { theme } = UseGlobalsStylesContext();

  const handleSelectVideo = (e) => {
    setFileVideo(e.target.files[0]);
    handleVideoChange(e.target.files[0]);
    e.target.value = "";
  };
  const handleSelectPhoto = (e) => {
    setListFilePhoto((prev) => {
      return [...prev, e.target.files[0]];
    });
    let url = URL.createObjectURL(e.target.files[0]);
    setListFilePhotoURL((prev) => {
      return [...prev, url];
    });
    setFilePhoto(e.target.files[0]);
    e.target.value = "";
  };

  function handleVideoChange(fileVideo) {
    if (fileVideo) {
      const url = URL.createObjectURL(fileVideo);
      setVideoPreview(url);
    }
  }

  const post = async () => {
    if (!fileVideo && !listFilePhoto && !setContent) {
      setNotifications((prev) => {
        return [
          ...prev,
          {
            text: "Please enter content",
            id: uuid(),
            type: "err",
          },
        ];
      });
    } else {
      uploadFiles(filePhoto, fileVideo);
    }
  };

  async function uploadFiles(filePhoto, fileVideo) {
    setProcessUpload(true);
    setModalPost(false);
    try {
      console.log(listFilePhoto);
      if (listFilePhoto.length > 1) {
        const listUrlPhoto = await Promise.all(
          listFilePhoto.map(async (photo) => {
            const fileRefPhoto = ref(storage, `images/${photo.name}-${uuid()}`);
            const snapshotPhoto = await uploadBytes(fileRefPhoto, photo);
            const photoUrl = await getDownloadURL(snapshotPhoto.ref);
            return photoUrl;
          })
        );
        addNewPost(content, listUrlPhoto, "", mode);
        setProcessUpload(false);
      } else if (filePhoto && fileVideo) {
        const fileRefPhoto = ref(storage, `images/${filePhoto.name}-${uuid()}`);
        const snapshotPhoto = await uploadBytes(fileRefPhoto, filePhoto);
        const photoUrl = await getDownloadURL(snapshotPhoto.ref);
        const fileRefVideo = ref(storage, `videos/${fileVideo.name}-${uuid()}`);
        const snapshotVideo = await uploadBytes(fileRefVideo, fileVideo);
        const videoUrl = await getDownloadURL(snapshotVideo.ref);
        setProcessUpload(false);
        addNewPost(content, photoUrl, videoUrl, mode);
      } else if (filePhoto) {
        const fileRef = ref(storage, `images/${filePhoto.name}-${uuid()}`);
        const snapshot = await uploadBytes(fileRef, filePhoto);
        const photoUrl = await getDownloadURL(snapshot.ref);
        addNewPost(content, photoUrl, "", mode);
        setProcessUpload(false);
      } else if (fileVideo) {
        const fileRef = ref(storage, `videos/${fileVideo.name}-${uuid()}`);
        const snapshot = await uploadBytes(fileRef, fileVideo);
        const videoUrl = await getDownloadURL(snapshot.ref);
        addNewPost(content, "", videoUrl, mode);
        setProcessUpload(false);
      } else {
        addNewPost(content, "", "", mode);
        setProcessUpload(false);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  }

  async function addNewPost(content, photoUrl, videoUrl, mode) {
    setProcessUpload(true);
    addDocument("posts", {
      content,
      photoUrl,
      videoUrl,
      user_id: user.id,
      displayName: user.displayName,
      avatarUrl: user.photoURL,
      mode: mode,
    });
    setProcessUpload(false);
    clearForm();
    setNotifications((prev) => {
      return [
        ...prev,
        {
          text: "Upload successfully!!",
          type: "success",
          id: uuid(),
        },
      ];
    });
  }

  function clearForm() {
    setContent("");
    setFilePhoto(null);
    setFileVideo(null);
    setVideoPreview(null);
    setListFilePhoto([]);
    setListFilePhotoURL([]);
  }

  function renderPhotoPreview() {
    return listFilePhotoURL.map((photo, index) => (
      <div className="p-2 br-primary" style={{}} key={uuid()}>
        <img
          src={photo ? photo : ""}
          alt=""
          className="w-100 "
          style={{
            borderRadius: "1rem",
            width: "25rem!important",
            objectFit: "contain",
            height: "100%",
            flex: 1,
          }}
        />
      </div>
    ));
  }

  return (
    <div
      className="wrapper-create-news position-fixed"
      style={{
        backgroundColor: "rgba(0,0,0, .3)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: "1000000000000000",
        display: modalPost ? "" : "none",
      }}
      onClick={() => {
        setModalPost(false);
        clearForm();
      }}
    >
      <div
        className="position-absolute  "
        style={{
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -40%)",
          maxWidth: "45rem",
          minWidth: "40rem",
          background: !theme
            ? "var(--bg-second-dark-theme)"
            : "var(--bg-second-light-theme",
          borderRadius: "1rem",
          padding: "1rem",
          boxShadow: "-3px 7px 234px -17px rgba(31,123,230,0.75)",
          animation:
            "showModalTop .4s cubic-bezier(0.57, 1.29, 0.77, 1) forwards",
          display: modalPost ? "block" : "none",
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <MdClose
          className="hover-close position-absolute "
          style={{
            fontSize: "30px",
            top: ".5rem",
            right: ".5rem",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setModalPost(false);
            clearForm();
          }}
        />
        <h1
          className="w-100"
          style={{
            fontSize: "20px",
            textAlign: "center",
            borderBottom: "1px solid #ccc",
            paddingBottom: "1rem",
          }}
        >
          Create new post
        </h1>
        <div className="w-100 ">
          <div className="user start flex-wrap position-relative">
            <img className="avatar" style={{}} src={user?.photoURL} alt="" />
            <div className=" start">
              <h5 className="p-4">{user?.displayName}</h5>
              <HiOutlineLockClosed
                style={{
                  fontSize: "1.5rem",
                  display: !mode ? "none" : "block",
                  marginRight: ".5rem",
                }}
              />
              <HiOutlineLockOpen
                style={{
                  fontSize: "1.5rem",
                  marginRight: ".5rem",
                  display: mode ? "none" : "block",
                }}
              />
              <select
                name="mode"
                className="reset p-2"
                style={{
                  backgroundColor: !theme ? "#15304b" : "rgba(0,0,0, .1)",
                  color: !theme ? "#fff" : "#000",
                  borderRadius: ".5rem",
                  cursor: "pointer",
                }}
                onChange={() => {
                  setMode(!mode);
                }}
                value={mode}
              >
                <option
                  value="true"
                  className="reset"
                  style={{
                    backgroundColor: !theme ? "#15304b" : "rgba(0,0,0, .1)",
                    color: !theme ? "#fff" : "#000",
                  }}
                >
                  Private
                </option>
                <option
                  className="reset"
                  style={{
                    backgroundColor: !theme ? "#15304b" : "rgba(0,0,0, .1)",
                    color: !theme ? "#fff" : "#000",
                  }}
                  value="false"
                >
                  Public
                </option>
              </select>
            </div>

            <div className="w-100 mt-3">
              <Input
                className="reset"
                placeholder="What happening?"
                css={{
                  backgroundColor: "transparent",
                  color: !theme ? "#fff" : "#000",
                  border: "none",
                  fontSize: "1rem",
                  width: "100%",
                  height: " 3rem",
                  padding: ".5rem 1rem",
                }}
                value={content}
                variant=""
                handleChange={(e) => setContent(e.target.value)}
              />
            </div>
            {listFilePhoto.length > 0 && (
              <ButtonCustom
                name="Add more photos"
                backgroundColor="transparent"
                style={{
                  margin: "1rem",
                  color: !theme ? "#fff" : "#000",
                }}
                handleClick={() => {
                  inputPhoto?.current?.click();
                }}
                iconLeft={
                  <IoAdd
                    style={{
                      fontSize: "2rem",
                    }}
                  />
                }
              />
            )}
            <div
              className="w-100 hidden-scroll "
              style={{
                maxHeight: "45vh",
                overflow: "auto",
              }}
            >
              <div
                className=" w-100 "
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${
                    listFilePhotoURL.length > 1 ? 2 : 1
                  }, 1fr)`,
                  gridGap: "2px",
                }}
              >
                {listFilePhotoURL.length > 0 && renderPhotoPreview()}
              </div>
              {videoPreview && (
                <video
                  className="br-primary"
                  style={{ borderRadius: "1rem", marginTop: "2rem" }}
                  src={videoPreview}
                  controls
                  width="100%"
                />
              )}
            </div>
            <div className="w-100 end">
              <ButtonCustom
                name="video"
                height="2.5rem"
                backgroundColor="transparent"
                iconLeft={
                  <AiOutlineVideoCamera
                    style={{
                      fontSize: "2rem",
                      marginRight: ".2rem",
                    }}
                  />
                }
                style={{
                  color: !theme ? "#fff" : "#000",
                }}
                handleClick={() => {
                  document.getElementById("video").click();
                }}
              />
              <input
                type="file"
                id="video"
                accept="video/*"
                style={{
                  display: "none",
                }}
                onChange={handleSelectVideo}
              />
              <ButtonCustom
                name="Photo"
                height="2.5rem"
                backgroundColor="transparent"
                iconLeft={
                  <MdOutlineAddAPhoto
                    style={{
                      fontSize: "2rem",
                      marginRight: ".2rem",
                    }}
                  />
                }
                style={{
                  color: !theme ? "#fff" : "#000",
                }}
                handleClick={() => {
                  setListFilePhoto([]);
                  setListFilePhotoURL([]);
                  document.getElementById("photo").click();
                }}
              />
              <input
                type="file"
                id="photo"
                accept="image/*"
                style={{
                  display: "none",
                }}
                ref={inputPhoto}
                onChange={handleSelectPhoto}
              />
            </div>
            <div className="w-100 mt-2">
              <ButtonCustom
                name="POST"
                handleClick={post}
                width="100%"
                height="2.5rem"
                style={{
                  backgroundColor: !theme ? "#15304b" : "rgba(0,0,0, .1)",
                  color: !theme ? "#fff" : "#000",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CreateNews);
