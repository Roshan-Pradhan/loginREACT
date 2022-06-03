import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Navbar/Nav";
import SignUp from "./Page/SignUp";
import SignIn from "./Page/SignIn";

import "./App.css";
import Body from "./Page/Body";
import Dashboard from "./Page/Dashboard";
import Users from "./Page/Users";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/dash" element={<Dashboard />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
