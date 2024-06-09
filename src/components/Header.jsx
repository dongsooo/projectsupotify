import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGears } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header_wrap">
        <div className="Header_right_box">
          <FontAwesomeIcon icon={faUser} className="userIcon" />
        </div>
        <div className="Header_center_box">
          <h1>Supotify</h1>
        </div>
        <div className="Header_left_box">
          <FontAwesomeIcon icon={faGears} className="settingIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
