import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const navigate=useNavigate()
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const logOut= async()=>{
    localStorage.removeItem(token)
    setToken('');
   navigate('/')

  }
  return (
    <div className="navbar" id="navbar">
      <Link to={"/"}>
        <img src={assets.logo} className="logo" alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}>
          Home
        </Link>
        <a
          href={"#exploreMenu"}
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}>
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}>
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact-us")}
          className={menu === "Contact-us" ? "active" : ""}>
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        <div className="navbar-search">
          <Link to={"./cart"}>
            <img src={assets.basket_icon} alt="" />
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </Link>
        </div>
        {!token? <button onClick={() => setShowLogin(true)}>Sign-in</button>:<div className="navbar-profile">
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Logout</p></li></ul></div>}
       
      </div>
    </div>
  );
};

export default Navbar;
