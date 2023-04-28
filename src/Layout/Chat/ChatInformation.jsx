function ChatInformation() {
  return (
    <div
      className="h-100 p-4"
      style={{
        borderLeft: "1px solid #4f84eb",
      }}
    >
      <div className="w-100 start">
        <h5
          className="active-navbar"
          style={{
            padding: ".5rem",
            fontSize: "1rem",
            marginRight: "1rem",
          }}
        >
          Chat members
        </h5>
        <h5
          style={{
            padding: ".5rem",
            fontSize: "1rem",
            marginRight: "1rem",
          }}
        >
          Files chat
        </h5>
      </div>
    </div>
  );
}

export default ChatInformation;
