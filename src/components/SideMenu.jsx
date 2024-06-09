import React from "react";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <div className="SideMenuBg">
        <div className="SideMenuIconBox">
          <div className="SideMenuIcon">
            <p>R</p>
          </div>
          <div className="SideMenuName">
            <p>Robert Johnson</p>
          </div>
        </div>
        <div className="SideMenuBox">
          <ul>
            <li>내 라이브러리</li>
            <li>기록</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
