import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home.jsx";
import WhereToFly from "./component/WhereToFly.jsx";
import Packages from "./component/Packages.jsx";
import About from "./component/About.jsx";
import Layout from "./component/Layout.jsx";
import CheckBooking from "./component/CheckBooking.jsx";  

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/WhereToFly" element={<WhereToFly />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/CheckBooking" element={<CheckBooking />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
