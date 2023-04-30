import { useState } from "react";
import Header from "../../Components/Header";

import FormCreate from "./FormCreate";
import PreviewCreate from "./PreviewCreate";
import { UseGlobalsStylesContext } from "../../GlobalStyle";

function CreateNewGroup() {
  const [groupName, setGroupName] = useState("");
  const [mode, setMode] = useState("public");
  const [members, setMembers] = useState("Public");
  const { theme } = UseGlobalsStylesContext();

  return (
    <div
      className="bg-main"
      style={{
        minHeight: "100vh",
      }}
    >
      <Header />
      <div className="container-fluid m-0 p-0">
        <div
          className="row  g-0"
          style={{
            paddingTop: "4rem",
          }}
        >
          <div className="col-3">
            <FormCreate
              theme={theme}
              groupName={groupName}
              setGroupName={setGroupName}
              mode={mode}
              setMode={setMode}
              members={members}
              setMembers={setMembers}
            ></FormCreate>
          </div>
          <div className="col-9 ">
            <PreviewCreate
              theme={theme}
              groupName={groupName}
              mode={mode}
              members={members}
            ></PreviewCreate>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewGroup;
