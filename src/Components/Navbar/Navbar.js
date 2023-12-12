import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const[menu,setmenu]=useState("shop");

    return (
        <div className="Navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>setmenu("shop")}><Link to='/' style={{textDecoration:"none"}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>setmenu("mens")}><Link to="/mens" style={{textDecoration:"none"}}>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>setmenu("womens")}><Link to="/womens" style={{textDecoration:"none"}}>women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>setmenu("kids")}><Link t0="/Kids" style={{textDecoration:"none"}}>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/LoginSignUp"><button>Login</button></Link>
               <Link to="/Cart"> <img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
