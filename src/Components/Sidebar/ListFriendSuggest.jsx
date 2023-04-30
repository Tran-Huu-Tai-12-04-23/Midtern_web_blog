import { memo } from "react";
import ButtonCustom from "../../Components/ButtonCustom";
import { AppStoreUseContext } from "../../Context/AppStore";
import avatar_default from "../../Assets/img/avatar_default.jpg";
import { addFriend } from "../../firebase/service";
import { UseGlobalsStylesContext } from "../../GlobalStyle";
import { AuthUserUseContext } from "../../Context/AuthUser";

const ListFriendSuggest = () => {
  const { listUser } = AppStoreUseContext();
  const { user } = AuthUserUseContext();
  const { theme } = UseGlobalsStylesContext();
  const loaderListSuggestFriend = () => {
    return listUser.map((guest) => {
      return (
        <div
          key={guest.id}
          className="hover-bg p-2 br-primary"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="d-flex start">
            <img
              src={guest.photoURL ? guest.photoURL : avatar_default}
              className="avatar "
              style={{
                marginRight: "1rem",
              }}
            ></img>

            <span
              className="cl-second fs-small "
              style={{
                fontSize: "1rem",
              }}
            >
              @{guest.displayName}
            </span>
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
            handleClick={() => {
              if (user.id && guest.user_id) {
                addFriend(user.id, guest.user_id);
                addFriend(guest.user_id, user.id);
              }
            }}
            name="Follow"
          ></ButtonCustom>
        </div>
      );
    });
  };
  return (
    <div
      className=" w-100 bg-second br-primary overflow-hidden mt-5 p-4"
      style={{
        background: !theme
          ? "var(--bg-second-dark-theme)"
          : "var(--bg-second-light-theme",
      }}
    >
      <h6
        className="bold"
        style={{
          fontSize: ".8rem",
        }}
      >
        Who friends suggest ?
      </h6>
      <div className="container-fluid mt-2">
        <div className="row">
          <div
            className="col-12 gx-0 hidden-scroll"
            style={{
              maxHeight: "40vh",
              overflowY: "scroll",
            }}
          >
            {listUser.length > 0 && loaderListSuggestFriend()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ListFriendSuggest);
