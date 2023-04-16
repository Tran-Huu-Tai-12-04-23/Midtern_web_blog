import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyle";
import Home from "./Layout/Home";
import Sign from "./Layout/Sign";

function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <Router>
          <Routes>
            <Route path="/sign-to-website" element={<Sign />}></Route>
            {/*
            <Route path="/register" element={<Register />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/products" element={<ShowProduct />}></Route>
            <Route path="/detail-item" element={<DetailItem />}></Route>
            <Route path="/post-new-item" element={<PostNewItem />}></Route>
            <Route path="/store" element={<Store />}></Route> */}
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </GlobalStyles>
    </div>
  );
}

export default App;
