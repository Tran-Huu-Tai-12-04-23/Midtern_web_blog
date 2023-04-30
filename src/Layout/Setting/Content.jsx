import { useState } from "react";

import Navbar from "./Navbar";
import ProfileSetting from "./ProfileSetting";
import AccountSetting from "./AccountSetting";

function Content({ theme }) {
  const [active, setActive] = useState(0);
  return (
    <div className="w-100 p-4">
      <h1>Settings</h1>
      <Navbar theme={theme} active={active} setActive={setActive} />
      {active === 0 && <ProfileSetting theme={theme} />}
      {active === 1 && <AccountSetting theme={theme} />}
    </div>
  );
}

export default Content;
