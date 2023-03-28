import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../Global/Store";
// import { dummy_user } from "../Global/ReduxState";

const PrivateRoutes = ({ children }: any) => {
  // const user: any = {};
  const business = useAppSelector((state) => state.bizClient);
  // const user = useAppSelector((state) => state.userData);
  const navigate = useNavigate();
  if (business) {
    return children;
  } else {
    navigate("/", { replace: true });
  }
};

export default PrivateRoutes;
