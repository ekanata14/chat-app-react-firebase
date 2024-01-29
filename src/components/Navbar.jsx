import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const {currentUser, logout} = UserAuth();

  const handleLogout = async () => {
    try{
      await logout();
    } catch(error){
      console.log(error);
    }
  }

  return (
    <div className="navbar fixed bg-neutral text-neutral-content">
      <div className="containerWrap flex justify-between">
        <button className="btn btn-ghost text-xl">NgortApp</button>
        {currentUser ? <button onClick={handleLogout} className="btn">Logout</button> : ""}
      </div>
    </div>
  );
};

export default Navbar;
