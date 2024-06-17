import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
    // let btnName = "Login";
    const [log, setLog] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    // Subscribing to the store using a Selector
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    return (
        <div className="flex justify-between items-center shadow-lg h-24 mb-5">
            <div className="ml-4">
                <Link to="/">
                    <img className="w-24" src={LOGO_URL} />
                </Link>
            </div>
            <div className="mr-4">
                <ul className="flex p-0 m-0 list-none">
                    <li className="px-4">Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/cart">Cart ({cartItems.length} items)</Link>
                    </li>
                    <button
                        className="login"
                        onClick={() => {
                            log === "Login" ? setLog("Logout") : setLog("Login");
                        }}
                    >
                        {log}
                    </button>
                    <li className="px-4 font-bold">
                        <a href="/cart">{loggedInUser}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
