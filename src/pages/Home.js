import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Notes from "../components/Notes";
import { Routes, Route } from "react-router-dom";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Alerts from "../components/Alerts";

const Home = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <Alerts alert={alert}/>
      <Routes>
        <Route path="/" element={<Notes showAlert={showAlert}/>} />
        <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
        <Route path="/login" element={<Login showAlert={showAlert} />} />
      </Routes>
    </>
  );
};

export default Home;
