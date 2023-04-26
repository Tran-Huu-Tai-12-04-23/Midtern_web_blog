import { memo } from "react";
import ButtonCustom from "../../Components/ButtonCustom";
import { AppStoreUseContext } from "../../Context/AppStore";
import avatar_default from "../../Assets/img/avatar_default.jpg";

const ListFriendSuggest = () => {
  const { listUser } = AppStoreUseContext();
  const loaderListSuggestFriend = () => {
    return listUser.map((user) => {
      return (
        <div
          key={user.id}
          className="hover-bg p-2 br-primary"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="d-flex start">
            <img
              src={user.photoURL ? user.photoURL : avatar_default}
              className="avatar "
              style={{
                marginRight: "1rem",
              }}
            ></img>

            <span className="cl-second fs-small">@{user.displayName}</span>
          </div>
          <ButtonCustom
            backgroundColor="transparent"
            color="#fff"
            width="40px"
            height="3rem"
            style={{
              justifyContent: "start",
              fontWeight: 600,
              borderRadius: 0,
              fontSize: ".6rem",
            }}
            name="Follow"
          ></ButtonCustom>
        </div>
      );
    });
  };
  return (
    <div className=" w-100 bg-second br-primary overflow-hidden mt-5 p-4">
      <h6 className="bold">Who friends suggest ?</h6>
      <div className="container-fluid mt-2">
        <div className="row">
          <div
            className="col-12 gx-0 hidden-scroll"
            style={{
              maxHeight: "40vh",
              overflowY: "scroll",
            }}
          >
            {loaderListSuggestFriend()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ListFriendSuggest);
