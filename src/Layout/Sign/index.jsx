import { useState } from "react";

import "./style.scss";
import signIn1 from "../../Assets/img/signIn1.png";
import signIn2 from "../../Assets/img/signIn2.png";
import "bootstrap/dist/css/bootstrap.min.css";

import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import Slider from "../../Components/Slider";

const Sign = () => {
  const [page, setPage] = useState(true);
  return (
    <div
      className="wrapper-sign"
      style={{
        backgroundColor: "var(--dark-login-primary-color)",
      }}
    >
      <div className="container-fluid p-0 overflow-hidden ">
        <div className="row">
          {!page && <FormRegister onSwitchRoute={() => setPage(!page)} />}
          <div className="col-lg-6 col-xl-6 center mt-5 d-xl-block d-lg-block d-none">
            <Slider dataImage={[signIn2, signIn1, signIn2]} />
          </div>

          {page && <FormLogin onSwitchRoute={() => setPage(!page)} />}
        </div>
      </div>
    </div>
  );
};

export default Sign;
