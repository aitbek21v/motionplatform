import React, { useState } from "react";
import "../../styles/Admin.scss";
//@ts-ignore
import logo from "../../images/Motion logo 1.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setTypePassword } from "../../features/slices/isPasswordSlice";
const Admin: React.FC = () => {
  const { isDark } = useAppSelector((s) => s.dark);
  const { isPassword } = useAppSelector((s) => s.password);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isDarkColor = isDark ? "white" : "black";

  return (
    <div
      style={{
        background: isDark ? "#181818" : "#fff",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="arrow">
          <button style={{ color: isDarkColor }} onClick={() => navigate(-1)}>
            <FaArrowLeftLong />
          </button>
        </div>
        <div id="admin">
          <div className="admin">
            <div className="admin-logo">
              <img width={225} src={logo} alt="" />
            </div>
            <div className="admin-inputs">
              <input
                style={{
                  background: isDark ? "gray" : "none",
                  color: isDark ? "white" : "black",
                }}
                type="text"
                placeholder="Username"
              />
              <div className="admin-inputs_password">
                <input
                  style={{ background: isDark ? "gray" : "none" }}
                  type={isPassword ? "text" : "password"}
                  placeholder="Password"
                />

                <button
                  style={{
                    color: isDark ? "white" : "gray",
                  }}
                  onClick={() => dispatch(setTypePassword(!isPassword))}
                  className="eye"
                >
                  {isPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
                </button>
              </div>
              <button>Log in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
