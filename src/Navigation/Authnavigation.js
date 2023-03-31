import React from "react";
import Navigation from "./NavigationBar.js";
import LoginScreen from "../../src/Screens/LoginScreen.js";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/slices/authSlice";

const Auth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigation /> : <LoginScreen />;
};

export default Auth;
