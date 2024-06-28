import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { searchList as initialSearchList } from "../server/searchList"; // 초기 리스트를 가져옵니다.

import { searchList } from "../server/searchList";
import { Link } from "react-router-dom";

const SearchList = () => {
  const [searchList, setSearchList] = useState(initialSearchList); // 상태로 리스트를 관리합니다.

  const handleDelete = (id) => {
    const updatedList = searchList.filter((item) => item.id !== id); // 아이디가 다른 아이템들만 남겨서 새로운 리스트 생성
    setSearchList(updatedList); // 상태 업데이트
  };
  return (
    <div className="Library">
      <p>Chill</p>
      <div className="LibrayList">
        <ul>
          {searchList.map((data) => {
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
                  <Link to="/MusicPlayer3">
                    <FontAwesomeIcon icon={faPlay} className="LibrayPlayIcon" />
                  </Link>

                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className="LibrayTrachIcon"
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

export default SearchList;
