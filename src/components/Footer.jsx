import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faFolderOpen,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Route, Routes } from "react-router-dom";
import Search from "./Search";

const Footer = () => {
  return (
    <>
      <footer className="Footer">
        <div className="FooterWrap">
          <div className="FooterIconBox1 FooterIconBox">
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} className="homeIcon" />
              <p className="iconText homeIconText">홈</p>
            </Link>
          </div>

          <div className="FooterIconBox2 FooterIconBox">
            <Link to="/Search">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="searchIcon"
              />
              <p className="iconText searchIconText">검색하기</p>
            </Link>
          </div>

          <div className="FooterIconBox3 FooterIconBox">
            <FontAwesomeIcon icon={faFolderOpen} className="folderIcon" />
            <p className="iconText librayIconText">내 라이브러리</p>
          </div>
          <div className="FooterIconBox4 FooterIconBox">
            <FontAwesomeIcon icon={faHeadphones} className="premiumIcon" />
            <p className="iconText premiumIconText">프리미엄</p>
          </div>
        </div>
      </footer>

      <Routes>
        <Route path="/Search" element={<Search />} />
      </Routes>
    </>
  );
};

export default Footer;
