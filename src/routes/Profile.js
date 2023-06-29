import { authService } from "fbase";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    authService.signOut();
    navigate(-1);
    // navigate(`${process.env.PUBLIC_URL}/`);
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
