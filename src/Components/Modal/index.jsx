const modal = ({ children, style, setActive = () => {} }) => {
  return (
    <div
      className="wrapper-modal position-fixed center"
      style={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(1rem)",
        animation: "scale .4s ease-in-out",
        ...style,
      }}
      onClick={() => setActive(false)}
    >
      {children}
    </div>
  );
};
export default modal;
