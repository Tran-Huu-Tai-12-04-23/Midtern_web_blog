import { AppStoreUseContext } from "../../Context/AppStore";
import ButtonCustom from "../ButtonCustom";
import avatar_default from "../../Assets/img/avatar_default.jpg";
import { AuthUserUseContext } from "../../Context/AuthUser";

const CardProfile = () => {
  const { user } = AuthUserUseContext();

  return (
    <div
      className=" w-100 bg-second br-primary overflow-hidden position-relative"
      style={
        {
          // height: "35vh",
        }
      }
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
          className="cl-second center"
          style={{
            fontSize: ".8rem",
          }}
        >
          @Fullstack Developer
        </label>
      </div>
      <ButtonCustom
        backgroundColor="transparent"
        color="#fff"
        width="100%"
        height="2rem"
        style={{
          fontWeight: 600,
          marginRight: "1rem",
          borderTop: " 1px  solid #24a1ee",
          borderRadius: 0,
        }}
        name="Profile"
        link="/profile"
      />
    </div>
  );
};

export default CardProfile;
