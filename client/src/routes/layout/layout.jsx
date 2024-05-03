import "./layout.scss";
import Navbar from "../../components/navbar/Navbar"
import { Outlet } from "react-router-dom";
import { useContext, Navigate } from 'react';
import { AuthContext } from "../../context /AuthContext";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}

function RequireAuth() {
  const {currUser} = useContext(AuthContext);

  return (
    !currUser ? ( <Navigate to="/login" /> ) : (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  ))
}

export { Layout, RequireAuth };
