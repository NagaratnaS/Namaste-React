import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-container" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>{isOnline ? "🟢 Online" : "🔴 Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>Cart</li>
          <button
            className="login"
            onClick={
              btnNameReact === "Login"
                ? () => setBtnNameReact("LogOut")
                : () => setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
