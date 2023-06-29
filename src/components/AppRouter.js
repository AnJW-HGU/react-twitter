import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        ) : (
          <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
