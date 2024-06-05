import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    // let btnName = "Login";
    const [log, setLog] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <img className="logo" src={LOGO_URL} />
                </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <a href="/cart">Cart</a>
                    </li>
                    <button
                        className="login"
                        onClick={() => {
                            log === "Login" ? setLog("Logout") : setLog("Login");
                        }}
                    >
                        {log}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
