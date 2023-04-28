import avatar_default from "../../Assets/img/avatar_default.jpg";
import ButtonCustom from "../../Components/ButtonCustom";

function CardFriend({ data }) {
  return (
    <div
      className="hover-bg p-2 br-primary hover-border w-100"
      style={{
        backgroundColor: "rgba(255, 255, 255, .1)",
      }}
    >
      <img
        style={{
          maxHeight: "20rem",
          maxWidth: "15rem",
          width: "100%",
          marginBottom: ".5rem",
          borderRadius: ".5rem",
        }}
        src={avatar_default}
      ></img>
      <h1 className="w-100">Tran Huu Tai</h1>
      <ButtonCustom
        name="Remove"
        width="100%"
        style={{
          marginBottom: ".5rem",
          marginTop: ".5rem",
        }}
        backgroundColor="rgba(255, 255, 255, .4)"
      />
      <ButtonCustom width="100%" name="Add Friend" backgroundColor="#4f84eb" />
    </div>
  );
}

export default CardFriend;
