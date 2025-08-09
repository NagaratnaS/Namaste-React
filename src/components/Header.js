import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const isOnline = useOnlineStatus();
  const data = useContext(UserContext);

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
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
