import { AiOutlineSearch } from "react-icons/ai";
import { IoAddSharp } from "react-icons/io5";
import avatar_default from "../../Assets/img/avatar_default.jpg";
import UserChat from "./UserChat";
import { AppStoreUseContext } from "../../Context/AppStore";
import { formatDate } from "../../util/index";

function ChatList() {
  const { friends, setSelectUserChat } = AppStoreUseContext();
  const loadFriends = () => {
    return friends.map((friend) => {
      return (
        <div
          onClick={() => setSelectUserChat(friend.id)}
          key={friend.id}
          className="col-12 gx-0 hidden-scroll"
          style={{
            maxHeight: "",
            overflowY: "scroll",
            marginBottom: "1rem",
          }}
        >
          <UserChat
            name={friend.displayName}
            avatar={friend.photoURL}
            time={formatDate(friend.createdAt)}
          ></UserChat>
        </div>
      );
    });
  };
  return (
    <div className="container-fluid h-100">
      <div
        className="row flex-column p-4 h-100"
        style={{
          borderRight: "1px solid #4f84eb",
        }}
      >
        <div className="w-100 d-flex justify-content-between align-items-center">
          <h1>Chats</h1>
          <div className="">
            <AiOutlineSearch
              style={{
                fontSize: "1.5rem",
              }}
            />
            <IoAddSharp
              style={{
                fontSize: "1.5rem",

                color: "#4f84eb",
              }}
            />
          </div>
        </div>
        <div
          className="col-12 mt-5 flex-column align-items-center justify-content-start"
          style={{
            overflow: "auto",
            overflowX: "hidden",
            height: "calc( 100vh - 5rem) ",
          }}
        >
          {friends && loadFriends()}
        </div>
      </div>
    </div>
  );
}

export default ChatList;
