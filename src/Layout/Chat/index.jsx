import ChatList from "./ChatList";
import BoxChat from "./BoxChat";
import ChatInformation from "./ChatInformation";
import Header from "../../Components/Header";
import { AppStoreUseContext } from "../../Context/AppStore";
import { AiOutlineInfo } from "react-icons/ai";

function Chat() {
  const { selectUserChat } = AppStoreUseContext();
  return (
    <div
      className="chat bg-main container-fluid  overflow-hidden"
      style={{
        height: "100vh",
      }}
    >
      <Header />
      <div className="row mt-4 h-100">
        <div className="col-3">
          <ChatList />
        </div>
        <div className="col-6 h-100">
          {!selectUserChat && (
            <div
              className="w-100 start"
              style={{
                color: "#4f84eb",
              }}
            >
              <AiOutlineInfo
                style={{
                  fontSize: "1.5rem",
                }}
              />
              <h1>Please select user to chatting </h1>
            </div>
          )}
          {selectUserChat && <BoxChat />}
        </div>
        <div className="col-3">
          <ChatInformation />
        </div>
      </div>
    </div>
  );
}

export default Chat;
