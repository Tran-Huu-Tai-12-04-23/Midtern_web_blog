import ButtonCustom from "../ButtonCustom";

function CardUser({
  color,
  style,
  onMouseMove = () => {},
  onMouseLeave = () => {},
  data = {},
  backgroundColor = "rgba(255, 255, 255, .1)",
}) {
  return (
    <div
      className=" br-primary p-3"
      style={{
        width: "20rem",
        backgroundColor: backgroundColor,
        backdropFilter: "blur(1rem)",
        zIndex: "2",
        ...style,
        color: color,
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="d-flex justify-content-between">
        <img
          className="img br-primary"
          style={{
            width: "45%",
            height: "45%",
          }}
          src={data?.avatar}
        />
        <div
          className="d-flex justify-content-start align-item-start flex-column w-50"
          style={{
            height: "45%",
          }}
        >
          <div className="w-100 h-100 d-flex justify-content-between align-items-start flex-column">
            <h1
              className="bold "
              style={{
                fontSize: "1.4rem",
                marginBottom: "1rem",
              }}
            >
              {data?.name}
            </h1>
            <span>Full-stacks developer</span>
          </div>
          <div
            className="w-100 br-primary p-2 mt-4 d-flex justify-content-between align-items-center"
            style={{
              backgroundColor: "#fff",
              height: "50%",
            }}
          >
            <div
              className="w-50"
              style={{
                color: "#000",
                textAlign: "start",
                fontSize: ".6rem",
                borderRight: "1px solid #4f84eb",
              }}
            >
              95 followers
            </div>
            <div
              className="w-50"
              style={{
                color: "#000",
                fontSize: ".6rem",
                textAlign: "end",
              }}
            >
              10 posts
            </div>
          </div>
        </div>
      </div>
      <ButtonCustom
        name="Add friend"
        color={color}
        style={{
          marginTop: "1rem",
        }}
        width="100%"
        backgroundColor="rgba(79, 132, 235, .1)"
        height="3rem"
      />
    </div>
  );
}

export default CardUser;
