import React, { useState, useEffect } from "react";
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

import { Link } from "react-router-dom";
import Library from "./Library";

const MusicPlayer2 = () => {
  const [isMini, setIsMini] = useState("MusicPlayer");
  const [isLarge, setIsLarge] = useState("MusicPlayerMini");
  const [likeNums, setLikeNums] = useState(123);
  const [isLike, setIsLike] = useState("MusicPlayerLikeIcon");
  const [isPlaying, setIsPlaying] = useState(false);
  const [btnPosition, setBtnPosition] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0); // 추가: 경과 시간 상태

  const likeClicked = () => {
    if (isLike === "MusicPlayerLikeIcon") {
      setLikeNums(likeNums + 1);
      setIsLike("MusicPlayerLikeIcon like");
    } else {
      setLikeNums(likeNums - 1);
      setIsLike("MusicPlayerLikeIcon");
    }
  };

  const contBarFunc1 = () => {
    setIsMini("MusicPlayer mini");
    setIsLarge("MusicPlayerMini large");
  };

  const contBarFunc2 = () => {
    setIsMini("MusicPlayer");
    setIsLarge("MusicPlayerMini");
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let animationFrameId;
    let startTime;

    const duration = 30000; // 예시: 30초 동안 이동

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime + elapsedTime;
      const progress = Math.min(timeElapsed / duration, 1); // 0에서 1 사이의 값
      const position = progress * 100; // 0%에서 100%까지 이동

      setBtnPosition(position);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setIsPlaying(false); // 애니메이션이 끝나면 재생 상태를 멈춤으로 설정
      }
    };

    if (isPlaying) {
      startTime = performance.now();
      animationFrameId = requestAnimationFrame(animate);
    } else {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        setElapsedTime((prev) => prev + (performance.now() - startTime));
      }
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, elapsedTime]);

  return (
    <>
      <div id="MusicPlayer2" className={isMini}>
        <div className="MusicPlayerIconBox">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="MusicTopIcon"
            onClick={contBarFunc1}
          />
        </div>
        <div className="MusicPlayerImgBox">
          <img
            src="https://dongsooo.github.io/imgs/img/01_section-01.jpg"
            alt=""
          />
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
          <Link to="/Coment">
            <FontAwesomeIcon
              icon={faMessage}
              className="MusicPlayerComentIcon"
            />
          </Link>
        </div>
        <div className="MusicPlayerControlBox">
          <div className="MusicPlayerLineBox">
            <div className="MusicPlayerLine">
              <div
                className="MusicPlayerBtnBox"
                style={{ left: `${btnPosition}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="MusicPlayerBottomBox">
          <div className="MusicPlayerPrevBtn">
            <FontAwesomeIcon icon={faBackwardStep} className="prevBtn" />
          </div>
          <div className="MusicPlayerPlayBtn">
            {isPlaying ? (
              <FontAwesomeIcon
                icon={faStop}
                className="stopBtn"
                onClick={togglePlay}
              />
            ) : (
              <FontAwesomeIcon
                icon={faPlay}
                className="playBtn"
                onClick={togglePlay}
              />
            )}
          </div>
          <div className="MusicPlayerNextBtn">
            <FontAwesomeIcon icon={faForwardStep} />
          </div>
        </div>
      </div>
      <div className={isLarge}>
        <div className="MusicPlayerMiniIconBox">
          <FontAwesomeIcon
            icon={faChevronUp}
            className="playerMiniBtn"
            onClick={contBarFunc2}
          />
          <div className="MusicPlayerMiniImgBox"></div>
          <div className="MusicPlayerMiniTitleBox">
            <p>Intro</p>
            <p>M83</p>
          </div>
          <div className="MusicPlayerMiniContBox">
            <div className="MusicPlayerMiniPrevBtn">
              <FontAwesomeIcon icon={faBackwardStep} className="miniPrevBtn" />
            </div>
            <div className="MusicPlayerMiniPlayBtn">
              {isPlaying ? (
                <FontAwesomeIcon
                  icon={faStop}
                  className="miniStopBtn"
                  onClick={togglePlay}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPlay}
                  className="miniPlayBtn"
                  onClick={togglePlay}
                />
              )}
            </div>
            <div className="MusicPlayerMiniNextBtn">
              <FontAwesomeIcon icon={faForwardStep} className="miniPlayBtn" />
            </div>
          </div>
        </div>
      </div>

      {/* <MusicPlayerMini /> */}
      <Library />
    </>
  );
};

export default MusicPlayer2;
