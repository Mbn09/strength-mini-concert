import React, { useEffect } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// component
import RoutePublict from "./route_publict";
import RoutePrivate from "./route_private";
// redux
// import { snapAuth, unSnapAuth } from "../../store/auth/auth.action";
// import { isLoggedSelector } from "../../store/auth/auth.selector";

const Router = () => {
  // -------------------------- STATE --------------------------
  // const logged = useSelector(isLoggedSelector);
  // -------------------------- REDUX --------------------------
  // -------------------------- FUNCTION --------------------------
  // const dispatch = useDispatch();
  // -------------------------- EFFECT --------------------------
  // useEffect(() => {
  //   dispatch(snapAuth());
  //   return () => {
  //     dispatch(unSnapAuth());
  //   };
  // }, [dispatch]);
  // -------------------------- MAIN --------------------------
  return (
    <BrowserRouter>
      <Routes>{RoutePublict()}</Routes>
    </BrowserRouter>
  );
};

export default Router;
