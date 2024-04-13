import React from "react";
import "../../styles/Navbar.scss";
//@ts-ignore
import logo from "../../images/logo.png";
//@ts-ignore
import icon1 from "../../images/icon1.svg";
//@ts-ignore
import icon2 from "../../images/icon2.svg";
//@ts-ignore
import icon3 from "../../images/icon3.svg";
//@ts-ignore
import icon4 from "../../images/icon4.svg";
//@ts-ignore
import icon5 from "../../images/icon5.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div id="navbar">
      <div className="container">
        <div className="navbar">
          <div className="navbar-logo">
              <img width={60} src={logo} alt="" />
            <nav className="navbar-nav">
              <div className="navbar-nav_icon">
                <img width={20} src={icon1} alt="" />
                <NavLink to="/">Моё обучение</NavLink>
              </div>

              <div className="navbar-nav_icon">
                <img width={20} src={icon2} alt="" />
                <NavLink to="/">Вопросы</NavLink>
              </div>
              <div className="navbar-nav_icon">
                <img width={20} src={icon3} alt="" />
                <NavLink to="/">События</NavLink>
              </div>
              <div className="navbar-nav_icon">
                <img width={20} src={icon4} alt="" />
                <NavLink to="/">Учителя</NavLink>
              </div>
            </nav>
          </div>

          <div className="navbar-admin">
            <Link to='login'>
            <img width={17} src={icon5} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
