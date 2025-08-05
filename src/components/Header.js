import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const isOnline = useOnlineStatus();

  return (
    <div className="">
      {/* <div className="w-10 m-5 p-8">
        <img className="w-xs" src={LOGO_URL} />
      </div> */}
      <div className="">
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

          <li>
            <Link to="/grocery">Grocery</Link>
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
