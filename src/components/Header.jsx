import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGears, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState("SideMenu");
  const userCliked = () => {
    setUser("SideMenu " + "active");
  };

  const xClicked = () => {
    setUser("SideMenu");
  };
  return (
    <>
      <div className="Header">
        <div className="Header_wrap">
          <div className="Header_right_box">
            <FontAwesomeIcon
              icon={faUser}
              className="userIcon"
              onClick={userCliked}
            />
          </div>
          <div className="Header_center_box">
            <h1>Supotify</h1>
          </div>
          <div className="Header_left_box">
            <Link to="/Settings">
              <FontAwesomeIcon icon={faGears} className="settingIcon" />
            </Link>
          </div>
        </div>
      </div>
      <div className={user}>
        <div className="SideMenuBg">
          <div className="SideMenuIconBox">
            <div className="SideMenuIcon">
              <p>R</p>
            </div>
            <div className="SideMenuXIconBox" onClick={xClicked}>
              <FontAwesomeIcon icon={faXmark} className="SideMenuXIcon" />
            </div>
            <div className="SideMenuName">
              <p>Robert Johnson</p>
            </div>
          </div>
          <div className="SideMenuBox">
            <ul>
              <li>
                <Link to="/Library">내 라이브러리</Link>
              </li>
              <li>기록</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
