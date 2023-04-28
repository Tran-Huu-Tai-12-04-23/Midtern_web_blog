import { useState } from "react";

import Navbar from "./Navbar";
import ProfileSetting from "./ProfileSetting";
import AccountSetting from "./AccountSetting";

function Content() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-100 p-4">
      <h1>Settings</h1>
      <Navbar active={active} setActive={setActive} />
      {active === 0 && <ProfileSetting />}
      {active === 1 && <AccountSetting />}
    </div>
  );
}

export default Content;
