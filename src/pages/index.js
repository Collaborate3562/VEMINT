import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";

import HomePage from "./home";
import LandingPage from "./landing";
import TokenPage from "./token";
import CreateApplication from "./create_application";

const Pages = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/token" element={<HomePage />} />
          <Route path="/nft" element={<TokenPage />} />
          <Route path="/create" element={<CreateApplication />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);