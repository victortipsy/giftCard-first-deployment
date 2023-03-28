import React, { useEffect } from "react";
import { useAppSelector } from "../Global/Store";
import { useNavigate, useRoutes } from "react-router-dom";
import BizzLogin from "../Auth/Business.Login";
import BizzSignUp from "../Auth/Business.Register";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import SelectAccount from "../Auth/SelectAccount";
import Homescreen from "../LandingPage/Homescreen";
// import { dummy_user } from "../Global/ReduxState";
import DefaultScreen from "../DefaultScreen";

const HomeRoute = () => {
  const navigate = useNavigate();
  const business = useAppSelector((state) => state.bizClient);
  const user = useAppSelector((state) => state.userData);

  useEffect(() => {
    if (business) {
      navigate("/dashboard", { replace: true });
    } else if (user) {
      navigate("/user-dashboard", { replace: true });
    }
  }, []);

  const elements = useRoutes([
    {
      path: "/",
      element: <DefaultScreen />,
    },
    {
      path: "/select-account",
      element: <SelectAccount />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/business/register",
      element: <BizzSignUp />,
    },
    {
      path: "/business/login",
      element: <BizzLogin />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <div>{elements}</div>;
};

export default HomeRoute;
