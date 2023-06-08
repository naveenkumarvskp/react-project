import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import AddUserInfo from "./components/AddUserInfo";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap"
import './App.css';

const App=()=> {
  return (
    <div className="App">
    <BrowserRouter>
 <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<UserDetails />} />
          <Route path="adduserinfo" element={<AddUserInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
