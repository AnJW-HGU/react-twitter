import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Navigation from "./Navigation";
import Profile from "routes/Profile";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              element={<Home />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/profile`}
              rreplace
              to={`${process.env.PUBLIC_URL}/`}
              element={<Profile />}
            />
          </>
        ) : (
          <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
