import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faBackwardStep,
  faForwardStep,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const MusicPlayerMini = () => {
  const [isLarge, setIsLarge] = useState("MusicPlayerMini");

  return (
    <div className="MusicPlayerMini">
      <div className="MusicPlayerMiniIconBox">
        <FontAwesomeIcon
          icon={faChevronUp}
          className="playerMiniBtn"
          onClick={() => {
            setIsLarge("MusicPlayerMini " + "large");
          }}
        />
      </div>
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
  );
};

export default MusicPlayerMini;
