import "./style.scss";
import signIn1 from "../../Assets/img/signIn1.png";

import FormLogin from "./FormLogin";

const Sign = () => {
  return (
    <div
      className="wrapper-sign"
      style={{
        backgroundColor: "var(--dark-login-primary-color)",
      }}
    >
      <div className="container-fluid p-0 overflow-hidden ">
        <div className="row">
          <div className="col-lg-6 col-xl-6 center mt-5">
            <img
              style={{
                width: "30rem",
                height: "20rem",
              }}
              src={signIn1}
            ></img>
          </div>
          <div className="col-lg-6 col-xl-6">
            <FormLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
