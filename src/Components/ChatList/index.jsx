import "./style.scss";

import ButtonCustom from "../ButtonCustom";
import { HiUserGroup } from "react-icons/hi";

const ChatList = () => {
  return (
    <div
      className="wrapper-ChatList  br-primary bg-second p-4 hidden-scroll"
      style={{
        width: "80%",
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
        <div className="row">
          <div
            className="col-12 gx-0 hidden-scroll"
            style={{
              maxHeight: "40vh",
              overflowY: "scroll",
            }}
          >
            <ButtonCustom
              iconLeft={
                <img
                  src="https://www.venuscinema.vn/uploaded/phim/avata.jpg"
                  className="avatar "
                  style={{
                    marginRight: "1rem",
                  }}
                ></img>
              }
              iconRight={
                <ButtonCustom
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
              }
              backgroundColor="transparent"
              color="#fff"
              width="100%"
              height="4rem"
              style={{
                justifyContent: "start",
                fontWeight: 600,
                borderRadius: 0,
                fontSize: ".6rem",
              }}
              name="Thanh Bam"
            >
              <div className="start ">
                <div class="active-user "></div>
                <span className="cl-second fs-small">Active</span>
              </div>
            </ButtonCustom>
            <ButtonCustom
              iconLeft={
                <img
                  src="https://www.venuscinema.vn/uploaded/phim/avata.jpg"
                  className="avatar "
                  style={{
                    marginRight: "1rem",
                  }}
                ></img>
              }
              iconRight={
                <ButtonCustom
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
              }
              backgroundColor="transparent"
              color="#fff"
              width="100%"
              height="4rem"
              style={{
                justifyContent: "start",
                fontWeight: 600,
                borderRadius: 0,
                fontSize: ".6rem",
              }}
              name="Thanh Bam"
            >
              <div className="start ">
                <div class="active-user "></div>
                <span className="cl-second fs-small">Active</span>
              </div>
            </ButtonCustom>
            <ButtonCustom
              iconLeft={
                <img
                  src="https://www.venuscinema.vn/uploaded/phim/avata.jpg"
                  className="avatar "
                  style={{
                    marginRight: "1rem",
                  }}
                ></img>
              }
              iconRight={
                <ButtonCustom
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
              }
              backgroundColor="transparent"
              color="#fff"
              width="100%"
              height="4rem"
              style={{
                justifyContent: "start",
                fontWeight: 600,
                borderRadius: 0,
                fontSize: ".6rem",
              }}
              name="Thanh Bam"
            >
              <div className="start ">
                <div class="active-user "></div>
                <span className="cl-second fs-small">Active</span>
              </div>
            </ButtonCustom>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatList;
