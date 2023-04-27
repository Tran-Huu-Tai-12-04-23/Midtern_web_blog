import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Layout/Home";
import Sign from "./Layout/Sign";
import AppStore from "./Context/AppStore";

function App() {
  return (
    <AppStore>
      <Routes>
        <Route path="/sign-to-website" element={<Sign />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AppStore>
  );
}

export default App;
