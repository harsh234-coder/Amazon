//optional chaining (?)
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  //handle authentication
  const handleAuthentication = () => {
    if (user) {
      //to sign out a user
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAA7Oi_WHnGiKqK5g3oEDcKyxaxBUcnnFSw3YQkPvqzlp6LCgQE3ZLYioKpzpRySxB428&usqp=CAU"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input className="header_searchinput" type="text" />
        <SearchIcon className="header_searchicon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionline1">Hello {user?.email}</span>
            <span className="header_optionline2">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionline1">Returns</span>
          <span className="header_optionline2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionline1">Your</span>
          <span className="header_optionline2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingBasketIcon />
            <span className="header_optionline2 header_basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
