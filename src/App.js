import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  HashRouter,
} from "react-router-dom";

import Home from "./Components/Home/Home";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
