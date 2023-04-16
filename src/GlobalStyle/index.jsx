import "./style.scss";
import "./reset.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const GlobalStyles = ({ children }) => {
  return (
    <div
      style={{
        color: "var(--dark-color)",
      }}
    >
      {children}
    </div>
  );
};

export default GlobalStyles;
