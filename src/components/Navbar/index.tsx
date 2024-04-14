import React from "react";
import "../../styles/Navbar.scss";
//@ts-ignore
import logo from "../../images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { setDarkMode } from "../../features/slices/darkModeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { TbCards } from "react-icons/tb";
import { GoQuestion } from "react-icons/go";
import { BsCalendar4Event } from "react-icons/bs";
import { SlPeople } from "react-icons/sl";
import { CiUser } from "react-icons/ci";



const Navbar: React.FC = () => {
  const { isDark } = useAppSelector((s) => s.dark);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const isDarkColor = isDark ? "white" : "black";
  return (
    <div id="navbar">
      <div className="container">
        <div className="navbar">
          <div className="navbar-logo">
            <img width={60} src={logo} alt="" />
            <nav className="navbar-nav">
              <div className="navbar-nav_icon">
                <button style={{color:isDarkColor}}>
                  <TbCards />
                </button>
                <NavLink style={{ color: isDarkColor }} to="/">
                  Моё обучение
                </NavLink>
              </div>

              <div className="navbar-nav_icon">
                <button style={{color:isDarkColor}}>
                  <GoQuestion />
                </button>
                <NavLink style={{ color: isDarkColor }} to="/">
                  Вопросы
                </NavLink>
              </div>
              <div className="navbar-nav_icon">
                <button style={{color:isDarkColor}}><BsCalendar4Event/></button>
                <NavLink to="/" style={{ color: isDarkColor }}>
                  События
                </NavLink>
              </div>
              <div className="navbar-nav_icon">
                <button style={{color:isDarkColor}}><SlPeople/></button>
                <NavLink style={{ color: isDarkColor }} to="/">
                  Учителя
                </NavLink>
              </div>
            </nav>
          </div>

          <div className="navbar-admin">
            <button
              style={{ color: isDarkColor }}
              onClick={() => dispatch(setDarkMode(!isDark))}
            >
              {isDark ? <MdOutlineLightMode /> : <CiDark />}
            </button>
              <button style={{color:isDarkColor}}
              onClick={() => navigate('/login')}
              >
                <CiUser/>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
