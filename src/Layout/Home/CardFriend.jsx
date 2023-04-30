import avatar_default from "../../Assets/img/avatar_default.jpg";
import ButtonCustom from "../../Components/ButtonCustom";

function CardFriend({ data, theme }) {
  return (
    <div
      className="hover-bg p-2 br-primary  w-100"
      style={{
        background: !theme
          ? "var(--bg-second-dark-theme)"
          : "var(--bg-second-light-theme",
        color: !theme ? "#fff" : "#000",
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
        <h1
          className="w-100"
          style={{
            fontSize: ".6rem",
          }}
        >
          {data.name}
        </h1>
      </div>
      <ButtonCustom
        name="Remove"
        width="100%"
        style={{
          marginBottom: ".5rem",
          marginTop: ".5rem",
          color: !theme ? "#fff" : "#000",
        }}
        backgroundColor="rgba(255, 255, 255, .4)"
      />
      <ButtonCustom
        width="100%"
        name="Add Friend"
        backgroundColor={!theme ? "#4f84eb" : "#0070c0"}
        style={{}}
      />
    </div>
  );
}

export default CardFriend;
