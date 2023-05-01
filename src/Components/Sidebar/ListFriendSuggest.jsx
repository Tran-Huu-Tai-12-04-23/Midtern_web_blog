import { memo } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "../../Components/ButtonCustom";
import { AppStoreUseContext } from "../../Context/AppStore";
import avatar_default from "../../Assets/img/avatar_default.jpg";
import { addFriend } from "../../firebase/service";
import { UseGlobalsStylesContext } from "../../GlobalStyle";
import { AuthUserUseContext } from "../../Context/AuthUser";

const ListFriendSuggest = () => {
  const { listUser, setUserSelectShowProfile } = AppStoreUseContext();
  const { user } = AuthUserUseContext();
  const { theme } = UseGlobalsStylesContext();
  const history = useNavigate();

  const loaderListSuggestFriend = () => {
    return listUser.map((guest) => {
      return (
        <div
          key={guest.id}
          className={`${
            !theme ? "hover-bg-dark" : "hover-bg-light"
          } p-2 br-primary transition`}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={(e) => {
            setUserSelectShowProfile(guest);
            history("/profile");
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
              className=" "
              style={{
                fontSize: "1rem",
                color: !theme ? "#ccc" : "#000",
              }}
            >
              @{guest.displayName}
            </span>
          </div>
          <ButtonCustom
            backgroundColor="transparent"
            color={!theme ? "#fff" : "#000"}
            width="40px"
            height="3rem"
            style={{
              justifyContent: "start",
              fontWeight: "bold",
              borderRadius: 0,
              fontSize: ".8rem",
            }}
            handleClick={(e) => {
              e.stopPropagation();
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
