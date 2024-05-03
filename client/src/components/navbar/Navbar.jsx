import "./navbar.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from "../../context /AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const {currUser} = useContext(AuthContext);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>HealthMate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>

      </div>
      <div className="right">
        {currUser ? (
          <div className="user">
            <img
              src={currUser.avatar || "/anonymous.jpeg"}
              alt=""
            />
            <span>{currUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
