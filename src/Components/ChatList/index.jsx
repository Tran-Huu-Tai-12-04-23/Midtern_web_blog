import { memo } from "react";
import "./style.scss";
import { v4 as uuid } from "uuid";

import ButtonCustom from "../ButtonCustom";
import { HiUserGroup } from "react-icons/hi";
import { AppStoreUseContext } from "../../Context/AppStore";

import avatar_default from "../../Assets/img/avatar_default.jpg";
import { addDocument } from "../../firebase/service";

const ChatList = () => {
  const { friends, setSelectUserChat, setShowChatBox } = AppStoreUseContext();

  const loadFriends = () => {
    return friends.map((friend) => {
      return (
        <div
          key={friend.id}
          className="col-12 gx-0 hidden-scroll"
          style={{
            maxHeight: "40vh",
            overflowY: "scroll",
            marginBottom: "1rem",
          }}
        >
          <div
            className="start"
            style={{
              justifyContent: "start",
              fontWeight: 600,
              borderRadius: 0,
              fontSize: ".6rem",
            }}
          >
            <img
              src={friend.photoURL ? friend.photoURL : avatar_default}
              className="avatar "
              style={{
                marginRight: "1rem",
              }}
            ></img>
            <div className="">
              <span>{friend.displayName}</span>
              <div className="start mt-2">
                <div className="active-user "></div>
                <span className="cl-second fs-small">Active</span>
              </div>
            </div>
            <ButtonCustom
              handleClick={() => {
                setSelectUserChat(friend.id);
                setShowChatBox(true);
              }}
              name="Send"
              color="#fff"
              backgroundColor="#4f84eb"
              height="2rem"
              style={{
                borderRadius: "2rem",
                fontWeight: "bold",
                fontSize: ".8rem",
                marginLeft: "auto",
              }}
            />
          </div>
        </div>
      );
    });
  };
  return (
    <div
      className="wrapper-ChatList  br-primary bg-second p-4 hidden-scroll"
      style={{
        width: "95%",
        marginRight: "1rem",
        float: "right",
        overflow: "scroll",
      }}
    >
      <div className="w-100 border-bottom pb-2 start">
        <HiUserGroup
          style={{
            fontSize: "1.5rem",
            color: "#fff",
            marginRight: ".5rem",
          }}
        />
        <span className="bold">Your friend</span>
      </div>
      <div className="container-fluid mt-2">
        <div className="row">{friends.length > 0 && loadFriends()}</div>
      </div>
    </div>
  );
};
export default memo(ChatList);
