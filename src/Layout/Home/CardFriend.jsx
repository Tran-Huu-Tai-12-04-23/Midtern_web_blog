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
      <div className="start">
        <img
          style={{
            maxHeight: "10rem",
            maxWidth: "5rem",
            width: "100%",
            marginBottom: ".5rem",
            borderRadius: ".5rem",
            marginRight: ".5rem",
          }}
          src={data.photoURL}
        ></img>
        <h1 className="w-100">{data.name}</h1>
      </div>
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
