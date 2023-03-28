import React from "react";
import HomeRoute from "./components/AllRoutes/HomeRoute";
import PrivateRoutes from "./components/Private/Private";
import BusinessRoutes from "./components/AllRoutes/BusinessRoute";
import UserRoutes from "./components/AllRoutes/UserRoutes";
import { useAppSelector } from "./components/Global/Store";
function App() {
  const business = useAppSelector((state) => state.bizClient);

  return (
    <div>
      <HomeRoute />
      <PrivateRoutes>
        {business ? <BusinessRoutes /> : <UserRoutes />}
      </PrivateRoutes>
    </div>
  );
}

export default App;
