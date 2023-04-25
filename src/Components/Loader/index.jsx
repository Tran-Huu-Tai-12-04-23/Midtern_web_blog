import "./style.scss";
const Loader = ({ show }) => {
  return (
    <div
      className="wrapper center position-fixed"
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: "100",
        backdropFilter: "blur(1rem)",
        backgroundColor: "rgba(0,0,0,.3)",
        display: show ? "flex" : "none",
      }}
    >
      <div className="spinner center "></div>;
    </div>
  );
};

export default Loader;
