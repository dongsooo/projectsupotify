import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { settingList } from "../server/settingsList";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="Settings">
      <div className="SettingsHeader">
        <div className="SettingsHeaderIconBox">
          <Link to="/projectsupotify">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="SettingsHeaderIcon"
            />
          </Link>
        </div>
        <div className="SettingsHeaderTitleBox">
          <p>설정</p>
        </div>
      </div>
      <div className="SettingsBody">
        <div className="SettingsProfBox">
          <div className="SettingsProfIconBox">
            <p>R</p>
          </div>
          <div className="SettingsProfTextBox">
            <p>Robert Johnson</p>
            <p>프로필 보기</p>
          </div>
          <div className="SettingsProfArrowBox">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="SettingsProfArrow"
            />
          </div>
        </div>
        <div className="SettingsList">
          <ul>
            {settingList.map((data) => {
              return (
                <li key={data.id}>
                  <p>{data.list}</p>
                  <div className="ListIcon">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="SettingsListIcon"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="SettingsLogoutBox">
          <p>로그아웃하기</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
