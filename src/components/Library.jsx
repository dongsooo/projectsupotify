import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";
import { libraryList as initialLibraryList } from "../server/librayList"; // 초기 리스트를 가져옵니다.
import { libraryList } from "../server/librayList";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import MusicPlayer2 from "./MusicPlayer2";

const Library = () => {
  const [libraryList, setLibraryList] = useState(initialLibraryList); // 상태로 리스트를 관리합니다.

  const handleDelete = (id) => {
    const updatedList = libraryList.filter((item) => item.id !== id); // 아이디가 다른 아이템들만 남겨서 새로운 리스트 생성
    setLibraryList(updatedList); // 상태 업데이트
  };
  return (
    <div className="Library">
      <p>내 라이브러리</p>
      <div className="LibrayList">
        <ul>
          {libraryList.map((data) => {
            return (
              <li key={data.id}>
                <div className="LibraryImgBox">
                  <img src={data.musicImg} alt="" />
                </div>
                <div className="LibraryTitleBox">
                  <p>{data.musicTitle}</p>
                  <p>{data.musicSInger}</p>
                </div>
                <div className="LibraryiconBox">
                  <Link to="/MusicPlayer2">
                    <FontAwesomeIcon icon={faPlay} className="LibrayPlayIcon" />
                  </Link>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="LibrayTrachIcon"
                    onClick={() => handleDelete(data.id)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Library;
