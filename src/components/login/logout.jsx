import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn_close-sesion" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Cerrar sesion
    </button>
  );
};

export default LogoutButton;