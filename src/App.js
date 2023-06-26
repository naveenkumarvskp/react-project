import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import AddUserInfo from "./components/AddUserInfo";
import TemplatePage from "./components/TemplatePage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./App.css";

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div data-testid="location-display" className="d-none">
      {location.pathname}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <LocationDisplay />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<UserDetails />} />
            <Route path="adduserinfo" element={<AddUserInfo />} />
            <Route path="aboutus" element={<TemplatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
