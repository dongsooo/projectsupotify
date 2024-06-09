import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faHeart,
  faMessage,
  faPlay,
  faBackwardStep,
  faForwardStep,
  faStop,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import MusicList1 from "./MusicList1";
import MusicLIst2 from "./MusicLIst2";
import MusicList3 from "./MusicList3";
import MusicList4 from "./MusicList4";
import MusicPlayerMini from "./MusicPlayerMini";

const MusicPlayer = () => {
  const [isMini, setIsMini] = useState("MusicPlayer");
  const [isLarge, setIsLarge] = useState("MusicPlayerMini");
  const [openMini, setOpenMini] = useState();
  const [likeNums, setLikeNums] = useState(123);
  const [isLike, setIsLike] = useState("MusicPlayerLikeIcon");
  const [playBtn, setPlayBtn] = useState("playBtn");

  const likeClicked = () => {
    if (isLike === "MusicPlayerLikeIcon") {
      setLikeNums(likeNums + 1);
      setIsLike("MusicPlayerLikeIcon " + "like");
    } else {
      setLikeNums(likeNums - 1);
      setIsLike("MusicPlayerLikeIcon");
    }
  };
  const contBarFunc1 = () => {
    setIsMini("MusicPlayer " + "mini");
    setIsLarge("MusicPlayerMini " + "large");
    console.log(isLarge);
  };
  const contBarFunc2 = () => {
    setIsMini("MusicPlayer");
    setIsLarge("MusicPlayerMini");
    console.log(isLarge);
  };

  return (
    <>
      <div id="playCont" className={isMini}>
        <div className="MusicPlayerIconBox">
          <FontAwesomeIcon
            icon={faChevronUp}
            className="MusicTopIcon"
            onClick={contBarFunc1}
          />
        </div>
        <div className="MusicPlayerImgBox">
          <img src="../img/01_section-02.jpg" alt="" />
        </div>
        <div className="MusicPlayerTitleBox">
          <p className="MusicPlayerTilte">Intro</p>
          <p className="MusicPlayerSinger">M83</p>
        </div>
        <div className="MusicPlayerLikeBox">
          <FontAwesomeIcon
            icon={faHeart}
            className={isLike}
            onClick={likeClicked}
          />
          <p className="likeNums">{likeNums}</p>
          <FontAwesomeIcon icon={faMessage} className="MusicPlayerComentIcon" />
        </div>
        <div className="MusicPlayerControlBox">
          <div className="MusicPlayerLineBox">
            <div className="MusicPlayerLine">
              <div className="MusicPlayerBtnBox"></div>
            </div>
          </div>
        </div>
        <div className="MusicPlayerBottomBox">
          <div className="MusicPlayerPrevBtn">
            <FontAwesomeIcon icon={faBackwardStep} className="prevBtn" />
          </div>
          <div className="MusicPlayerPlayBtn">
            <FontAwesomeIcon icon={faPlay} className="playBtn" />
          </div>
          <div className="MusicPlayerNextBtn">
            <FontAwesomeIcon icon={faForwardStep} />
          </div>
        </div>
      </div>
      <div className={isLarge}>
        <div className="MusicPlayerMiniIconBox">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="playerMiniBtn"
            onClick={contBarFunc2}
          />
          <div className="MusicPlayerMiniContBox">
            <div className="MusicPlayerMiniPrevBtn">
              <FontAwesomeIcon icon={faBackwardStep} className="miniPrevBtn" />
            </div>
            <div className="MusicPlayerMiniPlayBtn">
              <FontAwesomeIcon icon={faPlay} className="miniPlayBtn" />
            </div>
            <div className="MusicPlayerMiniNextBtn">
              <FontAwesomeIcon icon={faForwardStep} className="miniPlayBtn" />
            </div>
          </div>
        </div>
      </div>
      <MusicPlayerMini />
      <MusicList1 />
      <MusicLIst2 />
      <MusicList3 />
      <MusicList4 />
    </>
  );
};

export default MusicPlayer;
