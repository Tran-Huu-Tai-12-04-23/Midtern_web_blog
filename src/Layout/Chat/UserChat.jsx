function UserChat({ name, avatar, time }) {
  return (
    <div
      className="mt-4 start hover-bg p-2 br-primary "
      style={{
        cursor: "pointer",
      }}
    >
      <img
        className="avatar "
        style={{
          marginRight: "1rem",
        }}
        src={avatar}
      ></img>
      <div
        className="d-flex justify-content-between align-items-center w-100"
        style={{
          float: "",
        }}
      >
        <span>{name}</span>
        <span
          className="cl-second"
          style={{
            fontSize: ".6rem",
          }}
        >
          {time}
        </span>
      </div>
    </div>
  );
}

export default UserChat;
