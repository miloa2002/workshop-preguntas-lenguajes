import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../../pages/PaginaPerfil/PaginaPerfil.css"
import LogoutButton from "./logout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="cerrar-sesion-container">
        <div className="img_container">
          <img className="img_avatar" src={user.picture} alt={user.name} />
        </div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <LogoutButton />
      </div>
    )
  );
};

export default Profile;