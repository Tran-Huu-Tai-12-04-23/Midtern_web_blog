import "./style.scss";
const ProcessUpload = ({ show }) => {
  return (
    <div className="" style={{ paddingTop: "1rem" }}>
      <div className="process-upload">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
        <div className="dot dot-5"></div>
      </div>
      <div className="loader-text">
        <span className="l">U</span>
        <span className="o">p</span>
        <span className="a">l</span>
        <span className="d">o</span>
        <span className="i">a</span>
        <span className="n">d</span>
        <span className="g">i</span>
        <span className="d1">n</span>
        <span className="d2">g</span>
        <span className="d3">.</span>
        <span className="d4">.</span>
      </div>
    </div>
  );
};

export default ProcessUpload;
