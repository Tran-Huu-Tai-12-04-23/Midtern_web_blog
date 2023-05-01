import { useNavigate } from "react-router-dom";
import { AppStoreUseContext } from "../../Context/AppStore";
import ButtonCustom from "../ButtonCustom";
import avatar_default from "../../Assets/img/avatar_default.jpg";
import { AuthUserUseContext } from "../../Context/AuthUser";
import { UseGlobalsStylesContext } from "../../GlobalStyle";

const CardProfile = () => {
  const { user } = AuthUserUseContext();
  const { setUserSelectShowProfile } = AppStoreUseContext();
  const { theme } = UseGlobalsStylesContext();
  const history = useNavigate();

  return (
    <div
      className=" w-100  br-primary overflow-hidden position-relative"
      style={{
        background: !theme
          ? "var(--bg-second-dark-theme)"
          : "var(--bg-second-light-theme",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "15vh",
          objectFit: "cover",
        }}
        src={user ? user.photoURL : avatar_default}
      ></img>
      <div
        className="position-absolute center"
        style={{
          borderRadius: "50%",
          width: "3.5rem",
          height: "3.5rem",
          border: "1px solid #18c3e9",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          className="avatar "
          style={{}}
          src={user ? user.photoURL : avatar_default}
          alt={user ? user.displayName : ""}
        />
      </div>

      <div className="content-profile p-4 mt-2">
        <h5
          className="center"
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          {user ? user.displayName : ""}
        </h5>
        <label
          className="center"
          style={{
            fontSize: ".8rem",
            color: !theme ? "#ccc" : "#000",
          }}
        >
          @Fullstack Developer
        </label>
      </div>
      <ButtonCustom
        backgroundColor="transparent"
        color={!theme ? "#fff" : "#000"}
        width="100%"
        height="2rem"
        style={{
          fontWeight: 600,
          marginRight: "1rem",
          borderTop: " 1px  solid #24a1ee",
          borderRadius: 0,
        }}
        name="Profile"
        handleClick={() => {
          setUserSelectShowProfile(null);
          history("/profile");
        }}
      />
    </div>
  );
};

export default CardProfile;
