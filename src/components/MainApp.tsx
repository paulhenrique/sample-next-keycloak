import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Button } from "@mui/material";

const MainApp = () => {
  const {
    keycloak: { logout },
  } = useKeycloak();
  return <Button onClick={() => logout()}>Logout</Button>;
};

export default MainApp;
