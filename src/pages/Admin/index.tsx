import React, { useState } from "react";
import "../../styles/Admin.scss";
//@ts-ignore
import logo from "../../images/Motion logo 1.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Admin: React.FC = () => {
  const [isPassword, setIsPassword] = useState(false);
  const navigate = useNavigate()
  return (
    <>
      <div className="container">
        <div className="arrow">
          <button onClick={() => navigate(-1)}>
            <FaArrowLeftLong />
          </button>
        </div>
        <div id="admin">
          <div className="admin">
            <div className="admin-logo">
              <img width={225} src={logo} alt="" />
            </div>
            <div className="admin-inputs">
              <input type="text" placeholder="Username" />
              <div className="admin-inputs_password">
                <input
                  type={isPassword ? "text" : "password"}
                  placeholder="Password"
                />
                {isPassword ? (
                  <button onClick={() => setIsPassword(false)} className="eye">
                    <IoEyeOutline />
                  </button>
                ) : (
                  <button onClick={() => setIsPassword(true)} className="eye">
                    <FaRegEyeSlash />
                  </button>
                )}
              </div>
              <button>Log in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
